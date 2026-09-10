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

  return (
    <Tag className={className} aria-label={text}>
      {letters.map((ch, i) => {
        if (ch === ' ') {
          return (
            <span key={i} aria-hidden="true" className="letter-space">
              {'\u00A0'}
            </span>
          )
        }
        return (
          <span
            key={i}
            className={`letter-anim${accentIndexes.has(i) ? ' letter-accent' : ''}`}
            style={{ animationDelay: `${delay + i * speed}ms` }}
          >
            {ch}
          </span>
        )
      })}
    </Tag>
  )
}