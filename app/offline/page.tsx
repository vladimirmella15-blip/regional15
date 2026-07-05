export default function OfflinePage() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', fontFamily: 'Inter, sans-serif', textAlign: 'center',
      background: '#f8fafc', padding: 24, color: '#1e293b',
    }}>
      <img src="/assets/img/Regional155.jpg" alt="Regional 15" style={{ width: 80, height: 80, borderRadius: '50%', marginBottom: 24 }} />
      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>Sin conexión</h1>
      <p style={{ fontSize: 14, color: '#64748b', maxWidth: 400, lineHeight: 1.6, marginBottom: 24 }}>
        Parece que no tienes conexión a Internet. Vuelve a intentarlo cuando tengas acceso.
      </p>
      <a href="/" style={{
        background: '#003876', color: '#fff', padding: '12px 28px', borderRadius: 8,
        fontWeight: 600, fontSize: 14, textDecoration: 'none',
      }}>Volver al inicio</a>
    </div>
  )
}
