import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Services from '@/components/services'
import SignatureTreatments from '@/components/signature-treatments'
import BeforeAfter from '@/components/before-after'
import Stats from '@/components/stats'
import Membership from '@/components/membership'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials'
import Locations from '@/components/locations'
import Specials from '@/components/specials'
import Booking from '@/components/booking'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-[#080810] text-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Services />
      <SignatureTreatments />
      <BeforeAfter />
      <Stats />
      <Membership />
      <Team />
      <Testimonials />
      <Locations />
      <Specials />
      <Booking />
      <Footer />
    </main>
  )
}
