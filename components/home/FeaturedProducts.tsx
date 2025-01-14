'use client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"



const products = [
  { name: 'Neumático Deportivo X1', price: '$199.99', image: 'https://th.bing.com/th/id/OIP.dwaz5yMc-H6185NC3ao6nAHaHa?rs=1&pid=ImgDetMain' },
  { name: 'Neumático Todo Terreno Y2', price: '$249.99', image: 'https://th.bing.com/th/id/OIP.PG1nMsNr6slwPiIePC4IOQHaJk?w=1586&h=2048&rs=1&pid=ImgDetMain' },
  { name: 'Neumático Ecológico Z3', price: '$179.99', image: 'https://70f402b497.cbaul-cdnwnd.com/c39a4002985a52e39700f8dc094d5ba7/200000032-2909d2a0b4/neu_web_Falken_ZE914.jpg?ph=70f402b497' },
]

export function FeaturedProducts() {
  const router = useRouter()
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
                  <img src={product.image} alt={product.name} className="w-full h-52 object-cover mb-4 rounded" />
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-red-600 font-bold mb-4">{product.price}</p>
                  <Button onClick={() => { router.push(`/search-results?product=${product.name}`)}} className="w-full bg-red-600 hover:bg-red-700 text-white">
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

