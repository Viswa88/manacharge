import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Mission } from '@/components/sections/mission'
import { Why } from '@/components/sections/why'
import { JoinTeam } from '@/components/sections/join-team'
import { Survey } from '@/components/sections/survey'
import { Impact } from '@/components/sections/impact'
import { Vision } from '@/components/sections/vision'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Why />
        <JoinTeam />
        <Survey />
        <Impact />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
