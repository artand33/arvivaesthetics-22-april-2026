'use client'

import { useRef, useState, useCallback } from 'react'

interface SliderProps {
  label: string
  beforeStyle: React.CSSProperties
  afterStyle: React.CSSProperties
}

function ComparisonSlider({ label, beforeStyle, afterStyle }: SliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    updatePosition(e.clientX)
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePosition(ev.clientX) }
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const onTouchStart = (e: React.TouchEvent) => {
    const onMove = (ev: TouchEvent) => updatePosition(ev.touches[0].clientX)
    const onEnd = () => { window.removeEventListener('touchmove', onMove); window.removeEventListener('touchend', onEnd) }
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onEnd)
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div className="glass glass-hover rounded-3xl overflow-hidden flex flex-col transition-all duration-500">
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative h-64 select-none cursor-col-resize overflow-hidden"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Before layer (full width) */}
        <div className="absolute inset-0" style={beforeStyle} />

        {/* After layer (clipped from left) */}
        <div
          className="absolute inset-0"
          style={{ ...afterStyle, clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* BEFORE label */}
        <span className="absolute top-3 left-3 font-sans text-[10px] tracking-[0.18em] uppercase font-semibold text-white/70 glass px-2 py-0.5 rounded-full border border-white/10 select-none">
          Before
        </span>

        {/* AFTER label */}
        <span className="absolute top-3 right-3 font-sans text-[10px] tracking-[0.18em] uppercase font-semibold text-white/70 glass px-2 py-0.5 rounded-full border border-white/10 select-none">
          After
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/40 pointer-events-none"
          style={{ left: `${position}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center pointer-events-none select-none z-10"
          style={{
            left: `${position}%`,
            background: 'rgba(8,8,16,0.7)',
            border: '2px solid rgba(0,201,200,0.7)',
            boxShadow: '0 0 16px rgba(0,201,200,0.5)',
          }}
        >
          {/* Left arrow */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 5L3 9L7 13" stroke="#00C9C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 5L15 9L11 13" stroke="#00C9C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Label below */}
      <div className="px-5 py-4">
        <p className="font-sans text-sm font-semibold text-white tracking-wide">{label}</p>
        <p className="font-sans text-xs text-[#94A3B8] mt-0.5">Drag to compare</p>
      </div>
    </div>
  )
}

const sliders: SliderProps[] = [
  {
    label: 'CO2 Laser',
    beforeStyle: {
      background: 'linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 50%, #383838 100%)',
    },
    afterStyle: {
      background: 'linear-gradient(145deg, #063030 0%, #0a4040 40%, #00a8a7 100%)',
    },
  },
  {
    label: 'Liquid Facelift',
    beforeStyle: {
      background: 'linear-gradient(145deg, #1e1a1a 0%, #2e2626 50%, #3a3030 100%)',
    },
    afterStyle: {
      background: 'linear-gradient(145deg, #2a1020 0%, #7C3AED 60%, #e05090 100%)',
    },
  },
  {
    label: 'Body Sculpting',
    beforeStyle: {
      background: 'linear-gradient(145deg, #181820 0%, #252535 50%, #303040 100%)',
    },
    afterStyle: {
      background: 'linear-gradient(145deg, #08102e 0%, #1038a0 60%, #3882f6 100%)',
    },
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Proven Transformations
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light text-balance">
            Real Results
          </h2>
          <p className="font-sans text-[#94A3B8] mt-4 text-base">
            Drag to reveal the transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sliders.map((s, i) => (
            <ComparisonSlider key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
