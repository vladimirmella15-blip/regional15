'use client'

import React, { useState, useMemo, useEffect } from 'react'

interface CalEvent {
  id: string
  titulo: string
  descripcion: string
  fecha_inicio: string
  fecha_fin: string
  hora: string
  ubicacion: string
  color: string
  todo_el_dia: number
  repeticion?: string
  repeticion_dias?: string
}

interface Evento {
  id: string
  titulo: string
  descripcion: string
  tipo: string
  fecha: string
  ubicacion: string
}

interface CalendarSectionProps {
  calendario?: CalEvent[]
  eventos?: Evento[]
}

const DIAS = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO']
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startWeekday = firstDay.getDay()
  const startOffset = startWeekday === 0 ? 6 : startWeekday - 1
  const totalCells = Math.ceil((startOffset + daysInMonth) / 7) * 7
  return { daysInMonth, startOffset, totalCells }
}

function parseDate(s: string) {
  const d = new Date(s + 'T00:00:00')
  return { y: d.getFullYear(), m: d.getMonth(), d: d.getDate() }
}

function dateToKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

const COLORS = ['#003876', '#C0392B', '#B8860B', '#1E6BA0', '#16A34A', '#7C3AED', '#E67E22', '#0891B2']

export default function CalendarSection({ calendario, eventos }: CalendarSectionProps) {
  const today = new Date()
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState<{ y: number; m: number; d: number } | null>(null)
  const [modalEvent, setModalEvent] = useState<CalEvent | null>(null)
  const [animating, setAnimating] = useState<'left' | 'right' | null>(null)
  const [mounted, setMounted] = useState(false)
  const [events, setEvents] = useState<CalEvent[] | undefined>(calendario)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!calendario || calendario.length === 0) {
      fetch('/api/content').then(r => r.json()).then(d => {
        if (d?.calendario) setEvents(d.calendario)
      }).catch(() => {})
    }
  }, [calendario])

  const eventData = events || calendario || []

  const eventsByDay = useMemo(() => {
    const map = new Map<string, CalEvent[]>()
    for (const ev of eventData) {
      const start = parseDate(ev.fecha_inicio)
      const isRecurring = ev.repeticion && ev.repeticion !== '' && ev.repeticion_dias

      if (!isRecurring) {
        // Non-recurring: normal date range
        const end = ev.fecha_fin ? parseDate(ev.fecha_fin) : start
        const s = new Date(start.y, start.m, start.d)
        const e = new Date(end.y, end.m, end.d)
        for (let d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
          const key = dateToKey(d.getFullYear(), d.getMonth(), d.getDate())
          if (!map.has(key)) map.set(key, [])
          map.get(key)!.push(ev)
        }
      } else {
        // Recurring: expand from fecha_inicio to fecha_fin (or 6 months)
        const repDias = (ev.repeticion_dias || '').split(',').filter(Boolean)
        const end = ev.fecha_fin ? parseDate(ev.fecha_fin) : null
        const lookEnd = end ? new Date(end.y, end.m, end.d) : new Date(start.y, start.m + 6, 0)
        for (let y = start.y; y <= lookEnd.getFullYear(); y++) {
          const mStart = y === start.y ? start.m : 0
          const mEnd = y === lookEnd.getFullYear() ? lookEnd.getMonth() : 11
          for (let m = mStart; m <= mEnd; m++) {
            const daysInMonth = new Date(y, m + 1, 0).getDate()
            if (ev.repeticion === 'semanal') {
              for (let day = 1; day <= daysInMonth; day++) {
                const dow = String(new Date(y, m, day).getDay())
                if (repDias.includes(dow)) {
                  const key = dateToKey(y, m, day)
                  if (!map.has(key)) map.set(key, [])
                  if (!map.get(key)!.find(x => x.id === ev.id)) map.get(key)!.push(ev)
                }
              }
            } else if (ev.repeticion === 'mensual') {
              for (const d of repDias) {
                const day = parseInt(d, 10)
                if (day >= 1 && day <= daysInMonth) {
                  const key = dateToKey(y, m, day)
                  if (!map.has(key)) map.set(key, [])
                  if (!map.get(key)!.find(x => x.id === ev.id)) map.get(key)!.push(ev)
                }
              }
            }
          }
        }
      }
    }
    return map
  }, [eventData])

  const { daysInMonth, startOffset, totalCells } = getMonthDays(currentYear, currentMonth)

  const changeMonth = (delta: number) => {
    setAnimating(delta > 0 ? 'right' : 'left')
    if (delta > 0) {
      if (currentMonth === 11) { setCurrentYear(y => y + 1); setCurrentMonth(0) }
      else setCurrentMonth(m => m + 1)
    } else {
      if (currentMonth === 0) { setCurrentYear(y => y - 1); setCurrentMonth(11) }
      else setCurrentMonth(m => m - 1)
    }
    setSelectedDay(null)
    setTimeout(() => setAnimating(null), 300)
  }

  const goToday = () => {
    const n = new Date()
    setCurrentYear(n.getFullYear())
    setCurrentMonth(n.getMonth())
    setSelectedDay(null)
  }

  const cellDay = (cellIdx: number) => {
    const dayNum = cellIdx - startOffset + 1
    if (dayNum < 1 || dayNum > daysInMonth) return null
    return dayNum
  }

  const selectedEvents = selectedDay
    ? eventsByDay.get(dateToKey(selectedDay.y, selectedDay.m, selectedDay.d)) || []
    : []

  const totalEventCount = eventData.length
  const activeMonths = useMemo(() => {
    const s = new Set<string>()
    for (const ev of eventData) {
      s.add(`${parseDate(ev.fecha_inicio).y}-${parseDate(ev.fecha_inicio).m}`)
      if (ev.fecha_fin) s.add(`${parseDate(ev.fecha_fin).y}-${parseDate(ev.fecha_fin).m}`)
    }
    return s
  }, [eventData])

  return (
    <section id="calendario" className="section calendar-section" aria-label="Calendario de actividades">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Calendario
          </span>
          <h2>Calendario de Actividades</h2>
          <p>Consulta las actividades, eventos y fechas importantes de la Regional 15 del MINERD.</p>
          <div className="section-divider"></div>
        </div>

        <div className="calendar-wrap">
          <div className="calendar-header">
            <div className="cal-header-deco">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" opacity="0.15" style={{ position: 'absolute', top: -8, right: -4, transform: 'rotate(15deg)' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <button className="cal-nav-btn" onClick={() => changeMonth(-1)} aria-label="Mes anterior">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <h3 className="calendar-title">{MESES[currentMonth]} {currentYear}</h3>
            <button className="cal-nav-btn" onClick={() => changeMonth(1)} aria-label="Mes siguiente">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </button>
            <button className="cal-today-btn" onClick={goToday}>Hoy</button>
          </div>

          <div className={`calendar-grid ${animating ? 'cal-anim-' + animating : ''}`}>
            {DIAS.map(d => (
              <div key={d} className="cal-weekday">{d.charAt(0)}</div>
            ))}
            {Array.from({ length: totalCells }).map((_, i) => {
              const day = cellDay(i)
              if (!day) return <div key={i} className="cal-day cal-day-empty" />
              const key = dateToKey(currentYear, currentMonth, day)
              const dayEvents = eventsByDay.get(key) || []
              const isToday = today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === day
              const isSelected = selectedDay?.y === currentYear && selectedDay?.m === currentMonth && selectedDay?.d === day
              return (
                <div
                  key={i}
                  className={`cal-day ${isToday ? 'cal-today' : ''} ${isSelected ? 'cal-selected' : ''} ${dayEvents.length > 0 ? 'cal-has-events' : ''}`}
                  onClick={() => {
                    if (dayEvents.length > 0) {
                      setSelectedDay(isSelected ? null : { y: currentYear, m: currentMonth, d: day })
                    }
                  }}
                >
                  <span className="cal-day-num">{day}</span>
                  {dayEvents.length > 0 && (
                    <div className="cal-day-events">
                      {dayEvents.slice(0, 3).map((ev, ei) => (
                        <span key={ev.id} className="cal-dot" style={{ background: ev.color || COLORS[ei % COLORS.length] }} title={ev.titulo} />
                      ))}
                      {dayEvents.length > 3 && <span className="cal-more">+{dayEvents.length - 3}</span>}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {selectedEvents.length > 0 && selectedDay && (
            <div className="cal-events-list">
              <div className="cal-events-list-header">
                <h4 className="cal-events-date">
                  {selectedDay.d} de {MESES[selectedDay.m]} de {selectedDay.y}
                </h4>
                <span className="cal-events-count">{selectedEvents.length} evento{selectedEvents.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="cal-events-items">
                {selectedEvents.map((ev, ei) => {
                  const color = ev.color || COLORS[ei % COLORS.length]
                  const isLast = ei === selectedEvents.length - 1
                  return (
                    <div
                      key={ev.id}
                      className="cal-event-item"
                      style={{ borderLeftColor: color, animationDelay: `${ei * 0.06}s` }}
                      onClick={() => setModalEvent(ev)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && setModalEvent(ev)}
                    >
                      <div className="cal-event-dot" style={{ background: color }} />
                      <div className="cal-event-item-body">
                        <strong className="cal-event-item-title">{ev.titulo}</strong>
                        {ev.descripcion && <p className="cal-event-item-desc">{ev.descripcion}</p>}
                        <div className="cal-event-item-meta">
                          {ev.hora && <span><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>{ev.hora}</span>}
                          {ev.ubicacion && <span><svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>{ev.ubicacion}</span>}
                        </div>
                      </div>
                      <svg className="cal-event-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {totalEventCount > 0 && (
          <div className="calendar-footer">
            <div className="calendar-footer-inner">
              <span className="calendar-footer-icon">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--blue-mid)"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </span>
              <span className="calendar-footer-count">{totalEventCount} evento{totalEventCount !== 1 ? 's' : ''} registrado{totalEventCount !== 1 ? 's' : ''}</span>
            </div>
          </div>
        )}

        {eventos && eventos.length > 0 && (
          <div style={{ marginTop: '48px' }}>
            <div className="section-header" style={{ marginBottom: '32px' }}>
              <span className="section-eyebrow">Programas Destacados</span>
              <h2>Iniciativas y Eventos</h2>
              <div className="section-divider"></div>
            </div>
            <div className="events-grid">
              {eventos.map((item) => (
                <div className="event-card animate-on-scroll" key={item.id}>
                  <div className="event-header">
                    <div className="event-date-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <div className="day" style={{ fontSize: '1.6rem' }}>{item.tipo?.charAt(0) || 'E'}</div>
                      <div className="month">{item.id?.slice(0, 4) || ''}</div>
                    </div>
                    <div className="event-date-sep"></div>
                    <div className="event-header-text">
                      <div className="event-type">{item.tipo}</div>
                      <h4>{item.titulo}</h4>
                    </div>
                  </div>
                  <div className="event-body">
                    <p>{item.descripcion}</p>
                    <div className="event-meta">
                      <span><svg viewBox="0 0 24 24" width="12" height="12"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>{item.ubicacion}</span>
                      <span><svg viewBox="0 0 24 24" width="12" height="12"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg>{item.fecha}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {modalEvent && (
        <div className="cal-modal-overlay" onClick={() => setModalEvent(null)} role="dialog" aria-modal="true" aria-label={modalEvent.titulo}>
          <div className="cal-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cal-modal-close" onClick={() => setModalEvent(null)} aria-label="Cerrar">&times;</button>
            <div className="cal-modal-header" style={{ background: `linear-gradient(135deg, ${modalEvent.color || '#003876'}, ${modalEvent.color || '#003876'}dd)` }}>
              <div className="cal-modal-header-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" opacity="0.15" style={{ position: 'absolute', bottom: -6, right: 0 }}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>{modalEvent.titulo}</h3>
            </div>
            <div className="cal-modal-body">
              {modalEvent.descripcion && <p className="cal-modal-desc">{modalEvent.descripcion}</p>}
              <div className="cal-modal-meta">
                {modalEvent.hora && (
                  <div className="cal-modal-meta-item">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
                    <div>
                      <strong>Horario</strong>
                      <span>{modalEvent.hora}</span>
                    </div>
                  </div>
                )}
                {modalEvent.ubicacion && (
                  <div className="cal-modal-meta-item">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>
                    <div>
                      <strong>Ubicación</strong>
                      <span>{modalEvent.ubicacion}</span>
                    </div>
                  </div>
                )}
                <div className="cal-modal-meta-item">
                  <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <div>
                    <strong>Fecha</strong>
                    <span>
                      {new Date(modalEvent.fecha_inicio + 'T00:00:00').getDate()} de {MESES[new Date(modalEvent.fecha_inicio + 'T00:00:00').getMonth()]} de {new Date(modalEvent.fecha_inicio + 'T00:00:00').getFullYear()}
                      {modalEvent.fecha_fin && ` - ${new Date(modalEvent.fecha_fin + 'T00:00:00').getDate()} de ${MESES[new Date(modalEvent.fecha_fin + 'T00:00:00').getMonth()]} de ${new Date(modalEvent.fecha_fin + 'T00:00:00').getFullYear()}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
