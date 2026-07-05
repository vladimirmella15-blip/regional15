'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { ReactNode } from 'react'

interface Props {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
  delay?: number
}

export default function SplitText({ children, as: Tag = 'h2', className = '', delay = 30 }: Props) {
  const ref = useScrollReveal<HTMLElement>()

  const words = children.split(' ')

  return (
    <Tag ref={ref as any} className={`split-text ${className}`} aria-label={children}>
      {words.map((word, i) => (
        <span
          key={i}
          className="split-word"
          style={{ animationDelay: `${i * delay}ms` }}
        >
          {word}{i < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  )
}
