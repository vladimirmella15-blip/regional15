import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import crypto from 'crypto'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('admin_session')?.value
    const expectedPassword = process.env.ADMIN_PASSWORD || 'admin15'
    const expectedToken = crypto.createHash('sha256').update(expectedPassword).digest('hex')

    if (sessionToken === expectedToken) {
      return NextResponse.json({ authorized: true })
    }

    return NextResponse.json({ authorized: false })
  } catch {
    return NextResponse.json({ authorized: false })
  }
}
