'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/app-icon.png"
            alt="Plate to Pan"
            className="w-9 h-9 rounded-xl group-hover:scale-105 transition-transform"
          />
          <span className="font-semibold text-white tracking-tight">Plate to Pan</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm text-white/60 hover:text-white transition-colors">Pricing</a>
          <a href="#download" className="px-4 py-2 bg-brand-orange hover:bg-brand-orange-dark rounded-full text-sm font-semibold transition-all hover:scale-105 orange-glow-sm">
            Download Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white/60 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all mb-1 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-white/5 px-6 py-6 flex flex-col gap-4">
          <a href="#features" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="#pricing" className="text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#download" className="w-full text-center px-4 py-3 bg-brand-orange rounded-full font-semibold" onClick={() => setMenuOpen(false)}>
            Download Free
          </a>
        </div>
      )}
    </nav>
  )
}
