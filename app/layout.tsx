import type { Metadata, Viewport } from 'next'
import './globals.css'
import Providers from './providers'
import Preloader from '@/components/shared/Preloader'
import CursorFollower from '@/components/shared/CursorFollower'
import ScrollProgress from '@/components/shared/ScrollProgress'

export const metadata: Metadata = {
  title: 'Regional 15 – Educación Santo Domingo | MINERD',
  description: 'Portal oficial de la Regional de Educación 15 del Ministerio de Educación de la República Dominicana. 6 distritos educativos en el Gran Santo Domingo.',
  manifest: '/manifest.json',
  icons: {
    icon: '/assets/img/Regional155.jpg',
    apple: '/assets/img/Regional155.jpg',
  },
  openGraph: {
    title: 'Regional 15 – Educación Santo Domingo',
    description: 'Portal oficial de la Regional de Educación 15 del MINERD.',
    locale: 'es_DO',
    type: 'website',
  },
  robots: { index: true, follow: true },
  appleWebApp: { capable: true, title: 'Regional 15', statusBarStyle: 'default' },
}

export const viewport: Viewport = {
  themeColor: '#003876',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-DO" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/assets/img/Regional155.jpg" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Regional 15" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('regional15-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(e){console.warn('SW registration failed:',e)})})}` }} />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <CursorFollower />
        <Preloader />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
