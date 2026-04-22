'use client'

import { useEffect, useRef } from 'react'

const trustItems = [
  { value: '3', label: 'Locations' },
  { value: '10+', label: 'Years Experience' },
  { value: '5,000+', label: 'Patients' },
  { value: '4.9★', label: 'Rating' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    setTimeout(() => el.classList.add('opacity-100', 'translate-y-0'), 100)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080810]">
      {/* Static depth background layers — no animations, elegant & layered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Full-page dot-grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Large teal radial glow — top-right */}
        <div
          className="absolute"
          style={{
            width: '900px',
            height: '900px',
            top: '-300px',
            right: '-200px',
            background: 'radial-gradient(circle, rgba(0,201,200,0.12) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Large violet radial glow — bottom-left */}
        <div
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            bottom: '-250px',
            left: '-200px',
            background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />
        {/* Subtle diagonal overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,201,200,0.04) 0%, transparent 50%, rgba(124,58,237,0.03) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full flex items-center">
        <div
          ref={heroRef}
          className="max-w-2xl opacity-0 translate-y-8 transition-all duration-1000 flex-1"
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-[#00C9C8]" />
            <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
              Board-Certified Medical Aesthetics
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] mb-6 text-balance">
            Where Science{' '}
            <span className="italic text-[#00C9C8]">Meets</span>{' '}
            Beauty
          </h1>

          {/* Subtext */}
          <p className="font-sans text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-xl">
            Transformative non-surgical treatments across 3 Florida locations. Precision aesthetics
            tailored to reveal your most confident self.
          </p>

          {/* CTAs — stacked full-width on mobile, inline on md+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-16">
            <a
              href="#booking"
              className="btn-teal px-8 py-4 sm:py-3.5 rounded-full font-sans text-sm tracking-wider uppercase text-center"
              style={{ minHeight: '52px' }}
            >
              Book Free Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 sm:py-3.5 rounded-full font-sans text-sm tracking-wider uppercase border border-white/20 text-white hover:border-[#00C9C8] hover:text-[#00C9C8] transition-all duration-300 text-center"
              style={{ minHeight: '52px' }}
            >
              Explore Treatments
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap gap-6 md:gap-10">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {i > 0 && <span className="hidden md:block h-5 w-px bg-white/10" />}
                <div>
                  <span className="font-serif text-2xl font-semibold text-[#00C9C8]">
                    {item.value}
                  </span>
                  <span className="ml-2 font-sans text-sm text-[#94A3B8]">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating treatment preview card */}
        <div className="hidden lg:flex flex-1 justify-end items-center">
          <div
            className="glass rounded-3xl p-6 border border-white/10 w-80 animate-bounce"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 201, 200, 0.15)',
              animation: 'float-card 6s ease-in-out infinite',
            }}
          >
            {/* Clean teal-to-dark gradient — no icons, no X */}
            <div
              className="rounded-2xl h-44 mb-4 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0a2e2e 0%, #063030 30%, #001a1a 60%, #080810 100%)',
              }}
            >
              {/* Glowing circle in center */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(0,201,200,0.35) 0%, rgba(0,201,200,0.10) 40%, transparent 70%)',
                  borderRadius: '50%',
                }}
              />
              {/* Outer soft ring */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, transparent 40%, rgba(0,201,200,0.04) 70%, transparent 100%)',
                  borderRadius: '50%',
                }}
              />
              {/* Treatment tag */}
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#00C9C8] font-semibold font-sans glass px-2 py-0.5 rounded-full border border-[#00C9C8]/20">
                Most Requested
              </span>
            </div>
            <h3 className="font-serif text-xl text-white mb-2">CO2 Laser Resurfacing</h3>
            <div className="flex items-center justify-between text-sm text-[#94A3B8]">
              <span>90 min</span>
              <span className="text-[#00C9C8] font-semibold">from $800</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080810)' }}
      />
    </section>
  )
}
