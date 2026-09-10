'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    accTranslateInit?: () => void
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: (
          config: {
            pageLanguage: string
            includedLanguages: string
            layout: unknown
            autoDisplay: boolean
          },
          id: string
        ) => void
        InlineLayout: { SIMPLE: number }
      }
    }
  }
}

const SCRIPT_ID = 'google-translate-script'
const ELEMENT_ID = 'language-selector-el'

export default function LanguageSelector() {
  useEffect(() => {
    const init = () => {
      if (!window.google?.translate) return
      const el = document.getElementById(ELEMENT_ID)
      if (!el || el.childElementCount > 0) return
      window.google.translate.TranslateElement(
        {
          pageLanguage: 'es',
          includedLanguages: 'es,en,fr,ht,pt',
          layout: window.google.translate.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        ELEMENT_ID
      )
    }

    if (document.getElementById(SCRIPT_ID)) {
      init()
      return
    }

    const existing = window.accTranslateInit
    window.accTranslateInit = () => {
      existing?.()
      init()
    }

    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = 'https://translate.google.com/translate_a/element.js?cb=accTranslateInit'
    s.async = true
    s.onerror = () => {
      window.accTranslateInit = existing
      s.remove()
    }
    document.head.appendChild(s)
  }, [])

  return (
    <div className="lang-selector" role="region" aria-label="Seleccionar idioma / Select language">
      <svg
        viewBox="0 0 24 24"
        width="15"
        height="15"
        fill="currentColor"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
      </svg>
      <div id={ELEMENT_ID} className="lang-selector-gt" />
    </div>
  )
}