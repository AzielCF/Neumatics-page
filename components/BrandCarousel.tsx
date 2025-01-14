'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tireBrands = [
  { name: 'Michelin', logo: 'https://static.wixstatic.com/media/ef130a_5acf708e852c4136882ad2bc117b3d75~mv2.png/v1/fill/w_156,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-toyota-negro-c877db0e.png' },
  { name: 'Goodyear', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Bridgestone', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Continental', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Pirelli', logo: '/placeholder.svg?height=100&width=200' },
]

export function BrandCarousel() {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % tireBrands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Trabajamos con las Mejores Marcas
        </h3>
        <div className="flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBrandIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <img 
                src={tireBrands[currentBrandIndex].logo} 
                alt={tireBrands[currentBrandIndex].name} 
                className="h-20 object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

