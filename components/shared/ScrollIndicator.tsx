'use client'

export default function ScrollIndicator() {
  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span className="scroll-indicator-text">SCROLL</span>
      <div className="scroll-indicator-line" />
      <svg className="scroll-indicator-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  )
}
