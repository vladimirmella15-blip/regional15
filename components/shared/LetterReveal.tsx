interface Props {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  delay?: number
  speed?: number
  accent?: string
}

const TAGS = ['h1', 'h2', 'h3', 'p', 'span'] as const
type TagName = (typeof TAGS)[number]

type Segment = { text: string; type: 'space' | 'digit' | 'char' }

export default function LetterReveal({
  text,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  speed = 34,
  accent,
}: Props) {
  const accentIndexes = new Set<number>()
  if (accent) {
    const start = text.indexOf(accent)
    if (start >= 0) {
      for (let j = start; j < start + accent.length; j++) accentIndexes.add(j)
    }
  }

  const letters = Array.from(text)

  const segments: Segment[] = []
  for (let i = 0; i < letters.length; i++) {
    const ch = letters[i]
    if (ch === ' ') {
      segments.push({ text: '\u00A0', type: 'space' })
      continue
    }
    if (/\d/.test(ch)) {
      let j = i
      while (j < letters.length && /\d/.test(letters[j])) j++
      segments.push({ text: letters.slice(i, j).join(''), type: 'digit' })
      i = j - 1
      continue
    }
    segments.push({ text: ch, type: 'char' })
  }

  let idx = 0

  return (
    <Tag className={className} aria-label={text}>
      {segments.map((seg, k) => {
        const startIdx = idx
        idx += Array.from(seg.text).length

        if (seg.type === 'space') {
          return (
            <span key={k} aria-hidden="true" className="letter-space">
              {'\u00A0'}
            </span>
          )
        }

        const inAccent = Array.from(seg.text).every((_, o) => accentIndexes.has(startIdx + o))

        return (
          <span
            key={k}
            className={`letter-anim${inAccent ? ' letter-accent' : ''}`}
            style={{ animationDelay: `${delay + startIdx * speed}ms` }}
          >
            {seg.text}
          </span>
        )
      })}
    </Tag>
  )
}