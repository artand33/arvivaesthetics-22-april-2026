'use client'

const plans = [
  {
    name: 'Essential',
    price: '$149',
    period: '/mo',
    description: 'Perfect for maintaining your aesthetic wellness routine.',
    benefits: [
      '1 complimentary facial per month',
      '15% off all injectable treatments',
      '10% off laser services',
      'Priority scheduling',
      'Birthday month bonus treatment',
      'Exclusive member specials',
    ],
    cta: 'Join Essential',
    highlight: false,
  },
  {
    name: 'VIP',
    price: '$249',
    period: '/mo',
    description: 'The ultimate luxury aesthetic experience, elevated.',
    benefits: [
      '2 complimentary treatments per month',
      '25% off all injectable treatments',
      '20% off laser & body sculpting',
      'Dedicated patient coordinator',
      'VIP event invitations',
      'Complimentary annual skin assessment',
      'Free product samples monthly',
    ],
    cta: 'Join VIP',
    highlight: true,
  },
]

export default function Membership() {
  return (
    <section id="membership" className="py-24 px-6 bg-[#0d0d18]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Exclusive Access
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            The LUMIS Membership
          </h2>
          <p className="font-sans text-[#94A3B8] mt-4 max-w-xl mx-auto leading-relaxed">
            Unlock ongoing savings, priority access, and a dedicated aesthetic journey tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative glass rounded-3xl p-8 flex flex-col transition-all duration-500 ${
                plan.highlight
                  ? 'border border-[#00C9C8]/30 shadow-[0_0_40px_rgba(0,201,200,0.12)]'
                  : 'glass-hover'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="btn-teal px-5 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl text-white font-light mb-1">{plan.name}</h3>
                <p className="font-sans text-sm text-[#94A3B8]">{plan.description}</p>
              </div>

              <div className="flex items-end gap-1 mb-8">
                <span className="font-serif text-5xl text-[#00C9C8] font-light">{plan.price}</span>
                <span className="font-sans text-[#94A3B8] mb-2">{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-start gap-3 font-sans text-sm text-[#F8FAFC]">
                    <svg className="w-4 h-4 text-[#00C9C8] mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`w-full text-center py-3.5 rounded-full font-sans text-sm tracking-widest uppercase transition-all duration-300 ${
                  plan.highlight
                    ? 'btn-teal'
                    : 'border border-white/20 text-white hover:border-[#00C9C8] hover:text-[#00C9C8]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
