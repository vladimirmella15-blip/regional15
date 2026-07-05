// components/landing/TopBar.tsx
'use client'

import SocialIcons from '@/components/shared/SocialIcons'

export default function TopBar() {
  return (
    <div className="top-bar" role="banner" aria-label="Barra informativa">
      <div className="container-lg">
        <div className="top-bar-left">
          <span>
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg>
            C. Arzobispo Portes, Santo Domingo 10208
          </span>
          <span>
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            809-686-3598
          </span>
        </div>
        <div className="top-bar-right">
          <span>
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            contacto@regional15.edu.do
          </span>
          <span className="top-bar-social-sep" style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.15)', display: 'inline-block' }} />
          <SocialIcons platform="instagram" size={14} href="https://www.instagram.com/regional_15minerd/" />
          <SocialIcons platform="facebook" size={14} href="https://www.facebook.com/regional15minerd/" />
        </div>
      </div>
    </div>
  )
}
