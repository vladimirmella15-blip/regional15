'use client'

import Image from 'next/image'

interface FrasesSectionProps {
  frases?: string[]
}

export default function FrasesSection({ frases }: FrasesSectionProps) {
  if (!frases || frases.length === 0) return null

  const firmada = (frase: string) => {
    const base = frase.replace(/[-–—]\s*Eddy\s*Chá?vez\.?\s*$/i, '').trimEnd()
    if (!base) return frase
    return base + ' - Eddy Chavez'
  }

  return (
    <section className="section frases-section" aria-label="Reflexiones del Director Eddy Chávez">
      <div className="container">
        <div className="frases-wrap">
          <div className="frases-side">
            <div className="frases-photo">
              <Image
                src="/assets/img/FotoNueva.jpeg"
                alt="Eddy Chávez Placencio, Director Regional de Educación 15"
                fill
                sizes="(max-width: 768px) 120px, 150px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <span className="frases-name">Eddy Chávez Placencio</span>
            <span className="frases-role">Director Regional de Educación 15</span>
            <a href="/director" className="frases-link">
              Conocer su gestión
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="frases-quotes">
            {frases.map((frase, idx) => (
              <figure key={idx} className="frase-quote">
                <span className="frase-quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{firmada(frase)}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
