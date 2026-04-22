'use client'

const team = [
  {
    name: 'Dr. Elena Marquez',
    title: 'Medical Director, MD',
    credentials: 'Board-Certified Dermatologist',
    specialty: 'Laser & Resurfacing',
    initials: 'EM',
  },
  {
    name: 'Dr. James Holloway',
    title: 'Aesthetic Physician, MD',
    credentials: 'ABEM Certified',
    specialty: 'Injectables',
    initials: 'JH',
  },
  {
    name: 'Dr. Sofia Chen',
    title: 'Cosmetic Surgeon, MD',
    credentials: 'Board-Certified Plastic Surgery',
    specialty: 'Surgical Treatments',
    initials: 'SC',
  },
  {
    name: 'Priya Nair, ARNP',
    title: 'Nurse Practitioner',
    credentials: 'MSN, Aesthetic Specialist',
    specialty: 'IV Therapy & PRP',
    initials: 'PN',
  },
]

// Subtle variations for the avatar backgrounds
const avatarColors = [
  { bg: 'rgba(0,201,200,0.12)', border: 'rgba(0,201,200,0.3)' },
  { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.3)' },
  { bg: 'rgba(0,201,200,0.08)', border: 'rgba(0,201,200,0.2)' },
  { bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)' },
]

export default function Team() {
  return (
    <section className="py-24 px-6 bg-[#0d0d18]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#00C9C8] font-sans text-xs tracking-[0.2em] uppercase font-medium">
            Our Specialists
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-white mt-3 font-light">
            Meet the Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-500"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5 border"
                style={{
                  background: avatarColors[i].bg,
                  borderColor: avatarColors[i].border,
                }}
              >
                <span className="font-serif text-2xl text-[#00C9C8] font-medium">
                  {member.initials}
                </span>
              </div>

              <h3 className="font-serif text-xl text-white font-light mb-1">{member.name}</h3>
              <p className="font-sans text-xs text-[#94A3B8] mb-1">{member.title}</p>
              <p className="font-sans text-xs text-[#94A3B8] mb-4">{member.credentials}</p>

              <span className="glass px-3 py-1 rounded-full font-sans text-xs text-[#00C9C8] border border-[#00C9C8]/20 tracking-wide">
                {member.specialty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
