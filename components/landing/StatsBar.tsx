'use client'

import React, { useState, useEffect, useRef } from 'react'

interface StatsBarProps {
  stats?: Record<string, number>
}

const STAT_KEYS = ['distritos', 'centros_total', 'estudiantes_total', 'estudiantes_publica', 'galas'] as const

const statsMeta: Record<string, { label: string; icon: string }> = {
  distritos: { label: 'Distritos Educativos', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z' },
  centros_total: { label: 'Centros Educativos', icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z' },
  estudiantes_total: { label: 'Matrícula Total', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  estudiantes_publica: { label: 'Matrícula Pública', icon: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' },
  galas: { label: 'Galas de Arte', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
}

const STORAGE_KEY = 'regional15_stats_counted'

function StatCard({ val, label, icon, index }: { val: number; label: string; icon: string; index: number }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored === 'true') {
      setCount(val)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true
        setTimeout(() => {
          const duration = 2000
          const stepTime = 16
          const steps = duration / stepTime
          const stepVal = val / steps
          let current = 0
          const timer = setInterval(() => {
            current += stepVal
            if (current >= val) {
              setCount(val)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, stepTime)
          sessionStorage.setItem(STORAGE_KEY, 'true')
        }, index * 120)
      }
    }, { threshold: 0.1 })

    if (elementRef.current) observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [val, index])

  return (
    <div className="stat-item" ref={elementRef} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="stat-icon">
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d={icon} /></svg>
      </div>
      <div className="stat-num">{count.toLocaleString('es-DO')}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsBar({ stats }: StatsBarProps) {
  const resolved = stats ?? {
    distritos: 6,
    centros_total: 1443,
    estudiantes_total: 422147,
    estudiantes_publica: 271676,
    galas: 3,
  }

  const entries = STAT_KEYS
    .filter(k => resolved[k] !== undefined)
    .map(k => ({ key: k, val: resolved[k], ...statsMeta[k] }))

  return (
    <div className="stats-bar" role="region" aria-label="Estadísticas">
      <div className="container">
        <div className="stats-bar-inner">
          {entries.map((entry, i) => (
            <StatCard key={entry.key} val={entry.val} label={entry.label} icon={entry.icon} index={i} />
          ))}
        </div>
        <p className="stats-bar-note">Datos correspondientes al período institucional vigente</p>
      </div>
    </div>
  )
}
