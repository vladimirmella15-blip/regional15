'use client'

import { useEffect, useRef, useState } from 'react'

type ToggleKey =
  | 'contrast'
  | 'invert'
  | 'grayscale'
  | 'lightbg'
  | 'readable'
  | 'links'
  | 'stop'
  | 'mask'
  | 'bigcursor'
  | 'hideimg'
  | 'dyslexia'
  | 'uheaders'

const CLASS_MAP: Record<ToggleKey, string> = {
  contrast: 'acc-high-contrast',
  invert: 'acc-invert',
  grayscale: 'acc-grayscale',
  lightbg: 'acc-light-bg',
  readable: 'acc-readable',
  links: 'acc-highlight-links',
  stop: 'acc-stop-animations',
  mask: 'acc-mask',
  bigcursor: 'acc-big-cursor',
  hideimg: 'acc-hide-images',
  dyslexia: 'acc-dyslexia',
  uheaders: 'acc-underline-headers',
}

const STORAGE_PREFIX = 'acc-'
const FONT_STEP_KEY = 'acc-fontstep'
const FONT_SIZES = ['', '17px', '18.75px', '20px']

interface ToggleDef {
  key: ToggleKey
  label: string
  icon: React.ReactNode
}

const TOGGLES: ToggleDef[] = [
  {
    key: 'contrast',
    label: 'Alto contraste',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6V6z" />
      </svg>
    ),
  },
  {
    key: 'grayscale',
    label: 'Escala de grises',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
      </svg>
    ),
  },
  {
    key: 'invert',
    label: 'Contraste invertido',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18v-16c4.42 0 8 3.58 8 8s-3.58 8-8 8z" />
      </svg>
    ),
  },
  {
    key: 'lightbg',
    label: 'Fondo claro',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    key: 'readable',
    label: 'Texto legible (espaciado)',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm5-2h10v2H11V5zm0 6h7v2h-7v-2zm0 6h10v2H11v-2z" />
      </svg>
    ),
  },
  {
    key: 'links',
    label: 'Resaltar enlaces',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    key: 'stop',
    label: 'Detener animaciones',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="6" y="6" width="4" height="12" rx="1" />
        <rect x="14" y="6" width="4" height="12" rx="1" />
      </svg>
    ),
  },
  {
    key: 'mask',
    label: 'Máscara de lectura',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="1.5" y="9" width="21" height="6" rx="3" opacity="0.45" />
      </svg>
    ),
  },
  {
    key: 'bigcursor',
    label: 'Cursor grande',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="6.5" />
        <path d="M12 2v3.5M12 18.5V22M2 12h3.5M18.5 12H22" />
      </svg>
    ),
  },
  {
    key: 'hideimg',
    label: 'Ocultar imágenes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
        <path d="M3.5 3.5l17 17" />
      </svg>
    ),
  },
  {
    key: 'dyslexia',
    label: 'Fuente disléxica',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3v-2H3v2z" />
      </svg>
    ),
  },
  {
    key: 'uheaders',
    label: 'Subrayar encabezados',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M4 6h16M4 12h16M4 18h10" />
      </svg>
    ),
  },
]

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [activeKeys, setActiveKeys] = useState<Set<ToggleKey>>(new Set())
  const [textStep, setTextStep] = useState(0)
  const [speaking, setSpeaking] = useState(false)
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const active = new Set<ToggleKey>()
    ;(Object.keys(CLASS_MAP) as ToggleKey[]).forEach(key => {
      if (localStorage.getItem(STORAGE_PREFIX + key) === 'true') active.add(key)
    })
    const fs = parseInt(localStorage.getItem(FONT_STEP_KEY) || '0', 10)
    setActiveKeys(active)
    setTextStep(Number.isFinite(fs) ? Math.min(3, Math.max(0, fs)) : 0)
  }, [])

  useEffect(() => {
    ;(Object.keys(CLASS_MAP) as ToggleKey[]).forEach(key => {
      const on = activeKeys.has(key)
      document.body.classList.toggle(CLASS_MAP[key], on)
      localStorage.setItem(STORAGE_PREFIX + key, String(on))
    })
    document.documentElement.style.scrollBehavior = activeKeys.has('stop') ? 'auto' : ''
  }, [activeKeys])

  useEffect(() => {
    if (activeKeys.has('dyslexia') && !document.getElementById('acc-dyslexia-font')) {
      const link = document.createElement('link')
      link.id = 'acc-dyslexia-font'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=OpenDyslexic:wght@400;700&display=swap'
      document.head.appendChild(link)
    } else if (!activeKeys.has('dyslexia')) {
      document.getElementById('acc-dyslexia-font')?.remove()
    }
  }, [activeKeys])

  const [maskY, setMaskY] = useState(-1000)

  useEffect(() => {
    if (!activeKeys.has('mask')) {
      setMaskY(-1000)
      return
    }
    const onMove = (e: PointerEvent) => setMaskY(e.clientY)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [activeKeys])

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZES[textStep] || ''
    localStorage.setItem(FONT_STEP_KEY, String(textStep))
  }, [textStep])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => panelRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.altKey && e.code === 'KeyA') {
        e.preventDefault()
        setOpen(o => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleToggle = (key: ToggleKey) => {
    setActiveKeys(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const changeTextStep = (delta: number) => {
    setTextStep(prev => Math.min(3, Math.max(0, prev + delta)))
  }

  const resetAll = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setSpeaking(false)
    setActiveKeys(new Set())
    setTextStep(0)
  }

  const handleReadPage = () => {
    if (!('speechSynthesis' in window)) return
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }
    const text = Array.from(
      document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote, td, th')
    )
      .map(el => (el.textContent || '').trim())
      .filter(Boolean)
      .join('. ')
    if (!text) return
    const utter = new SpeechSynthesisUtterance(text)
    utter.lang = 'es-DO'
    utter.rate = 1
    utter.onend = () => setSpeaking(false)
    utter.onerror = () => setSpeaking(false)
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utter)
    setSpeaking(true)
  }

  return (
    <>
      {open && <div className="accw-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}

      {activeKeys.has('mask') && (
        <div
          className="accw-mask"
          aria-hidden="true"
          style={{ transform: `translateY(${maskY - 44}px)` }}
        />
      )}

      <button
        className="accw-float"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Cerrar opciones de accesibilidad' : 'Abrir opciones de accesibilidad'}
        aria-expanded={open}
      >
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="5.2" r="1.9" />
          <path d="M12 9.4v5.4" />
          <path d="M12.2 10.6 5.8 7.4" />
          <path d="M11.8 10.6l6.4-3.2" />
          <path d="M12 14.8l-4.3 5" />
          <path d="M12 14.8l4.3 5" />
        </svg>
      </button>

      {open && (
        <aside
          ref={panelRef}
          className="accw-panel"
          tabIndex={-1}
          role="dialog"
          aria-label="Opciones de accesibilidad"
          aria-modal="false"
        >
          <div className="accw-header">
            <div>
              <strong>Accesibilidad</strong>
              <small>Opciones inclusivas para todos</small>
            </div>
            <button className="accw-close" onClick={() => setOpen(false)} aria-label="Cerrar panel de accesibilidad">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="accw-body">
            {TOGGLES.map(t => (
              <button
                key={t.key}
                className="accw-row"
                role="switch"
                aria-checked={activeKeys.has(t.key)}
                onClick={() => handleToggle(t.key)}
              >
                <span className="accw-row-icon" aria-hidden="true">{t.icon}</span>
                <span className="accw-row-label">{t.label}</span>
                <span className={`accw-switch${activeKeys.has(t.key) ? ' on' : ''}`} aria-hidden="true">
                  <span className="accw-knob" />
                </span>
              </button>
            ))}

            <div className="accw-row">
              <span className="accw-row-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3v-2H3v2z" />
                </svg>
              </span>
              <span className="accw-row-label">Tamaño del texto</span>
              <span className="accw-fs-ctrl">
                <button onClick={() => changeTextStep(-1)} aria-label="Reducir tamaño del texto" disabled={textStep === 0}>
                  A−
                </button>
                <button onClick={() => changeTextStep(1)} aria-label="Aumentar tamaño del texto" disabled={textStep === 3}>
                  A+
                </button>
              </span>
            </div>

            <button className="accw-row" onClick={handleReadPage} aria-pressed={speaking}>
              <span className="accw-row-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3z" />
                  <path d="M16.5 12a4.5 4.5 0 0 0-2.5-4.02v8.04A4.5 4.5 0 0 0 16.5 12z" />
                  <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              </span>
              <span className="accw-row-label">{speaking ? 'Detener lectura' : 'Leer página en voz alta'}</span>
            </button>
          </div>

          <div className="accw-footer">
            <a className="accw-statement" href="/accesibilidad">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              Enunciado de accesibilidad
            </a>
            <button className="accw-reset" onClick={resetAll}>
              Restablecer todo
            </button>
          </div>
        </aside>
      )}

      <style>{`
        .accw-backdrop { position: fixed; inset: 0; z-index: 949; background: transparent; }
        .accw-mask {
          position: fixed; top: 0; left: 0; right: 0; z-index: 2147483000;
          height: 88px; pointer-events: none;
          background: rgba(255, 235, 59, 0.16);
          border-top: 2px solid rgba(0,0,0,0.45);
          border-bottom: 2px solid rgba(0,0,0,0.45);
        }
        .accw-float {
          position: fixed; left: 28px; bottom: 98px; z-index: 950;
          width: 56px; height: 56px; border: none; border-radius: 50%;
          cursor: pointer; background: #003876; color: #fff;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 16px rgba(0,56,118,0.35);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .accw-float:hover { transform: scale(1.08); box-shadow: 0 6px 22px rgba(0,56,118,0.45); }
        .accw-float:focus-visible { outline: 3px solid #f0a500; outline-offset: 2px; }
        .accw-float svg { width: 28px; height: 28px; }
        .accw-panel {
          position: fixed; left: 20px; bottom: 168px; z-index: 951;
          width: min(340px, calc(100vw - 24px)); max-height: min(72vh, 540px);
          background: #fff; color: #0f172a; border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,56,118,0.2);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          overflow: hidden; display: flex; flex-direction: column;
          animation: accwIn .22s ease; outline: none;
        }
        .accw-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 16px; gap: 10px;
          background: linear-gradient(90deg, #003876, #005baa); color: #fff;
          flex-shrink: 0;
        }
        .accw-header strong { display: block; font-size: 15px; line-height: 1.3; }
        .accw-header small { font-size: 11.5px; opacity: .85; }
        .accw-close {
          width: 32px; height: 32px; border-radius: 50%; border: none;
          background: rgba(255,255,255,0.2); color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .accw-close:hover { background: rgba(255,255,255,0.32); }
        .accw-body { overflow-y: auto; padding: 10px 12px 8px; }
        .accw-row {
          display: flex; align-items: center; gap: 12px; width: 100%;
          padding: 10px 8px; border: none; background: none; cursor: pointer;
          border-radius: 10px; font-family: inherit; font-size: 13.5px; text-align: left;
          color: #0f172a; transition: background .15s ease;
        }
        .accw-row:hover { background: #eef4ff; }
        .accw-row:focus-visible { outline: 2px solid #005baa; outline-offset: -2px; }
        .accw-row-icon { width: 28px; height: 28px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: #003876; }
        .accw-row-icon svg { width: 20px; height: 20px; }
        .accw-row-label { flex: 1; line-height: 1.35; }
        .accw-switch {
          width: 36px; height: 20px; border-radius: 10px; background: #cbd5e1;
          position: relative; flex-shrink: 0; transition: background .2s ease;
        }
        .accw-switch.on { background: #005baa; }
        .accw-knob {
          position: absolute; top: 2px; left: 2px; width: 16px; height: 16px;
          border-radius: 50%; background: #fff; transition: left .2s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }
        .accw-switch.on .accw-knob { left: 18px; }
        .accw-fs-ctrl { display: flex; gap: 6px; flex-shrink: 0; }
        .accw-fs-ctrl button {
          padding: 4px 10px; border-radius: 8px; border: 1.5px solid #cbd5e1;
          background: #fff; color: #003876; font-family: inherit; font-weight: 700;
          font-size: 12.5px; cursor: pointer; transition: background .15s ease;
        }
        .accw-fs-ctrl button:hover:not(:disabled) { background: #003876; color: #fff; border-color: #003876; }
        .accw-fs-ctrl button:disabled { opacity: .4; cursor: default; }
        .accw-footer { border-top: 1px solid #e8ecf1; padding: 10px 14px; flex-shrink: 0; display: flex; flex-direction: column; gap: 8px; }
        .accw-statement {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: inherit; font-size: 12.5px; font-weight: 600; color: #005baa;
          text-decoration: underline; padding: 4px;
        }
        .accw-statement:hover { color: #003876; }
        .accw-reset {
          width: 100%; padding: 9px; border-radius: 10px; border: 1.5px solid #ed232a;
          background: #fff; color: #c01920; font-family: inherit; font-weight: 600;
          font-size: 13px; cursor: pointer; transition: background .15s ease;
        }
        .accw-reset:hover { background: #fbe8e9; }
        @keyframes accwIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @media (max-width: 768px) {
          .accw-float { left: 20px; bottom: 74px; width: 48px; height: 48px; }
          .accw-float svg { width: 24px; height: 24px; }
          .accw-panel { left: 12px; bottom: 134px; width: min(340px, calc(100vw - 24px)); }
        }
      `}</style>
    </>
  )
}