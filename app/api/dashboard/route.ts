import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { getDashboardStats } = await import('@/lib/data-service')
    const stats = await getDashboardStats()
    return NextResponse.json(stats)
  } catch {
    return NextResponse.json({ error: 'Error al cargar estadísticas' }, { status: 500 })
  }
}
