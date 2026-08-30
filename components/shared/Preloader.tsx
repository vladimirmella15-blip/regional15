'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="preloader" role="status" aria-label="Cargando">
      <div className="preloader-inner">
        <Image
          src="/assets/img/Regional155.jpg"
          alt="Regional 15"
          width={56}
          height={56}
          className="preloader-logo"
          priority
        />
        <div className="preloader-bar">
          <div className="preloader-bar-fill" />
        </div>
        <p className="preloader-text">Regional 15 · MINERD</p>
      </div>
    </div>
  )
}
