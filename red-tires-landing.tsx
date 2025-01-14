import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Search } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const products = [
  { name: 'Neumático Deportivo X1', price: '$199.99', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Neumático Todo Terreno Y2', price: '$249.99', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Neumático Ecológico Z3', price: '$179.99', image: '/placeholder.svg?height=200&width=200' },
]

const carBrands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Volkswagen', 'BMW', 'Mercedes-Benz']
const carTypes = ['Sedán', 'SUV', 'Hatchback', 'Pickup', 'Deportivo', 'Furgoneta']

export default function RedTiresLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedType, setSelectedType] = useState('')

  const handleSearch = () => {
    console.log('Búsqueda realizada:', { marca: selectedBrand, tipo: selectedType })
    // Aquí iría la lógica para buscar neumáticos basados en la marca y tipo seleccionados
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            RedTires
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-400 transition-colors">Inicio</a>
            <a href="#" className="hover:text-red-400 transition-colors">Productos</a>
            <a href="#" className="hover:text-red-400 transition-colors">Sobre Nosotros</a>
            <a href="#" className="hover:text-red-400 transition-colors">Contacto</a>
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-16 left-0 right-0 bg-black bg-opacity-95 z-40"
        >
          <nav className="flex flex-col items-center py-4">
            <a href="#" className="py-2 hover:text-red-400 transition-colors">Inicio</a>
            <a href="#" className="py-2 hover:text-red-400 transition-colors">Productos</a>
            <a href="#" className="py-2 hover:text-red-400 transition-colors">Sobre Nosotros</a>
            <a href="#" className="py-2 hover:text-red-400 transition-colors">Contacto</a>
          </nav>
        </motion.div>
      )}

      {/* Hero Section with Search */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-red-900 opacity-50"></div>
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fondo de neumáticos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
          >
            Encuentra los Neumáticos Perfectos para Tu Auto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Selecciona tu marca y tipo de auto para comenzar
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Select onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Marca de auto" />
              </SelectTrigger>
              <SelectContent>
                {carBrands.map((brand) => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedType}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Tipo de auto" />
              </SelectTrigger>
              <SelectContent>
                {carTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              onClick={handleSearch}
              className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
            >
              <Search className="mr-2 h-4 w-4" /> Buscar Neumáticos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-b from-black to-red-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            Nuestros Productos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-red-400 font-bold">{product.price}</p>
                  <Button 
                    className="mt-4 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
                  >
                    Comprar Ahora
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-red-400">RedTires</h4>
              <p className="text-gray-400">Innovación y calidad en cada kilómetro.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-red-400">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Productos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-red-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 text-red-400">Contáctanos</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="w-5 h-5 mr-2 text-red-400" /> +1 234 567 890</li>
                <li className="flex items-center"><Mail className="w-5 h-5 mr-2 text-red-400" /> info@redtires.com</li>
                <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-red-400" /> 123 Red Street, Cityville</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 RedTires. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

