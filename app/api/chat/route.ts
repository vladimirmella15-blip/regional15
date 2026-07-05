import { NextRequest, NextResponse } from 'next/server'

const API_KEY = process.env.AI_API_KEY
const API_URL = process.env.AI_API_URL || 'https://api.groq.com/openai/v1/chat/completions'
const MODEL = process.env.AI_MODEL || 'llama-3.3-70b-versatile'

const FAQ_CONTEXT = `Eres un asistente virtual de la Regional 15 de Educación del MINERD (República Dominicana). Responde preguntas de forma clara, amable y profesional en español.

INFORMACIÓN DE LA REGIONAL 15:
- Dirección: Calle Arzobispo Portes, Santo Domingo 10208, R.D.
- Teléfonos: 809-686-3598 · 809-686-9004
- Correo: contacto@regional15.edu.do
- Horario: Lunes a Viernes 8:00 a.m. – 4:00 p.m. (horario extendido hasta 6:00 p.m.)
- Director: Lic. Eddy Chávez Placencio, M.A.
- Instagram: @regional_15minerd (9,429 seguidores)
- Facebook: Regional 15 MINERD
- Web: https://regional15.edu.do
- Misión: Garantizar una educación inclusiva, equitativa y de calidad
- Visión: Ser reconocida como la Regional modelo en innovación pedagógica

DISTRITOS EDUCATIVOS (6):
- 15-01 Los Alcarrizos: 244 centros, 79,031 estudiantes
- 15-02 Santo Domingo Centro: 208 centros, 63,067 estudiantes
- 15-03 Sur-Central: 332 centros, 81,490 estudiantes
- 15-04 Noroeste (Cristo Rey): 255 centros, 70,597 estudiantes
- 15-05 Herrera (Oeste): 332 centros, 103,177 estudiantes
- 15-06 Pedro Brand: 72 centros, 24,785 estudiantes
- Total: 1,443 centros, 422,147 estudiantes

PROGRAMAS: Gala Regional de Artes, ExpoFeria Pedagógica, PRECE 2025 (Medalla de Bronce - otorgado por el MAP), DIGITALES, SIGACOM, Edyntra, Alimentación Escolar, Educación Inclusiva.

SERVICIOS: RRHH, Certificaciones, supervisión educativa, orientación psicológica, trámites docentes, tecnología educativa. TODOS GRATUITOS.

Si la pregunta es sobre algo específico de la Regional 15 y no tienes la información exacta, sugiere amablemente contactar a la Regional 15. Responde SIEMPRE en español.`

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json()

    if (!question || typeof question !== 'string') {
      return NextResponse.json({ answer: 'Por favor escribe una pregunta válida.' })
    }

    if (!API_KEY) {
      return NextResponse.json({
        answer: 'Lo siento, el asistente no está configurado con una clave de API. Contacta al administrador para habilitar esta función.',
      })
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: FAQ_CONTEXT },
          { role: 'user', content: question },
        ],
        temperature: 0.3,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('AI API error:', response.status, errorText)
      return NextResponse.json({
        answer: 'Lo siento, hubo un error al procesar tu pregunta. Intenta de nuevo más tarde.',
      })
    }

    const data = await response.json()
    const answer = data.choices?.[0]?.message?.content

    if (!answer) {
      return NextResponse.json({
        answer: 'Lo siento, no pude generar una respuesta en este momento.',
      })
    }

    return NextResponse.json({ answer })
  } catch (err) {
    console.error('Chat API error:', err)
    return NextResponse.json({
      answer: 'Lo siento, ocurrió un error inesperado. Intenta de nuevo.',
    })
  }
}
