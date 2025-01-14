'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tireBrands = [
  { name: 'Toyota', logo: 'https://static.wixstatic.com/media/ef130a_5acf708e852c4136882ad2bc117b3d75~mv2.png/v1/fill/w_156,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo-toyota-negro-c877db0e.png' },
  { name: 'Chevrolet', logo: 'https://static.wixstatic.com/media/ef130a_97e86f306ad44d27b32697c01dc237a9~mv2.png/v1/fill/w_188,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chevrolet_simple_logo.png' },
  { name: 'Kia', logo: 'https://static.wixstatic.com/media/38bdc9_bf3ab594c4e5456392d95b8cc83e421b~mv2.png/v1/crop/x_168,y_148,w_530,h_270/fill/w_193,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kia-motors-old8672_logowik_com-PhotoRoom_png-PhotoRoom.png' },
  { name: 'Nissan', logo: 'https://static.wixstatic.com/media/ef130a_7340cd8cd10a4e25973e62ede1bf9db3~mv2.png/v1/fill/w_176,h_147,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nissan_2020_logo_svg.png' },
  { name: 'Hyunday', logo: 'https://static.wixstatic.com/media/38bdc9_3e5af6df5d004e64acc19c036fe411d4~mv2.png/v1/crop/x_135,y_245,w_1003,h_490/fill/w_184,h_88,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hyundai-brand-logo-car-symbol-black-design-south-korean-automobile-illustration-free-vecto.png' },
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

