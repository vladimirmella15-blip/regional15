import type { Metadata, Viewport } from 'next'
import './globals.css'
import Providers from './providers'
import Preloader from '@/components/shared/Preloader'
import ScrollProgress from '@/components/shared/ScrollProgress'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/sitio'

export const metadata: Metadata = {
  // Sin esto, Next no sabe cual es el sitio y las direcciones canonicas que ve
  // Google quedan como rutas relativas en vez de direcciones completas.
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | MINERD`,
  description: SITE_DESCRIPTION,
  manifest: '/manifest.json',
  icons: {
    icon: '/assets/img/Regional155.jpg',
    apple: '/assets/img/Regional155.jpg',
  },
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'es_DO',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: SITE_NAME, description: SITE_DESCRIPTION },
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
        <script dangerouslySetInnerHTML={{ __html: process.env.NODE_ENV === 'production'
          ? `if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js').catch(function(e){console.warn('SW registration failed:',e)})})}`
          : `if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(function(registrations){registrations.forEach(function(registration){registration.unregister()})})}` }} />
      </head>
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <Preloader />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
