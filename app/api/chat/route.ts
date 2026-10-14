import { NextRequest, NextResponse } from 'next/server'
import { buscarCentro, buscarCentros, centrosCercanos, estadisticas, resumenParaPrompt } from '@/lib/centros-index'

const API_KEY = process.env.AI_API_KEY
const API_URL = process.env.AI_API_URL || 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = process.env.AI_MODEL || 'llama-3.3-70b-versatile'

// ---------------------------------------------------------------- rate limit
// Con tool calling cada pregunta cuesta hasta dos llamadas al modelo, asi que
// el endpoint publico necesita un tope. Es en memoria: sirve para un despliegue
// monolitico, pero si se corre en varias instancias hay que moverlo a Supabase
// o a un almacen compartido.
const LIMITE_POR_MINUTO = 10
const Ventana = new Map<string, number[]>()

function excedeLimite(ip: string): boolean {
  const ahora = Date.now()
  const recientes = (Ventana.get(ip) || []).filter(t => ahora - t < 60_000)
  if (recientes.length >= LIMITE_POR_MINUTO) {
    Ventana.set(ip, recientes)
    return true
  }
  recientes.push(ahora)
  Ventana.set(ip, recientes)
  // Limpieza perezosa para que el Map no crezca sin limite.
  if (Ventana.size > 5000) {
    for (const [k, v] of Ventana) if (!v.some(t => ahora - t < 60_000)) Ventana.delete(k)
  }
  return false
}

function ipDe(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'desconocida'
  )
}

// ------------------------------------------------------------------ contexto
const CONTEXTO_FIJO = `Eres un asistente virtual de la Regional 15 de Educación del MINERD (República Dominicana). Responde de forma clara, amable y profesional, siempre en español.

INFORMACIÓN DE LA REGIONAL 15:
- Dirección: Calle Arzobispo Portes, Santo Domingo 10208, R.D.
- Teléfonos: 809-686-3598 · 809-686-9004
- Correo: contacto@regional15.edu.do
- Horario: Lunes a Viernes 8:00 a.m. – 4:00 p.m. (horario extendido hasta 6:00 p.m.)
- Director: Lic. Eddy Chávez Placencio, M.A.
- Instagram: @regional_15minerd
- Misión: Impulsar una educación transformadora en la Regional 15 mediante una gestión participativa e innovadora, fortaleciendo las competencias integrales de los estudiantes y promoviendo la inclusión y la ciudadanía responsable.
- Programas: Gala Regional de Artes, ExpoFeria Pedagógica, PRECE, DIGITALES, SIGACOM, Edyntra, Alimentación Escolar, Educación Inclusiva.
- Todos los servicios son gratuitos.

CÓMO RESPONDER SOBRE CENTROS EDUCATIVOS:
Tienes herramientas para consultar el listado real de centros. Úsalas siempre que la pregunta sea sobre un centro concreto, un nivel, un sector, un distrito o una cifra de matrícula.
- NUNCA inventes ni adivines el nombre de un centro, su código SIGERD, su dirección o su matrícula. Si no sale de una herramienta, di que no lo tienes.
- Cita siempre el código SIGERD del centro para que el ciudadano lo pueda buscar.
- Si una herramienta devuelve varios centros, presenta los más relevantes y menciona que hay más.
- Si no hay AI configurada el usuario recibe la respuesta estandar.`

const INSTRUCCIONES = `HERRAMIENTAS DISPONIBLES:
- buscar_centros(texto, distrito, nivel, tipo, sector, limite): busca por nombre, codigo, nivel, sector o distrito.
- obtener_centro(codigo): ficha completa de un centro por su codigo SIGERD de 5 digitos.
- centros_cercanos(lat, lng, radio_km): centros alrededor de unas coordenadas. Sirve para "cerca de mi".
- estadisticas(distrito, nivel, tipo): totales, matrícula y conteos agregados.

Niveles vigentes: Inicial, Primaria, Secundaria, "Inicial - Primaria", "Inicial - Primaria - Secundaria", "Primaria - Secundaria", "Educación de Adultos".
Tipos: Público, Privado, Semioficial.`

function construirSystemPrompt(): string {
  return [
    CONTEXTO_FIJO,
    '',
    'LISTADO DE CENTROS DE LA REGIONAL 15 (dato oficial, generado del padron del MINERD):',
    resumenParaPrompt(),
    '',
    INSTRUCCIONES,
  ].join('\n')
}

// ---------------------------------------------------------------- herramientas
type Args = Record<string, unknown>

const HERRAMIENTAS = [
  {
    type: 'function' as const,
    function: {
      name: 'buscar_centros',
      description:
        'Busca centros educativos por nombre, codigo SIGERD, nivel, tipo, sector o distrito. Devuelve una lista breve con codigo, nombre, nivel, tipo, distrito, sector y matricula.',
      parameters: {
        type: 'object',
        properties: {
          texto: { type: 'string', description: 'Nombre del centro, sector o palabra clave' },
          distrito: { type: 'string', description: 'Ej. "Los Alcarrizos", "Pedro Brand", "Herrera"' },
          nivel: { type: 'string', description: 'Ej. "Secundaria", "Inicial - Primaria"' },
          tipo: { type: 'string', enum: ['Público', 'Privado', 'Semioficial'] },
          sector: { type: 'string', description: 'Barrio, ej. "Pantoja", "La Cuaba"' },
          limite: { type: 'integer', description: 'Maximo de resultados (1-25, por defecto 10)' },
        },
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'obtener_centro',
      description: 'Ficha completa de un centro educativo a partir de su codigo SIGERD de 5 digitos.',
      parameters: {
        type: 'object',
        properties: { codigo: { type: 'string', description: 'Codigo SIGERD de 5 digitos' } },
        required: ['codigo'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'centros_cercanos',
      description: 'Centros educativos mas cercanos a unas coordenadas, ordenados por distancia.',
      parameters: {
        type: 'object',
        properties: {
          lat: { type: 'number', description: 'Latitud' },
          lng: { type: 'number', description: 'Longitud' },
          radio_km: { type: 'number', description: 'Radio en kilometros (0.2-50, por defecto 3)' },
        },
        required: ['lat', 'lng'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'estadisticas',
      description:
        'Totales agregados: cantidad de centros, matrícula total, matrícula por distrito, por nivel y por tipo, y los centros con mayor matrícula.',
      parameters: {
        type: 'object',
        properties: {
          distrito: { type: 'string' },
          nivel: { type: 'string' },
          tipo: { type: 'string', enum: ['Público', 'Privado', 'Semioficial'] },
        },
      },
    },
  },
]

function ejecutar(nombre: string, args: Args) {
  const str = (k: string) => (typeof args[k] === 'string' ? (args[k] as string) : undefined)
  const num = (k: string) => (typeof args[k] === 'number' ? (args[k] as number) : undefined)

  switch (nombre) {
    case 'buscar_centros': {
      const lista = buscarCentros({
        texto: str('texto'),
        distrito: str('distrito'),
        nivel: str('nivel'),
        tipo: str('tipo'),
        sector: str('sector'),
        limite: num('limite'),
      })
      return {
        encontrados: lista.length,
        centros: lista.map(c => ({
          codigo: c.codigo,
          nombre: c.nombre,
          nivel: c.nivel,
          tipo: c.tipo,
          distrito: `${c.distrito} ${c.distritoNombre}`,
          sector: c.sector,
          direccion: c.direccion,
          matricula: c.matricula,
          secciones: c.secciones,
        })),
      }
    }
    case 'obtener_centro': {
      const c = buscarCentro(String(args.codigo ?? ''))
      if (!c) return { encontrado: false, mensaje: 'No existe un centro con ese codigo SIGERD.' }
      return { encontrado: true, centro: c }
    }
    case 'centros_cercanos': {
      const lat = num('lat')
      const lng = num('lng')
      if (lat == null || lng == null) return { error: 'Faltan las coordenadas.' }
      const lista = centrosCercanos(lat, lng, num('radio_km') ?? 3, 10)
      return {
        encontrados: lista.length,
        centros: lista.map(r => ({
          codigo: r.centro.codigo,
          nombre: r.centro.nombre,
          nivel: r.centro.nivel,
          tipo: r.centro.tipo,
          distrito: r.centro.distritoNombre,
          sector: r.centro.sector,
          distancia_km: Number(r.distanciaKm!.toFixed(2)),
        })),
      }
    }
    case 'estadisticas':
      return estadisticas({ distrito: str('distrito'), nivel: str('nivel'), tipo: str('tipo') })
    default:
      return { error: `Herramienta desconocida: ${nombre}` }
  }
}

// ---------------------------------------------------------------------- POST
type Mensaje = { role: string; content: string | null; tool_calls?: unknown[]; tool_call_id?: string; name?: string }

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json()

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ answer: 'Por favor escribe una pregunta válida.' })
    }

    if (excedeLimite(ipDe(req))) {
      return NextResponse.json({
        answer:
          'Has hecho demasiadas preguntas seguidas. Espera un minuto y vuelve a intentarlo, o llámanos al 809-686-3598.',
      })
    }

    if (!API_KEY) {
      return NextResponse.json({
        answer: 'Lo siento, el asistente no está configurado con una clave de API. Contacta al administrador para habilitar esta función.',
      })
    }

    const mensajes: Mensaje[] = [
      { role: 'system', content: construirSystemPrompt() },
      { role: 'user', content: question },
    ]

    let respuesta = await llamarGroq(mensajes, true)
    let rondas = 0

    // El modelo decide si necesita consultar el listado. Dos rondas bastan para
    // una pregunta normal; con mas, el bucle se corta para no gastar cuota.
    while (respuesta?.toolCalls?.length && rondas < 2) {
      rondas++
      for (const llamada of respuesta.toolCalls) {
        let resultado: unknown
        try {
          resultado = ejecutar(llamada.name, llamada.args as Args)
        } catch (err) {
          resultado = { error: 'No se pudo ejecutar la consulta.' }
          console.error('Error en herramienta', llamada.name, err)
        }
        mensajes.push({
          role: 'assistant',
          content: null,
          tool_calls: [llamada.raw],
        })
        mensajes.push({
          role: 'tool',
          tool_call_id: llamada.id,
          name: llamada.name,
          content: JSON.stringify(resultado),
        })
      }
      respuesta = await llamarGroq(mensajes, rondas === 0)
    }

    if (!respuesta?.answer) {
      return NextResponse.json({ answer: 'Lo siento, no pude generar una respuesta en este momento.' })
    }
    return NextResponse.json({ answer: respuesta.answer })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json({ answer: 'Lo siento, ocurrió un error inesperado. Intenta de nuevo.' })
  }
}

interface LlamadaTool {
  id: string
  name: string
  args: Args
  raw: Record<string, unknown>
}

async function llamarGroq(mensajes: Mensaje[], conHerramientas: boolean) {
  const cuerpo: Record<string, unknown> = {
    model: MODEL,
    messages: mensajes,
    temperature: 0.1,
    max_tokens: 500,
  }
  if (conHerramientas) cuerpo.tools = HERRAMIENTAS
  cuerpo.tool_choice = conHerramientas ? 'auto' : 'none'

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
    body: JSON.stringify(cuerpo),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('AI API error:', response.status, errorText)
    throw new Error(`AI API ${response.status}`)
  }

  const data = await response.json()
  const mensaje = data.choices?.[0]?.message
  const llamadas: LlamadaTool[] = (mensaje?.tool_calls || []).map((tc: Record<string, any>) => ({
    id: tc.id,
    name: tc.function?.name,
    args: safeParse(tc.function?.arguments),
    raw: tc,
  }))

  return { answer: mensaje?.content || null, toolCalls: llamadas }
}

function safeParse(s: unknown): Args {
  if (typeof s !== 'string') return {}
  try {
    return JSON.parse(s)
  } catch {
    return {}
  }
}
