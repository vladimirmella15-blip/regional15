'use client'

import { useEffect, useState } from 'react'

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return { firstDay, daysInMonth }
}

export default function CalendarioPage() {
  const [data, setData] = useState<any>(null)
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())

  useEffect(() => { document.title = 'Calendario – Regional 15' }, [])

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(() => {})
  }, [])

  const calendario = data?.calendario || []
  const eventos = data?.eventos || []

  const { firstDay, daysInMonth } = getMonthDays(viewYear, viewMonth)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(viewYear - 1); setViewMonth(11) }
    else setViewMonth(viewMonth - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(viewYear + 1); setViewMonth(0) }
    else setViewMonth(viewMonth + 1)
  }

  const getEventsForDay = (day: number) => {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return [
      ...calendario.filter((c: any) => c.fecha?.startsWith(dateStr)),
      ...eventos.filter((e: any) => e.fecha?.startsWith(dateStr)),
    ]
  }

  return (
    <main style={{ marginTop: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, #002a5c 100%)', padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, var(--gold), transparent)' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, var(--red), transparent)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="section-eyebrow" style={{ color: 'var(--gold)', marginBottom: '12px', display: 'block' }}>CALENDARIO ESCOLAR</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', margin: '0 0 14px', fontWeight: 800, fontFamily: "'Outfit', sans-serif", lineHeight: 1.1 }}>Calendario de Actividades</h1>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.82)', maxWidth: '620px', lineHeight: 1.7, margin: 0 }}>
            Consulta las fechas importantes, actividades, eventos y feriados del calendario escolar de la Regional 15.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--card-bg)' }}>
        <div className="container-lg">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '12px' }}>
            <button onClick={prevMonth} className="hero-btn-secondary" style={{ padding: '8px 18px', fontSize: '0.85rem', color: 'var(--blue-dark)', borderColor: 'rgba(0,56,118,0.3)' }}>← {viewMonth === 0 ? months[11] : months[viewMonth - 1]}</button>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--blue-dark)', margin: 0 }}>{months[viewMonth]} {viewYear}</h2>
            <button onClick={nextMonth} className="hero-btn-secondary" style={{ padding: '8px 18px', fontSize: '0.85rem', color: 'var(--blue-dark)', borderColor: 'rgba(0,56,118,0.3)' }}>{viewMonth === 11 ? months[0] : months[viewMonth + 1]} →</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0', background: 'var(--gray-light)', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(0,56,118,0.06)' }}>
            {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(d => (
              <div key={d} style={{ padding: '12px 8px', textAlign: 'center', fontWeight: 700, fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', background: 'rgba(0,56,118,0.04)' }}>{d}</div>
            ))}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} style={{ padding: '12px', minHeight: '90px', background: 'var(--card-bg)' }} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dayEvents = getEventsForDay(day)
              const isToday = day === today.getDate() && viewMonth === today.getMonth() && viewYear === today.getFullYear()
              return (
                <div key={day} style={{ padding: '8px', minHeight: '90px', background: isToday ? 'var(--blue-lighter)' : 'var(--card-bg)', borderTop: '1px solid rgba(0,56,118,0.04)', borderLeft: '1px solid rgba(0,56,118,0.04)', position: 'relative' }}>
                  <span style={{ display: 'inline-block', width: '28px', height: '28px', lineHeight: '28px', textAlign: 'center', borderRadius: '50%', fontSize: '0.82rem', fontWeight: isToday ? 700 : 500, color: isToday ? 'white' : 'var(--text-main)', background: isToday ? 'var(--blue-dark)' : 'transparent' }}>{day}</span>
                  <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {dayEvents.slice(0, 2).map((ev: any, ei: number) => (
                      <span key={ei} style={{ fontSize: '0.62rem', padding: '1px 5px', borderRadius: '3px', background: ev.titulo ? 'var(--red-light)' : 'var(--gold-light)', color: ev.titulo ? 'var(--red)' : 'var(--gold-dark, #b87800)', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {ev.titulo || ev.nombre || ev.motivo}
                      </span>
                    ))}
                    {dayEvents.length > 2 && (
                      <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>+{dayEvents.length - 2} más</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {eventos.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-alt2)' }}>
          <div className="container">
            <div className="section-header text-center">
              <span className="section-eyebrow">PRÓXIMOS EVENTOS</span>
              <h2>Eventos Destacados</h2>
              <div className="section-divider" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {eventos.slice(0, 4).map((ev: any, i: number) => (
                <div key={i} style={{ background: 'var(--card-bg)', borderRadius: '14px', padding: '24px', border: '1px solid rgba(0,56,118,0.08)', boxShadow: 'var(--shadow-xs)' }}>
                  <span style={{ display: 'inline-block', background: 'var(--red-light)', color: 'var(--red)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', padding: '2px 8px', borderRadius: '20px', marginBottom: '10px', letterSpacing: '0.06em' }}>{ev.fecha || 'Próximamente'}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: '6px', fontFamily: "'Outfit', sans-serif" }}>{ev.titulo}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{ev.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
