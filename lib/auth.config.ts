import Credentials from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'
import crypto from 'crypto'
import { supabase } from './supabase'

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex')
}

async function getUserByEmail(email: string): Promise<any> {
  try {
    const { data } = await supabase.from('users').select('*').eq('email', email).eq('activo', 1).maybeSingle()
    return data
  } catch {
    return null
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Correo electrónico', type: 'email' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email as string
        const password = credentials?.password as string
        if (!email || !password) return null

        const user = await getUserByEmail(email)
        if (user) {
          const inputHash = hashPassword(password)
          if (inputHash === user.password_hash) {
            return { id: user.id, name: user.nombre, email: user.email, role: user.rol }
          }
        }

        const adminHash = process.env.ADMIN_PASSWORD_HASH
        if (adminHash) {
          const inputHash = hashPassword(password)
          if (inputHash === adminHash) {
            return { id: 'admin', name: 'Administrador', email: 'admin@regional15.edu.do', role: 'admin' }
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/admin',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role
      }
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
}
