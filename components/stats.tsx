'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '10+', label: 'Years Experience', suffix: '' },
  { value: '5,000+', label: 'Treatments Performed', suffix: '' },
  { value: '3', label: 'Florida Locations', suffix: '' },
  { value: '4.9★', label: 'Average Rating', suffix: '' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-3xl border border-white/[0.08] px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-700 ${
                  visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="font-serif text-4xl md:text-5xl font-semibold text-[#00C9C8] mb-2">
                  {stat.value}
                </div>
                <div className="font-sans text-sm text-[#94A3B8] tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
