'use client'
import { useState, useMemo, useRef, useEffect, useCallback } from 'react'
import faqData, { FAQItem } from '@/data/faq'

const COLORS = {
  primary: '#0C2D6B',
  primaryLight: '#1A4A8A',
  accent: '#E74C3C',
  bg: '#ffffff',
  hover: '#f0f4ff',
  border: '#e0e5ec',
  text: '#1a1a2e',
  textMuted: '#666',
}

type Msg = { role: 'user' | 'bot'; text: string }

function TypingDots() {
  return (
    <span style={{ display: 'inline-flex', gap: 3, padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: COLORS.primaryLight,
          animation: `typingDot 1.4s ${i * 0.2}s infinite`,
        }} />
      ))}
    </span>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: '¡Hola! Soy el asistente virtual de la Regional 15. Escribe tu pregunta o elige una de las sugerencias.' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [selectedSuggestion, setSelectedSuggestion] = useState<FAQItem | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const allItems = useMemo(() => faqData.flatMap(c => c.items), [])

  const suggestions = useMemo(() => {
    if (!input.trim()) return []
    const q = input.toLowerCase()
    return allItems.filter(
      item =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.keywords.some(k => k.includes(q))
    ).slice(0, 6)
  }, [input, allItems])

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
    })
  }, [])

  useEffect(scrollToBottom, [msgs, typing])

  const botReply = useCallback((text: string) => {
    return new Promise<void>(resolve => {
      const delay = Math.min(600, 200 + text.length * 8)
      setTimeout(() => {
        setMsgs(prev => [...prev, { role: 'bot', text }])
        setTyping(false)
        resolve()
      }, delay)
    })
  }, [])

  // Simple scoring for fuzzy matching
  const scoreMatch = useCallback((q: string, item: FAQItem): number => {
    const lq = q.toLowerCase()
    let score = 0
    // Exact match on question
    if (item.question.toLowerCase() === lq) score += 100
    // Question contains query
    if (item.question.toLowerCase().includes(lq)) score += 50
    // Query contains key parts of question
    const words = lq.split(/\s+/).filter(w => w.length > 2)
    const qWords = item.question.toLowerCase().split(/\s+/)
    const matchedWords = words.filter(w => qWords.some(qw => qw.includes(w) || w.includes(qw)))
    score += matchedWords.length * 10
    // Keyword matches
    const kwMatches = item.keywords.filter(k => k.includes(lq) || lq.includes(k)).length
    score += kwMatches * 15
    // Partial keyword matches
    const partialKw = item.keywords.filter(k => words.some(w => k.includes(w) || w.includes(k))).length
    score += partialKw * 5
    return score
  }, [])

  const handleSend = useCallback(async (question: string) => {
    const trimmed = question.trim()
    if (!trimmed) return

    setMsgs(prev => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    setSelectedSuggestion(null)
    setTyping(true)

    // Try API first, fall back to local FAQ
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      })
      const data = await res.json()
      if (data.answer && !data.answer.includes('no está configurado')) {
        await botReply(data.answer)
        return
      }
    } catch {}

    // Local fallback with scoring
    const scored = allItems.map(item => ({ item, score: scoreMatch(trimmed, item) }))
      .filter(s => s.score > 0)
      .sort((a, b) => b.score - a.score)

    if (scored.length > 0) {
      await botReply(scored[0].item.answer)
      return
    }

    await botReply('No encontré una respuesta para esa pregunta. Prueba con otras palabras, visita la sección correspondiente en nuestro sitio, o contáctanos directamente a través del formulario de contacto.')
  }, [allItems, botReply, scoreMatch])

  const handleSuggestionClick = (item: FAQItem) => {
    setSelectedSuggestion(item)
    handleSend(item.question)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (suggestions.length > 0) {
        handleSuggestionClick(suggestions[0])
      } else {
        handleSend(input)
      }
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir asistente virtual"
        style={{
          position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
          width: 56, height: 56, borderRadius: '50%',
          background: COLORS.primary, color: '#fff',
          border: 'none', cursor: 'pointer', fontSize: 24,
          boxShadow: '0 4px 16px rgba(12,45,107,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform .2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        💬
      </button>
    )
  }

  return (
    <>
      <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(0,0,0,0.25)' }} />

      <div style={{
        position: 'fixed', bottom: 0, right: 0, zIndex: 9999,
        width: '100%', maxWidth: 420, height: 'min(85vh, 640px)',
        background: COLORS.bg, borderRadius: '16px 16px 0 0',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.18)',
        display: 'flex', flexDirection: 'column',
        fontFamily: "'Segoe UI', Arial, sans-serif",
        overflow: 'hidden',
      }}>
        {/* header */}
        <div style={{
          background: COLORS.primary, color: '#fff',
          padding: '14px 20px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22 }}>🤖</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Asistente Regional 15</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>Responde preguntas frecuentes</div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar"
            style={{
              background: 'rgba(255,255,255,0.2)', border: 'none',
              color: '#fff', borderRadius: '50%', width: 32, height: 32,
              cursor: 'pointer', fontSize: 18, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >✕</button>
        </div>

        {/* messages */}
        <div ref={listRef} style={{
          flex: 1, overflow: 'auto', padding: '16px',
          display: 'flex', flexDirection: 'column', gap: 10,
        }}>
          {msgs.map((m, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
            }}>
              <div style={{
                maxWidth: '82%',
                padding: '10px 14px',
                borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                background: m.role === 'user' ? COLORS.primary : COLORS.hover,
                color: m.role === 'user' ? '#fff' : COLORS.text,
                fontSize: 13, lineHeight: 1.55, whiteSpace: 'pre-wrap',
              }}>
                {m.text}
              </div>
            </div>
          ))}

          {typing && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                padding: '10px 16px', borderRadius: '14px 14px 14px 4px',
                background: COLORS.hover, fontSize: 13,
              }}>
                <TypingDots />
              </div>
            </div>
          )}
        </div>

        {/* suggestions dropdown */}
        {input.trim() && suggestions.length > 0 && !typing && (
          <div style={{
            borderTop: `1px solid ${COLORS.border}`, maxHeight: 200, overflow: 'auto',
            background: COLORS.bg,
          }}>
            {suggestions.map(item => (
              <button
                key={item.id}
                onClick={() => handleSuggestionClick(item)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '9px 16px', fontSize: 12.5, color: COLORS.text,
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = COLORS.hover)}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {item.question}
              </button>
            ))}
          </div>
        )}

        {/* input */}
        <div style={{
          borderTop: `1px solid ${COLORS.border}`, padding: '10px 12px',
          display: 'flex', gap: 8, flexShrink: 0,
        }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Escribe tu pregunta..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={typing}
            style={{
              flex: 1, padding: '10px 14px', border: `1.5px solid ${COLORS.border}`,
              borderRadius: 10, fontSize: 13, outline: 'none',
              background: typing ? '#f5f5f5' : '#fff',
            }}
          />
          <button
            onClick={() => suggestions.length > 0 ? handleSuggestionClick(suggestions[0]) : handleSend(input)}
            disabled={typing || !input.trim()}
            style={{
              background: input.trim() && !typing ? COLORS.primary : '#ccc',
              border: 'none', borderRadius: 10, color: '#fff',
              width: 42, height: 42, cursor: input.trim() && !typing ? 'pointer' : 'default',
              fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}
          >➤</button>
        </div>

        {/* keyframes */}
        <style>{`
          @keyframes typingDot {
            0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
            40% { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    </>
  )
}
