import { NextResponse } from 'next/server'
import crypto from 'crypto'
import nodemailer from 'nodemailer'
import { supabase } from '@/lib/supabase'

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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, departamento, asunto, mensaje } = body

    if (!nombre || !email || !mensaje || !departamento || !asunto) {
      return NextResponse.json({ error: 'Todos los campos obligatorios deben ser completados' }, { status: 400 })
    }

    const id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`
    await supabase.from('contact_messages').insert({
      id,
      nombre: nombre.trim(),
      email: email.trim(),
      telefono: (telefono || '').trim(),
      departamento,
      asunto: asunto.trim(),
      mensaje: mensaje.trim(),
    })

    const transporter = getTransporter()
    if (transporter) {
      const from = process.env.SMTP_FROM || process.env.SMTP_USER || 'noreply@regional15.edu.do'
      const contactTo = process.env.CONTACT_TO || 'contacto@regional15.edu.do'
      const fecha = new Date().toLocaleString('es-DO', { timeZone: 'America/Santo_Domingo' })

      await transporter.sendMail({
        from,
        to: contactTo,
        subject: `[Contacto Web] ${asunto} - ${nombre}`,
        html: `
          <h2>Nuevo mensaje desde la web</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Nombre</td><td style="padding:8px">${nombre}</td></tr>
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Email</td><td style="padding:8px">${email}</td></tr>
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Teléfono</td><td style="padding:8px">${telefono || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Departamento</td><td style="padding:8px">${departamento}</td></tr>
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Asunto</td><td style="padding:8px">${asunto}</td></tr>
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Mensaje</td><td style="padding:8px">${mensaje}</td></tr>
            <tr><td style="padding:8px;font-weight:700;background:#f5f5f5">Fecha</td><td style="padding:8px">${fecha}</td></tr>
          </table>
        `,
      })

      await transporter.sendMail({
        from,
        to: email,
        subject: 'Hemos recibido tu mensaje – Regional 15',
        html: `
          <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
            <div style="background:#003876;color:#fff;padding:24px;text-align:center;border-radius:8px 8px 0 0">
              <h1 style="margin:0;font-size:1.3rem">Regional de Educación 15</h1>
              <p style="margin:4px 0 0;opacity:.9">Ministerio de Educación – MINERD</p>
            </div>
            <div style="padding:24px;border:1px solid #e0e0e0;border-top:0;border-radius:0 0 8px 8px">
              <h2 style="color:#003876">Hola ${nombre},</h2>
              <p>Hemos recibido tu mensaje correctamente. Gracias por comunicarte con la Regional 15.</p>
              <p style="background:#f5f5f5;padding:16px;border-radius:6px;font-size:.9rem">
                <strong>Asunto:</strong> ${asunto}<br>
                <strong>Departamento:</strong> ${departamento}<br>
                <strong>Fecha:</strong> ${fecha}
              </p>
              <p>Uno de nuestros representantes te responderá a la brevedad posible.</p>
              <hr style="border:none;border-top:1px solid #e0e0e0;margin:24px 0">
              <p style="font-size:.8rem;color:#666">
                Regional de Educación 15 · C. Arzobispo Portes, Santo Domingo 10208 · Tel. 809-686-3598
              </p>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true, message: 'Mensaje recibido correctamente' })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error al procesar el mensaje' }, { status: 500 })
  }
}
