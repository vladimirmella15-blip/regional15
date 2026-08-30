import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth.config'
import crypto from 'crypto'

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    if ((session.user as any)?.role !== 'admin') return NextResponse.json({ error: 'No autorizado' }, { status: 403 })
    const { getAllUsers } = await import('@/lib/data-service')
    const users = await getAllUsers()
    return NextResponse.json(users)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    if ((session.user as any)?.role !== 'admin') return NextResponse.json({ error: 'No autorizado' }, { status: 403 })

    const body = await request.json()
    const { saveUser, deleteUser, getUser, getUserByEmail } = await import('@/lib/data-service')

    if (body.action === 'save') {
      if (!body.data.nombre || !body.data.email) {
        return NextResponse.json({ error: 'Nombre y email requeridos' }, { status: 400 })
      }
      const existing = body.data.id ? await getUser(body.data.id) : await getUserByEmail(body.data.email)
      if (!body.data.id && existing) {
        return NextResponse.json({ error: 'El email ya está registrado' }, { status: 400 })
      }
      const password_hash = body.data.password ? hashPassword(body.data.password) : existing?.password_hash
      if (!password_hash) return NextResponse.json({ error: 'Se requiere contraseña para nuevos usuarios' }, { status: 400 })
      const result = await saveUser({ ...body.data, password_hash })
      return NextResponse.json(result)
    }

    if (body.action === 'delete') {
      await deleteUser(body.id)
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Acción inválida' }, { status: 400 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
