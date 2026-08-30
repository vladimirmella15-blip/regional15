import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: '#f8fafc', color: '#1e293b', textAlign: 'center', padding: '2rem'
    }}>
      <div style={{ fontSize: '6rem', fontWeight: 800, color: '#e2e8f0', lineHeight: 1 }}>404</div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '1rem 0 .5rem' }}>Página no encontrada</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: 400 }}>
        La página que buscas no existe o ha sido movida.
      </p>
      <Link href="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: '#1d4ed8', color: '#fff', padding: '0.75rem 2rem',
        borderRadius: '8px', textDecoration: 'none', fontWeight: 600
      }}>
        Volver al inicio
      </Link>
    </div>
  )
}
