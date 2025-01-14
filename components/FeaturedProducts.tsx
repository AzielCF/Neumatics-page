'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  { name: 'Neumático Deportivo X1', price: '$199.99', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Neumático Todo Terreno Y2', price: '$249.99', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Neumático Ecológico Z3', price: '$179.99', image: '/placeholder.svg?height=200&width=200' },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Neumáticos Destacados para Tu Vehículo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-red-600 font-bold mb-4">{product.price}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

