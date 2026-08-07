'use client'

interface FrasesSectionProps {
  frases?: string[]
}

export default function FrasesSection({ frases }: FrasesSectionProps) {
  if (!frases || frases.length === 0) return null

  return (
    <section className="section frases-section" aria-label="Frases del Director Eddy Chávez">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow" style={{ color: 'var(--red)' }}>Frase Inspiradora</span>
          <h2>Palabras del Director</h2>
          <div className="section-divider"></div>
        </div>
        <div className="frases-grid">
          {frases.map((frase, idx) => (
            <figure key={idx} className="frase-card">
              <blockquote>
                &quot;{frase}&quot;
              </blockquote>
              <figcaption>
                <span className="frase-name">Eddy Chávez Placencio</span>
                <span className="frase-title">Director Regional de Educación 15</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
