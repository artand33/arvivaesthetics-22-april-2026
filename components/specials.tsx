'use client'

const deals = [
  {
    name: 'BioFat Butt Lift',
    description:
      'Natural enhancement using your own fat transfer. Achieve fuller, lifted curves without implants.',
    original: '$3,200',
    sale: '$2,400',
    badge: 'Save $800',
  },
  {
    name: 'Laser Hair Removal BOGO',
    description:
      'Buy one treatment area, get one completely free. Silk-smooth results that last. Limited slots available.',
    original: '$800',
    sale: '$400',
    badge: 'BOGO Free',
  },
  {
    name: 'Collagen Facelift Package',
    description:
      'Our signature collagen-stimulating bundle: microneedling + PRF + LED therapy for total skin renewal.',
    original: '$1,800',
    sale: '$1,200',
    badge: 'Save $600',
  },
]

export default function Specials() {
  return (
    <section id="specials" className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #00C9C8 0%, #0891b2 40%, #7C3AED 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.2em] uppercase font-medium text-[#080810]/70">
            Limited Time
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-[#080810] mt-3 font-light">
            April Specials
          </h2>
          <p className="font-sans text-[#080810]/70 mt-3">
            Exclusive offers this month only. Claim before they&apos;re gone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              <div className="mb-5">
                <span
                  className="inline-block px-3 py-1 rounded-full font-sans text-xs font-semibold tracking-wider uppercase mb-4"
                  style={{ background: 'rgba(8,8,16,0.15)', color: '#080810' }}
                >
                  {deal.badge}
                </span>
                <h3 className="font-serif text-2xl text-[#080810] font-medium mb-3">{deal.name}</h3>
                <p className="font-sans text-sm text-[#080810]/70 leading-relaxed">{deal.description}</p>
              </div>

              <div className="mt-auto">
                <div className="flex items-end gap-3 mb-5">
                  <span className="font-sans text-sm text-[#080810]/50 line-through">{deal.original}</span>
                  <span className="font-serif text-3xl text-[#080810] font-semibold">{deal.sale}</span>
                </div>
                <a
                  href="#booking"
                  className="block w-full text-center py-3.5 rounded-full font-sans text-sm tracking-widest uppercase font-semibold text-white transition-all duration-300"
                  style={{ background: '#080810' }}
                >
                  Claim Offer
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
