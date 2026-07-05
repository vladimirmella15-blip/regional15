'use client'

import { useRef, useCallback, type ReactNode, type AnchorHTMLAttributes } from 'react'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  strength?: number
}

export default function MagneticButton({ children, strength = 0.3, style, ...props }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMouse = useCallback((x: number, y: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (x - cx) * strength
    const dy = (y - cy) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }, [strength])

  const handleLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = ''
  }, [])

  return (
    <a
      ref={ref}
      onMouseMove={(e) => handleMouse(e.clientX, e.clientY)}
      onMouseLeave={handleLeave}
      style={{ ...style, transition: 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)' }}
      {...props}
    >
      {children}
    </a>
  )
}
