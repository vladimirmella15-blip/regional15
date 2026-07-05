import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    const { getAllSalonRequests } = await import('@/lib/data-service')
    const requests = await getAllSalonRequests()
    return NextResponse.json(requests)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { createSalonRequest, approveSalonRequest, rejectSalonRequest, saveCalendario } = await import('@/lib/data-service')

    if (body.action === 'submit') {
      if (!body.solicitante_nombre || !body.solicitante_email || !body.titulo_actividad || !body.fecha_solicitada) {
        return NextResponse.json({ error: 'Complete los campos obligatorios' }, { status: 400 })
      }
      const result = await createSalonRequest(body)
      return NextResponse.json({ success: true, id: result.id })
    }

    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

    if (body.action === 'approve') {
      const eventoId = `cal-salon-${Date.now()}`
      await saveCalendario({
        id: eventoId,
        titulo: body.titulo_actividad || 'Actividad Salón Técnico',
        descripcion: body.descripcion || '',
        fecha_inicio: body.fecha_solicitada,
        fecha_fin: body.fecha_fin || body.fecha_solicitada,
        hora: body.hora_inicio || '',
        ubicacion: 'Salón Técnico',
        color: '#f59e0b',
        todo_el_dia: body.hora_inicio ? 0 : 1,
      })
      const result = await approveSalonRequest(body.id, eventoId)
      return NextResponse.json(result)
    }

    if (body.action === 'reject') {
      const result = await rejectSalonRequest(body.id, body.motivo_rechazo || '')
      return NextResponse.json(result)
    }

    return NextResponse.json({ error: 'Acción inválida' }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
