'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Services', 'Locations', 'Membership', 'About', 'Specials']

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 backdrop-blur-xl bg-[rgba(8,8,16,0.85)] border-b border-white/[0.06]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="relative flex items-center">
            {/* Double chevron icon */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="shrink-0">
              <path d="M6 8L13 14L6 20" stroke="#00C9C8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 8L20 14L13 20" stroke="#00C9C8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            </svg>
          </span>
          <span className="text-2xl font-bold tracking-[0.15em] text-white font-sans">LUMIS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-sans text-[#94A3B8] hover:text-[#00C9C8] tracking-wider uppercase transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#booking"
            className="btn-teal px-6 py-2.5 rounded-full text-sm font-sans tracking-wider uppercase animate-pulse-glow"
          >
            Book Now
          </a>
        </div>

        {/* Mobile: inline "Book" pill + hamburger on far right for right-thumb reach */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#booking"
            className="btn-teal px-4 py-2 rounded-full text-xs font-sans tracking-wider uppercase animate-pulse-glow"
          >
            Book
          </a>
          <button
            className="text-white p-2 -mr-1 touch-manipulation"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu — slides in from top, nav links right-aligned for right thumb */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/[0.08] mt-1">
          <nav className="flex flex-col px-6 py-5 gap-1">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-base font-sans text-[#94A3B8] hover:text-[#00C9C8] tracking-wider uppercase py-3 text-right transition-colors duration-200"
                style={{ minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
              >
                {link}
              </a>
            ))}
            {/* Full-width bottom CTA — large tap target */}
            <a
              href="#booking"
              onClick={() => setMenuOpen(false)}
              className="btn-teal mt-4 py-4 rounded-2xl text-sm font-sans tracking-wider uppercase text-center font-semibold"
              style={{ minHeight: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Book Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
