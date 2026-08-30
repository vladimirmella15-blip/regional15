'use client'

import { useState, useEffect } from 'react'
import TopBar from '@/components/landing/TopBar'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import AccessibilityToolbar from '@/components/landing/AccessibilityToolbar'
import ChatBot from '@/components/ChatBot'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  // Close mobile nav on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
        document.getElementById('hamburger')?.classList.remove('open')
        document.getElementById('mobile-nav')?.classList.remove('open')
        document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const handleHamburger = () => {
    setMobileOpen(prev => {
      const next = !prev
      const hamburger = document.getElementById('hamburger')
      const mobileNav = document.getElementById('mobile-nav')
      hamburger?.classList.toggle('open', next)
      hamburger?.setAttribute('aria-expanded', String(next))
      mobileNav?.classList.toggle('open', next)
      return next
    })
  }

  const handleMobileNavClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'mobile-nav') {
      setMobileOpen(false)
      document.getElementById('hamburger')?.classList.remove('open')
      document.getElementById('mobile-nav')?.classList.remove('open')
      document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false')
    }
  }

  const handleMobileLinkClick = () => {
    setMobileOpen(false)
    document.getElementById('hamburger')?.classList.remove('open')
    document.getElementById('mobile-nav')?.classList.remove('open')
    document.getElementById('hamburger')?.setAttribute('aria-expanded', 'false')
  }

  return (
    <>
      <TopBar />
      <Header
        mobileOpen={mobileOpen}
        handleHamburger={handleHamburger}
        handleMobileNavClick={handleMobileNavClick}
        handleMobileLinkClick={handleMobileLinkClick}
      />
      {children}
      <Footer />
      <AccessibilityToolbar />
      <ChatBot />
    </>
  )
}
