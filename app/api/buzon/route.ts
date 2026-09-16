import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const CATEGORIAS = ['queja', 'sugerencia', 'denuncia', 'reconocimiento']

function getTransporter() {
  const host = process.env.SMTP_HOST
  if (!host) return null
  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function GET() {
  try {
    const { getServerSession } = await import('next-auth')
    const { authOptions } = await import('@/lib/auth.config')
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    const { getAllSugerencias } = await import('@/lib/data-service')
    const sugerencias = await getAllSugerencias()
    return NextResponse.json(sugerencias)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { createSugerencia, updateSugerenciaEstado, deleteSugerencia } = await import('@/lib/data-service')

    if (body.action === 'submit') {
      const { nombre, email, categoria, distrito, departamento, mensaje } = body
      if (!mensaje || !mensaje.trim()) {
        return NextResponse.json({ error: 'El mensaje es obligatorio' }, { status: 400 })
      }
      if (!CATEGORIAS.includes(categoria)) {
        return NextResponse.json({ error: 'Categoría inválida' }, { status: 400 })
      }

      const result = await createSugerencia({
        nombre: (nombre || 'Anónimo').trim(),
        email: (email || '').trim(),
        categoria,
        distrito: (distrito || '').trim(),
        departamento: (departamento || 'General').trim(),
        mensaje: mensaje.trim().slice(0, 2000),
      })

      const transporter = getTransporter()
      if (transporter) {
        const from = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@regional15.edu.do'
        const contactTo = process.env.CONTACT_TO || 'contacto@regional15.edu.do'
        const fecha = new Date().toLocaleString('es-DO', { timeZone: 'America/Santo_Domingo' })
        await transporter.sendMail({
          from,
          to: contactTo,
          subject: `[Buzón ${categoria.toUpperCase()}] ${departamento} - ${nombre || 'Anónimo'}`,
          html: `
            <h2>Nueva entrada en el Buzón de Quejas y Sugerencias</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px">
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Categoría</td><td style="padding:8px">${categoria}</td></tr>
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Nombre</td><td style="padding:8px">${nombre || 'Anónimo'}</td></tr>
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Email</td><td style="padding:8px">${email || '—'}</td></tr>
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Distrito / Centro</td><td style="padding:8px">${distrito || '—'}</td></tr>
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Departamento</td><td style="padding:8px">${departamento}</td></tr>
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Mensaje</td><td style="padding:8px">${mensaje}</td></tr>
              <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Fecha</td><td style="padding:8px">${fecha}</td></tr>
            </table>
          `,
        })
      }

      return NextResponse.json({ success: true, id: result?.id })
    }

    const { getServerSession } = await import('next-auth')
    const { authOptions } = await import('@/lib/auth.config')
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

    if (body.action === 'estado') {
      if (!body.id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 })
      const result = await updateSugerenciaEstado(body.id, body.estado, (body.respuesta || '').trim())
      return NextResponse.json(result)
    }

    if (body.action === 'delete') {
      if (!body.id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 })
      await deleteSugerencia(body.id)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Acción inválida' }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error al procesar la solicitud' }, { status: 500 })
  }
}
