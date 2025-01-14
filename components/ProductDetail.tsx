import { useState } from 'react'
import { X, ShoppingCart, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/router'

interface Product {
  id: number
  name: string
  price: number
  image: string
  brand: string
  type: string
  category: string
  description: string
  rating: number
}

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const handleAddToCart = () => {
    // Implementar lógica de añadir al carrito
    console.log(`Added ${quantity} ${product.name}(s) to cart`)
  }

  const handleClose = () => {
    router.push('/search-results', undefined, { shallow: true })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-red-600 font-bold text-2xl mb-4">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
              ))}
              <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-gray-600 mb-2">Marca: {product.brand}</p>
            <p className="text-gray-600 mb-2">Categoría: {product.type}</p>
            <p className="text-gray-600 mb-4">Tipo: {product.category}</p>
            <div className="flex items-center mb-4">
              <Button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
              >
                -
              </Button>
              <span className="px-4 py-1 bg-gray-100">{quantity}</span>
              <Button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
              >
                +
              </Button>
            </div>
            <Button 
              onClick={handleAddToCart}
              className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

