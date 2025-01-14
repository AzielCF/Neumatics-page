'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const carBrands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Volkswagen', 'BMW', 'Mercedes-Benz']
const carTypes = ['Sedán', 'SUV', 'Hatchback', 'Pickup', 'Deportivo', 'Furgoneta']

export function Hero() {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const router = useRouter()

  const handleSearch = () => {
    if (selectedBrand && selectedType) {
      router.push(`/products?brand=${selectedBrand}&type=${selectedType}`)
    }
  }

  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-800 to-black opacity-80"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://video.wixstatic.com/video/c837a6_92774e1a278046cf94437a8275f664a5/1080p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-red-500/30 via-red-500/10 to-transparent"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Encuentra los Mejores Neumáticos para Tu Auto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Calidad, seguridad y rendimiento para tu vehículo
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="bg-black/30 backdrop-blur-md border-red-500/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <Select onValueChange={setSelectedBrand}>
                  <SelectTrigger className="w-full md:w-[200px] bg-transparent text-white border-red-500">
                    <SelectValue placeholder="Marca de vehículo" />
                  </SelectTrigger>
                  <SelectContent>
                    {carBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full md:w-[200px] bg-transparent text-white border-red-500">
                    <SelectValue placeholder="Tipo de vehículo" />
                  </SelectTrigger>
                  <SelectContent>
                    {carTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  onClick={handleSearch}
                  className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white"
                  disabled={!selectedBrand || !selectedType}
                >
                  <Search className="mr-2 h-4 w-4" /> Buscar Neumáticos
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

