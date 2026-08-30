import { cookies } from 'next/headers'
import crypto from 'crypto'

const SESSION_DURATION_MS = 24 * 60 * 60 * 1000

export function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

export function generateSessionToken(): string {
  return crypto.randomBytes(48).toString('hex')
}

export async function validateSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_session')?.value
    if (!token) return false

    const expectedPassword = process.env.ADMIN_PASSWORD
    if (!expectedPassword) return false

    const expectedToken = hashPassword(expectedPassword)
    return token === expectedToken
  } catch {
    return false
  }
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production'
}
