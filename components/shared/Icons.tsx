'use client'

export function getEnlaceIcon(id: string, size = 24) {
  const strokeWidth = 2.2
  switch (id) {
    case 'enl-1':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M3 21h18M3 10h18M5 10V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M10 21V14a2 2 0 0 1 4 0v7M6 14h2M16 14h2"/>
        </svg>
      )
    case 'enl-2':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      )
    case 'enl-3':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
        </svg>
      )
    case 'enl-4':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      )
    case 'enl-5':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      )
    case 'enl-6':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/>
        </svg>
      )
    case 'enl-7':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      )
  }
}

export function getEventIcon(id: string, size = 26) {
  switch (id) {
    case 'evento-1':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" style={{ display: 'block', margin: 'auto' }}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          <path d="M6 17c1 0 2-1 2-3s1-2 2-2h4c1 0 2 0 2 2s1 3 2 3"/>
        </svg>
      )
    case 'evento-2':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" style={{ display: 'block', margin: 'auto' }}>
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
          <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/>
          <path d="M12 2a6 6 0 0 1 6 6v3.5c0 3.3-2.7 6-6 6s-6-2.7-6-6V8a6 6 0 0 1 6-6z"/>
        </svg>
      )
    case 'evento-3':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" style={{ display: 'block', margin: 'auto' }}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"/>
          <path d="M12 6v6m-3-3h6"/>
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" style={{ display: 'block', margin: 'auto' }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )
  }
}
