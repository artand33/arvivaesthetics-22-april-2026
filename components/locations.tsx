'use client'

const locations = [
  {
    city: 'Tampa',
    address: '4821 Bay to Bay Blvd, Suite 200\nTampa, FL 33629',
    phone: '(813) 555-0142',
    hours: 'Mon–Sat: 9am – 6pm\nSun: 10am – 4pm',
    mapsUrl: 'https://maps.google.com',
  },
  {
    city: 'Miami',
    address: '1221 Brickell Ave, Suite 600\nMiami, FL 33131',
    phone: '(305) 555-0178',
    hours: 'Mon–Sat: 9am – 7pm\nSun: 10am – 5pm',
    mapsUrl: 'https://maps.google.com',
  },
  {
    city: 'Ocala',
    address: '3720 SW College Rd, Suite 101\nOcala, FL 34474',
    phone: '(352) 555-0193',
    hours: 'Mon–Fri: 9am – 5pm\nSat: 10am – 3pm',
    mapsUrl: 'https://maps.google.com',
  },
]

export default function Locations() {
  return (
    <section id="locations" className="py-24 px-6 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Florida
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            Find Your Location
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-3xl p-8 flex flex-col transition-all duration-500"
            >
              {/* City */}
              <h3 className="font-serif text-4xl text-white font-light mb-6 pb-6 border-b border-white/[0.08]">
                {loc.city}
              </h3>

              {/* Details */}
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-[#00C9C8] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <p className="font-sans text-sm text-[#94A3B8] whitespace-pre-line leading-relaxed">{loc.address}</p>
                </div>

                <div className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#00C9C8] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <p className="font-sans text-sm text-[#94A3B8]">{loc.phone}</p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-4 h-4 text-[#00C9C8] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  <p className="font-sans text-sm text-[#94A3B8] whitespace-pre-line leading-relaxed">{loc.hours}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-full font-sans text-xs tracking-widest uppercase border border-white/20 text-white hover:border-[#00C9C8] hover:text-[#00C9C8] transition-all duration-300"
                >
                  Get Directions
                </a>
                <a
                  href="#booking"
                  className="flex-1 text-center btn-teal py-2.5 rounded-full font-sans text-xs tracking-widest uppercase"
                >
                  Book Here
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
