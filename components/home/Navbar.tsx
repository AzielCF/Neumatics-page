'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 left-auto w-full box-border z-50 transition-all duration-300 ${isScrolled ? 'bg-black/35 backdrop-blur-md' : 'bg-transparent'} h-20`}>
      <div className="container mx-auto px-8 h-full flex justify-between items-center">
        <a href='/' className="text-2xl font-bold text-white">
          ProfessionalTires
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="/products" className="cursor-pointer text-white hover:text-red-400 transition-colors">Productos</a>
          <a href="#" className="text-white hover:text-red-400 transition-colors">Servicios</a>
          <a href="#" className="text-white hover:text-red-400 transition-colors">Sobre Nosotros</a>
          <a href="#" className="text-white hover:text-red-400 transition-colors">Contacto</a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="md:hidden fixed top-20 left-0 right-0 bg-black bg-opacity-90 z-40"
          >
            <nav className="flex flex-col items-center py-4">
              <a href="/products" className="py-2 text-white hover:text-red-400 transition-colors">Productos</a>
              <a href="#" className="py-2 text-white hover:text-red-400 transition-colors">Servicios</a>
              <a href="#" className="py-2 text-white hover:text-red-400 transition-colors">Sobre Nosotros</a>
              <a href="#" className="py-2 text-white hover:text-red-400 transition-colors">Contacto</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

