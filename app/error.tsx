'use client'

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: '#f8fafc', color: '#1e293b', textAlign: 'center', padding: '2rem'
    }}>
      <div style={{ fontSize: '4rem', fontWeight: 800, color: '#fecaca', lineHeight: 1 }}>Error</div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '1rem 0 .5rem' }}>Algo salió mal</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: 500 }}>
        Ha ocurrido un error inesperado. Por favor, intenta de nuevo.
      </p>
      <button onClick={reset} style={{
        background: '#1d4ed8', color: '#fff', border: 'none', padding: '0.75rem 2rem',
        borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '1rem'
      }}>
        Intentar de nuevo
      </button>
    </div>
  )
}
