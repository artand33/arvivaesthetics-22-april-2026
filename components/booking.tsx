'use client'

import { useState } from 'react'

const inputClass =
  'w-full glass rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-[#94A3B8] border border-white/[0.08] focus:outline-none focus:border-[#00C9C8]/50 focus:ring-0 transition-colors duration-200 bg-transparent'

export default function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="py-24 px-6 bg-[#0d0d18]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Free Consultation
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            Start Your Journey
          </h2>
          <p className="font-sans text-[#94A3B8] mt-4 leading-relaxed">
            Take the first step toward your transformation. Our experts will craft a personalized treatment plan.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 md:p-10 border border-white/[0.08]">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ background: 'rgba(0,201,200,0.15)', border: '1px solid rgba(0,201,200,0.3)' }}>
                <svg className="w-8 h-8 text-[#00C9C8]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-white mb-3">Request Received</h3>
              <p className="font-sans text-[#94A3B8]">
                Our team will reach out within 24 hours to confirm your consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-2">First Name</label>
                  <input required type="text" placeholder="Jane" className={inputClass} />
                </div>
                <div>
                  <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-2">Last Name</label>
                  <input required type="text" placeholder="Doe" className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-2">Email</label>
                  <input required type="email" placeholder="jane@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-2">Phone</label>
                  <input type="tel" placeholder="(555) 000-0000" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-3">Location</label>
                <div className="flex gap-3">
                  {['Tampa', 'Miami', 'Ocala'].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setSelectedLocation(loc)}
                      className={`flex-1 py-3 px-4 rounded-full font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 ${
                        selectedLocation === loc
                          ? 'bg-[#00C9C8] text-[#080810]'
                          : 'glass border border-white/20 text-white hover:border-[#00C9C8]/40'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-2">
                  Treatment Interest
                </label>
                <select className={inputClass} style={{ WebkitAppearance: 'none' }}>
                  <option value="" className="bg-[#0d0d1a]">Select a treatment category</option>
                  <option value="laser" className="bg-[#0d0d1a]">Laser Treatments</option>
                  <option value="facials" className="bg-[#0d0d1a]">Facials</option>
                  <option value="injectables" className="bg-[#0d0d1a]">Injectables</option>
                  <option value="body" className="bg-[#0d0d1a]">Body Sculpting</option>
                  <option value="iv" className="bg-[#0d0d1a]">IV Therapy</option>
                  <option value="prp" className="bg-[#0d0d1a]">PRP & PRF</option>
                  <option value="skin" className="bg-[#0d0d1a]">Skin Resurfacing</option>
                  <option value="wellness" className="bg-[#0d0d1a]">Sexual Wellness</option>
                  <option value="membership" className="bg-[#0d0d1a]">Membership</option>
                  <option value="other" className="bg-[#0d0d1a]">Other</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs text-[#94A3B8] tracking-widest uppercase mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals or any questions you have..."
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                className="btn-teal w-full py-4 rounded-full font-sans text-sm tracking-widest uppercase mt-2"
              >
                Request Free Consultation
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
