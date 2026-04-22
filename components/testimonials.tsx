'use client'

const reviews = [
  {
    quote:
      'LUMIS completely transformed my skin. The CO2 laser treatment was worth every penny — my results exceeded anything I imagined possible. The staff made me feel so comfortable throughout.',
    name: 'Ashley R.',
    treatment: 'CO2 Laser Resurfacing',
  },
  {
    quote:
      'Dr. Marquez is an artist. My liquid facelift looked so natural — friends kept asking if I had "done something" but couldn\'t quite place it. That\'s exactly what I wanted.',
    name: 'Patricia M.',
    treatment: 'Liquid Facelift',
  },
  {
    quote:
      'The IV therapy sessions have been a game-changer for my energy levels. I come in once a month now and the difference is remarkable. The clinic itself feels like a luxury retreat.',
    name: 'James K.',
    treatment: 'IV Therapy',
  },
  {
    quote:
      'As a VIP member, the personalized care I receive is unmatched. My coordinator remembers everything about my treatment history and preferences. Worth every dollar.',
    name: 'Diana L.',
    treatment: 'VIP Membership',
  },
  {
    quote:
      'Body sculpting results were visible after just 2 sessions. The technology is incredible and the team walks you through every step. I trust LUMIS completely.',
    name: 'Marcus T.',
    treatment: 'Body Sculpting',
  },
  {
    quote:
      'I was nervous about injectables but Dr. Holloway\'s approach was so thoughtful and conservative. The results are beautiful and completely natural-looking.',
    name: 'Sarah B.',
    treatment: 'Injectables',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0d0d18] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Patient Stories
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            Real Results, Real People
          </h2>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div className="px-6">
        <div className="flex gap-5 overflow-x-auto testimonials-scroll pb-4">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-7 flex-shrink-0 w-[340px] md:w-[380px] flex flex-col border border-white/[0.08] hover:border-[#00C9C8]/25 transition-all duration-300"
            >
              <Stars />
              <p className="font-sans text-sm text-[#F8FAFC] leading-relaxed flex-1 mb-5">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm font-semibold text-white">{review.name}</span>
                <span className="glass px-3 py-1 rounded-full text-xs font-sans text-[#00C9C8] border border-[#00C9C8]/20">
                  {review.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
