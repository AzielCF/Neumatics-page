import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductPopupProps {
  product: Product
  onClose: () => void
}

export function ProductPopup({ product, onClose }: ProductPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-red-600 font-bold text-xl mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-between">
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Añadir al carrito
          </Button>
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">
            Más información
          </Button>
        </div>
      </div>
    </div>
  )
}

