'use client'

const treatments = [
  {
    name: 'CO2 Laser Resurfacing',
    desc: 'The gold standard in skin rejuvenation. Dramatically reduces wrinkles, scars, and sun damage with precision laser energy.',
    duration: '90 min',
    price: 'from $800',
    tag: 'Most Requested',
    gradient: 'from-[#00C9C8]/20 to-transparent',
  },
  {
    name: 'Liquid Facelift',
    desc: 'A bespoke combination of neurotoxins and dermal fillers artfully placed to restore volume and redefine facial contours.',
    duration: '60 min',
    price: 'from $1,200',
    tag: 'Signature',
    gradient: 'from-[#7C3AED]/20 to-transparent',
  },
  {
    name: 'Body Sculpting',
    desc: 'Non-invasive fat reduction and muscle toning using the latest in electromagnetic and cryogenic technology.',
    duration: '45 min',
    price: 'from $600',
    tag: 'Body',
    gradient: 'from-[#00C9C8]/15 to-transparent',
  },
]

export default function SignatureTreatments() {
  return (
    <section className="py-24 px-6 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Featured
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            Signature Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {treatments.map((t, i) => {
            const icons = [
              // CO2 Laser - laser/light beam icon
              (
                <svg viewBox="0 0 120 120" className="w-32 h-32 opacity-50" fill="none">
                  <line x1="30" y1="60" x2="90" y2="60" stroke="#00C9C8" strokeWidth="2" />
                  <circle cx="60" cy="60" r="20" stroke="#00C9C8" strokeWidth="2" opacity="0.6" />
                  <line x1="60" y1="20" x2="60" y2="100" stroke="#00C9C8" strokeWidth="1" opacity="0.3" />
                  <path d="M45 45 L75 75 M75 45 L45 75" stroke="#00C9C8" strokeWidth="2" opacity="0.4" />
                </svg>
              ),
              // Liquid Facelift - pure gradient, no icon
              null,
              // Body Sculpting - body silhouette icon
              (
                <svg viewBox="0 0 120 120" className="w-32 h-32 opacity-50" fill="none">
                  <circle cx="60" cy="30" r="12" stroke="#00C9C8" strokeWidth="2" />
                  <path d="M60 42 L55 65 L45 95" stroke="#00C9C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M60 42 L65 65 L75 95" stroke="#00C9C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M50 55 L35 75" stroke="#00C9C8" strokeWidth="2" strokeLinecap="round" />
                  <path d="M70 55 L85 75" stroke="#00C9C8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ),
            ]
            return (
            <div
              key={i}
              className="glass glass-hover rounded-3xl overflow-hidden flex flex-col transition-all duration-500"
            >
              {/* Image area — each card has its own gradient identity */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={
                  i === 0
                    ? { background: 'linear-gradient(145deg, #0a2e2e 0%, #063030 40%, #001a1a 100%)' }
                    : i === 1
                    ? { background: 'linear-gradient(145deg, #2a0a1a 0%, #3d0a2e 40%, #1a0a2a 100%)' }
                    : { background: 'linear-gradient(145deg, #080e2e 0%, #0a1a3d 40%, #050a1a 100%)' }
                }
              >
                {/* Glowing center orb */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '140px',
                    height: '140px',
                    background:
                      i === 0
                        ? 'radial-gradient(circle, rgba(0,201,200,0.30) 0%, rgba(0,201,200,0.08) 45%, transparent 70%)'
                        : i === 1
                        ? 'radial-gradient(circle, rgba(220,80,150,0.30) 0%, rgba(124,58,237,0.12) 45%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(56,130,246,0.30) 0%, rgba(56,130,246,0.08) 45%, transparent 70%)',
                    borderRadius: '50%',
                  }}
                />
                {/* SVG icon only for CO2 and Body Sculpting */}
                {icons[i]}
                <span className="absolute top-4 left-4 glass text-[#00C9C8] font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-[#00C9C8]/20">
                  {t.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl text-white font-light mb-3">{t.name}</h3>
                <p className="font-sans text-sm text-[#94A3B8] leading-relaxed flex-1">{t.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="glass px-3 py-1 rounded-full text-xs font-sans text-[#94A3B8] border border-white/[0.06]">
                      {t.duration}
                    </span>
                    <span className="font-serif text-lg text-[#00C9C8]">{t.price}</span>
                  </div>
                  <a
                    href="#booking"
                    className="font-sans text-xs tracking-widest uppercase text-white border border-white/20 px-4 py-2 rounded-full hover:border-[#00C9C8] hover:text-[#00C9C8] transition-all duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
