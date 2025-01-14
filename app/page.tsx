import { Navbar } from '@/components/home/Navbar'
import { Hero } from '@/components/home/Hero'
import { Services } from '@/components/home/Services'
import { BrandCarousel } from '@/components/home/BrandCarousel'
import { FeaturedProducts } from '@/components/home/FeaturedProducts'
import { Experience } from '@/components/home/Experience'
import { Testimonials } from '@/components/home/Testimonials'
import { CallToAction } from '@/components/home/CallToAction'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <BrandCarousel />
      <FeaturedProducts />
      <Experience />
      <Services />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

