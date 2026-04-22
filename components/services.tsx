'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 3v1m0 16v1M4.22 4.22l.71.71m14.14 14.14.71.71M3 12h1m16 0h1M4.93 19.07l.71-.71M18.36 5.64l.71-.71"/>
        <circle cx="12" cy="12" r="4"/>
      </svg>
    ),
    title: 'Laser Treatments',
    desc: 'Advanced laser tech for skin clarity & renewal',
    popular: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9z"/>
        <path d="M7 12s1.5-3 5-3 5 3 5 3"/>
        <path d="M9 17c1 .5 2 .8 3 .8s2-.3 3-.8"/>
      </svg>
    ),
    title: 'Facials',
    desc: 'Medical-grade facials for radiant complexion',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2c-1 0-2 .4-2.7 1.2L4 10h16l-5.3-6.8C14 2.4 13 2 12 2z"/>
        <path d="M4 10v2a8 8 0 0 0 16 0v-2"/>
        <path d="M8 14s1 2 4 2 4-2 4-2"/>
      </svg>
    ),
    title: 'Injectables',
    desc: 'Botox & fillers for natural, refined results',
    popular: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: 'Skin Tightening',
    desc: 'RF & ultrasound for firmer, youthful skin',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2a5 5 0 0 1 5 5c0 3.5-5 11-5 11S7 10.5 7 7a5 5 0 0 1 5-5z"/>
        <circle cx="12" cy="7" r="2"/>
      </svg>
    ),
    title: 'Body Sculpting',
    desc: 'CoolSculpting & EMSculpt for contour perfection',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9"/>
        <path d="M18 2v4l3-2-3-2z"/>
        <path d="M7 10h.01M12 10h.01M17 10h.01M7 14h10"/>
      </svg>
    ),
    title: 'IV Therapy',
    desc: 'Customized infusions for peak wellness',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Sexual Wellness',
    desc: 'Intimate health solutions with discretion & care',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'Skin Resurfacing',
    desc: 'Microneedling & peels for texture renewal',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'NAD Therapy',
    desc: 'Cellular energy & anti-aging infusions',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
    title: 'PRP & PRF',
    desc: 'Platelet-rich therapies for deep regeneration',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0zM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0z"/>
        <path d="M1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003z"/>
      </svg>
    ),
    title: 'Cosmetic Dermatology',
    desc: 'Evidence-based skin health & correction',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Surgical Treatments',
    desc: 'Minor surgical procedures by board-certified experts',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                ;(card as HTMLElement).style.opacity = '1'
                ;(card as HTMLElement).style.transform = 'translateY(0)'
              }, i * 60)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 px-6 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            What We Offer
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            Our Treatments
          </h2>
        </div>

        {/* Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card glass glass-hover rounded-2xl p-6 cursor-pointer transition-all duration-500 relative group"
              style={{ opacity: 0, transform: 'translateY(24px)' }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs font-semibold text-[#00C9C8] border border-[#00C9C8]/30">
                  Popular
                </div>
              )}
              <div className="text-[#00C9C8] mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="font-sans font-semibold text-white text-base mb-1.5">{service.title}</h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
