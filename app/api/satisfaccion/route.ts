import { NextResponse } from 'next/server'

function valido(n: any) {
  return Number.isInteger(n) && n >= 1 && n <= 5
}

export async function GET() {
  try {
    const { getServerSession } = await import('next-auth')
    const { authOptions } = await import('@/lib/auth.config')
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    const { getAllEncuestas } = await import('@/lib/data-service')
    const encuestas = await getAllEncuestas()
    return NextResponse.json(encuestas)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { perfil, departamento, facilidad, atencion, utilidad, transparencia, trato, comentario, origen } = body

    const ratings = { facilidad, atencion, utilidad, transparencia, trato }
    for (const [key, value] of Object.entries(ratings)) {
      if (!valido(value)) {
        return NextResponse.json({ error: `La valoración "${key}" debe estar entre 1 y 5` }, { status: 400 })
      }
    }

    const { createEncuesta } = await import('@/lib/data-service')
    const result = await createEncuesta({
      perfil: (perfil || 'Ciudadano').trim(),
      departamento: (departamento || 'General').trim(),
      facilidad: Number(facilidad),
      atencion: Number(atencion),
      utilidad: Number(utilidad),
      transparencia: Number(transparencia),
      trato: Number(trato),
      comentario: (comentario || '').trim().slice(0, 1000),
      origen: origen === 'seccion' ? 'seccion' : 'popup',
    })

    return NextResponse.json({ success: true, id: result?.id })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error al procesar la encuesta' }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { getServerSession } = await import('next-auth')
    const { authOptions } = await import('@/lib/auth.config')
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    const { id } = await request.json()
    if (!id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 })
    const { deleteEncuesta } = await import('@/lib/data-service')
    await deleteEncuesta(id)
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
