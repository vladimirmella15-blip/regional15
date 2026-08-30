import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    const poaId = url.searchParams.get('poaId')
    const action = url.searchParams.get('action')
    const { getAllPOA, getPOAById, getSeguimientoByPOAId } = await import('@/lib/data-service')

    if (action === 'seguimiento' && poaId) {
      return NextResponse.json(await getSeguimientoByPOAId(poaId))
    }
    if (id) {
      const poa = await getPOAById(id)
      if (!poa) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
      return NextResponse.json(poa)
    }
    return NextResponse.json(await getAllPOA())
  } catch {
    return NextResponse.json({ error: 'Error al cargar POA' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const body = await request.json()
    const { savePOA, saveSeguimientoPOA, deletePOA } = await import('@/lib/data-service')

    if (body.action === 'save') {
      return NextResponse.json(await savePOA(body.data))
    }
    if (body.action === 'seguimiento') {
      return NextResponse.json(await saveSeguimientoPOA(body.data))
    }
    if (body.action === 'delete' && body.id) {
      await deletePOA(body.id)
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ error: 'Acción no válida' }, { status: 400 })
  } catch {
    return NextResponse.json({ error: 'Error al procesar' }, { status: 500 })
  }
}
