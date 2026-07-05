'use client'

import { useState, useEffect } from 'react'
import TopBar from '@/components/landing/TopBar'
import Header from '@/components/landing/Header'
import Footer from '@/components/landing/Footer'
import AccessibilityToolbar from '@/components/landing/AccessibilityToolbar'
import ChatBot from '@/components/ChatBot'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    const storedTheme = localStorage.getItem('theme')
    const isDark = storedTheme ? storedTheme === 'dark' : prefersDark.matches
    setTheme(isDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const next = e.matches
        setTheme(next ? 'dark' : 'light')
        document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
      }
    }
    prefersDark.addEventListener('change', handleChange)
    return () => prefersDark.removeEventListener('change', handleChange)
  }, [])

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

  const handleThemeToggle = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
      return next
    })
  }

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
        theme={theme}
        handleThemeToggle={handleThemeToggle}
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
