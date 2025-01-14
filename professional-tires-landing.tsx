import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Search, CheckCircle, TrendingUp, Users, Star } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  { name: 'Neumático Deportivo X1', price: '$199.99', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Neumático Todo Terreno Y2', price: '$249.99', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Neumático Ecológico Z3', price: '$179.99', image: '/placeholder.svg?height=200&width=200' },
]

const carBrands = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Volkswagen', 'BMW', 'Mercedes-Benz']
const carTypes = ['Sedán', 'SUV', 'Hatchback', 'Pickup', 'Deportivo', 'Furgoneta']

const tireBrands = [
  { name: 'Michelin', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Goodyear', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Bridgestone', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Continental', logo: '/placeholder.svg?height=100&width=200' },
  { name: 'Pirelli', logo: '/placeholder.svg?height=100&width=200' },
]

export default function ProfessionalTiresLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0)

  const handleSearch = () => {
    console.log('Búsqueda realizada:', { marca: selectedBrand, tipo: selectedType })
    // Aquí iría la lógica para buscar neumáticos basados en la marca y tipo seleccionados
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % tireBrands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">
            ProfessionalTires
          </h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Inicio</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Productos</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Servicios</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Sobre Nosotros</a>
            <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">Contacto</a>
          </nav>
          <button
            className="md:hidden text-gray-700"
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
          className="fixed top-16 left-0 right-0 bg-white z-40 shadow-md"
        >
          <nav className="flex flex-col items-center py-4">
            <a href="#" className="py-2 text-gray-700 hover:text-red-600 transition-colors">Inicio</a>
            <a href="#" className="py-2 text-gray-700 hover:text-red-600 transition-colors">Productos</a>
            <a href="#" className="py-2 text-gray-700 hover:text-red-600 transition-colors">Servicios</a>
            <a href="#" className="py-2 text-gray-700 hover:text-red-600 transition-colors">Sobre Nosotros</a>
            <a href="#" className="py-2 text-gray-700 hover:text-red-600 transition-colors">Contacto</a>
          </nav>
        </motion.div>
      )}

      {/* Hero Section with Search */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Expertos en Neumáticos para su Negocio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Soluciones de calidad para flotas y vehículos comerciales
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  <Select onValueChange={setSelectedBrand}>
                    <SelectTrigger className="w-full md:w-[200px]">
                      <SelectValue placeholder="Marca de vehículo" />
                    </SelectTrigger>
                    <SelectContent>
                      {carBrands.map((brand) => (
                        <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full md:w-[200px]">
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
                  >
                    <Search className="mr-2 h-4 w-4" /> Buscar Neumáticos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Brand Carousel */}
      <section className="py-12 bg-white">
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

      {/* Experience Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              30 Años de Experiencia en el Sector
            </h3>
            <p className="text-xl text-gray-600">
              Brindando soluciones de neumáticos de alta calidad para empresas y flotas desde 1993
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Calidad Garantizada</h4>
                <p className="text-gray-600">Todos nuestros productos pasan por rigurosos controles de calidad</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Innovación Constante</h4>
                <p className="text-gray-600">Siempre a la vanguardia en tecnología de neumáticos</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-2">Servicio Personalizado</h4>
                <p className="text-gray-600">Atención especializada para cada cliente y sus necesidades</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Productos Destacados para Flotas
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
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            Lo que Dicen Nuestros Clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "ProfessionalTires ha sido fundamental para mantener nuestra flota en óptimas condiciones. Su servicio y productos son excepcionales."
                </p>
                <p className="font-semibold">Juan Pérez, Gerente de Logística</p>
                <p className="text-sm text-gray-500">Transportes Rápidos S.A.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent classNameCard>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  "La calidad de los neumáticos y el servicio de ProfessionalTires han superado nuestras expectativas. Han mejorado significativamente la eficiencia de nuestra flota."
                </p>
                <p className="font-semibold">María Rodríguez, Directora de Operaciones</p>
                <p className="text-sm text-gray-500">Distribuidora Nacional Ltda.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            ¿Listo para Optimizar su Flota?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para una consulta gratuita y descubra cómo podemos mejorar el rendimiento y la seguridad de sus vehículos.
          </p>
          <Button className="bg-white text-red-600 hover:bg-gray-100">
            Solicitar Consulta
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ProfessionalTires</h4>
              <p className="text-gray-400">Soluciones de neumáticos de calidad para empresas y flotas desde 1993.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Productos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contáctanos</h4>
              <ul className="space-y-2">
                <li className="flex items-center"><Phone className="w-5 h-5 mr-2 text-red-600" /> +1 234 567 890</li>
                <li className="flex items-center"><Mail className="w-5 h-5 mr-2 text-red-600" /> info@professionaltires.com</li>
                <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-red-600" /> 123 Tire Street, Business City</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 ProfessionalTires. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

