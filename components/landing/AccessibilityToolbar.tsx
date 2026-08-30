// components/landing/AccessibilityToolbar.tsx
'use client'

import React, { useState, useEffect } from 'react'

export default function AccessibilityToolbar() {
  const [contrast, setContrast] = useState(false)
  const [textSize, setTextSize] = useState(false)

  useEffect(() => {
    const c = localStorage.getItem('acc-contrast') === 'true'
    const t = localStorage.getItem('acc-textsize') === 'true'
    if (c) {
      document.body.classList.add('acc-high-contrast')
      setContrast(true)
    }
    if (t) {
      document.body.classList.add('acc-large-text')
      setTextSize(true)
    }
  }, [])

  const handleAccContrast = () => {
    const next = !contrast
    setContrast(next)
    document.body.classList.toggle('acc-high-contrast', next)
    localStorage.setItem('acc-contrast', String(next))
  }

  const handleAccTextsize = () => {
    const next = !textSize
    setTextSize(next)
    document.body.classList.toggle('acc-large-text', next)
    localStorage.setItem('acc-textsize', String(next))
  }

  return (
    <div className="acc-toolbar" id="acc-toolbar" role="toolbar" aria-label="Barra de accesibilidad">
      <button
        className={`acc-btn${contrast ? ' active' : ''}`}
        id="acc-contrast"
        onClick={handleAccContrast}
        aria-label="Alternar alto contraste"
        title="Alto contraste"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6V6z" />
        </svg>
      </button>
      <button
        className={`acc-btn${textSize ? ' active' : ''}`}
        id="acc-textsize"
        onClick={handleAccTextsize}
        aria-label="Alternar tamaño de texto grande"
        title="Texto grande"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3v-2H3v2z" />
        </svg>
      </button>
    </div>
  )
}
