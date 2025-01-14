import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { BrandCarousel } from '@/components/BrandCarousel'
import { Experience } from '@/components/Experience'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { Testimonials } from '@/components/Testimonials'
import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <BrandCarousel />
      <Experience />
      <FeaturedProducts />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

