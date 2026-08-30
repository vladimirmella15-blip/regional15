'use client'

import { useRef, useCallback, useEffect } from 'react'

export function useTilt<T extends HTMLElement>(maxTilt = 8) {
  const ref = useRef<T>(null)
  const cleanupRef = useRef<() => void>(() => {})

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -maxTilt
    const rotateY = ((x - centerX) / centerX) * maxTilt
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }, [maxTilt])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    el.style.transition = 'transform 0.15s cubic-bezier(0.34,1.56,0.64,1)'
    el.style.willChange = 'transform'

    cleanupRef.current = () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
    return () => cleanupRef.current()
  }, [handleMouseMove, handleMouseLeave])

  return ref
}
