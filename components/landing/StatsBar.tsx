// components/landing/StatsBar.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'

interface StatsBarProps {
  stats?: Record<string, number>
}

const statsLabels: Record<string, string> = {
  distritos: 'Distritos Educativos',
  centros: 'Centros Educativos',
  publicaciones: 'Publicaciones Instagram',
  seguidores: 'Seguidores @regional_15minerd',
  galas: 'Galas Regionales de Arte',
  anio_escolar: 'Año Escolar en Curso',
  estudiantes_total: 'Matrícula Total',
  estudiantes_publica: 'Matrícula Pública'
}

interface StatCardProps {
  val: number
  label: string
}

function StatCard({ val, label }: StatCardProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true
        let start = 0
        const end = val
        const duration = 2000
        const stepTime = 16
        const steps = duration / stepTime
        const stepVal = (end - start) / steps

        const timer = setInterval(() => {
          start += stepVal
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, stepTime)
      }
    }, { threshold: 0.1 })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [val])

  return (
    <div className="stat-item animate-on-scroll" ref={elementRef}>
      <div className="stat-num">{count.toLocaleString('es-DO')}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default function StatsBar({ stats }: StatsBarProps) {
  if (!stats) return null

  return (
    <div className="stats-bar" role="region" aria-label="Estadísticas">
      <div className="container">
        <div className="stats-bar-inner" style={{ display: 'flex', justifyContent: 'space-around', gap: '16px', flexWrap: 'wrap', width: '100%' }}>
          {Object.entries(stats).map(([key, val]) => (
            <StatCard
              key={key}
              val={val}
              label={statsLabels[key] || key}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
