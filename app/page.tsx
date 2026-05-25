import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import WhyBetter from '@/components/WhyBetter'
import Pricing from '@/components/Pricing'
import Download from '@/components/Download'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <WhyBetter />
      <Pricing />
      <Download />
      <Footer />
    </main>
  )
}
