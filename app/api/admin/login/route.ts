import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json()
    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin15'

    if (password === expectedPassword) {
      const token = crypto.createHash('sha256').update(expectedPassword).digest('hex')
      
      const response = NextResponse.json({ success: true })
      
      response.cookies.set('admin_session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 1 día
        path: '/',
      })
      
      return response
    }

    return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
