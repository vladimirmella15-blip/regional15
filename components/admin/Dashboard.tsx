'use client'

import { useState, useEffect } from 'react'

interface DashboardStats {
  totalNoticias: number
  totalServicios: number
  totalEnlaces: number
  totalEventos: number
  totalProgramas: number
  totalTestimonios: number
  totalGaleria: number
  totalDocumentos: number
  totalPOA: number
  poaCompletados: number
  poaEnProgreso: number
  poaRetrasados: number
  ultimaActualizacion: string
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dashboard')
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d) setStats(d) })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Cargando estadísticas...</div>

  const cards = [
    { label: 'Noticias', value: stats?.totalNoticias ?? 0, color: '#1d4ed8' },
    { label: 'Servicios', value: stats?.totalServicios ?? 0, color: '#16a34a' },
    { label: 'Enlaces', value: stats?.totalEnlaces ?? 0, color: '#d97706' },
    { label: 'Eventos', value: stats?.totalEventos ?? 0, color: '#dc2626' },
    { label: 'Programas', value: stats?.totalProgramas ?? 0, color: '#7c3aed' },
    { label: 'Testimonios', value: stats?.totalTestimonios ?? 0, color: '#db2777' },
    { label: 'Galería', value: stats?.totalGaleria ?? 0, color: '#0891b2' },
    { label: 'Documentos', value: stats?.totalDocumentos ?? 0, color: '#64748b' },
  ]

  const poaCards = [
    { label: 'Total POA', value: stats?.totalPOA ?? 0, color: '#1d4ed8' },
    { label: 'Completados', value: stats?.poaCompletados ?? 0, color: '#16a34a' },
    { label: 'En Progreso', value: stats?.poaEnProgreso ?? 0, color: '#d97706' },
    { label: 'Retrasados', value: stats?.poaRetrasados ?? 0, color: '#dc2626' },
  ]

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16, marginBottom: 32 }}>
        {cards.map(c => (
          <div key={c.label} style={{
            background: '#fff', borderRadius: 12, padding: 20, textAlign: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,.08)'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: c.color }}>{c.value}</div>
            <div style={{ fontSize: '.8rem', color: '#64748b', marginTop: 4 }}>{c.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 16, marginBottom: 32 }}>
        <div style={{
          background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: 12, padding: 20,
          color: '#fff', gridColumn: '1 / -1'
        }}>
          <h3 style={{ fontSize: '1rem', marginBottom: 12 }}>Plan Operativo Anual (POA)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
            {poaCards.map(c => (
              <div key={c.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: c.color }}>{c.value}</div>
                <div style={{ fontSize: '.75rem', opacity: 0.7 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span>Resumen del Sistema</span>
        </div>
        <div style={{ padding: '1.25rem', fontSize: '.85rem', color: '#64748b', lineHeight: 1.8 }}>
          <p>Base de datos: <strong>Supabase</strong> (PostgreSQL en la nube)</p>
          <p>Última actualización: <strong>{stats?.ultimaActualizacion || 'N/A'}</strong></p>
          <p>Total de registros: <strong>
            {(stats
              ? stats.totalNoticias + stats.totalEventos + stats.totalProgramas + stats.totalDocumentos + stats.totalPOA
              : 0)}
          </strong></p>
        </div>
      </div>
    </div>
  )
}
