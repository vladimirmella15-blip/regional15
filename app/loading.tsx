export default function Loading() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: '#f8fafc', color: '#1e293b', gap: '1rem'
    }}>
      <div style={{
        width: 40, height: 40, border: '3px solid #e2e8f0',
        borderTopColor: '#1d4ed8', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite'
      }} />
      <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Cargando...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
