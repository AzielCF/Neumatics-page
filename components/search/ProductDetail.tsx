'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { X, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  type: string;
  category: string;
  description: string;
  rating: number;
}

interface ProductDetailProps {
  product: Product | null; // Null indica que el producto está cargando
  onClose: () => void;
  addToCart: (product: Product, quantity?: number) => void;
}

export function ProductDetail({ product, onClose, addToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast()
  const handleAddToCart = () => {
    if (product) {
      toast({
        title: 'Añadido al carrito',
        description: `${quantity} ${product.name}(s) añadidos al carrito`,
        className: 'bg-green-500 text-black top-20 sm:top-1/2 md:right-20 md:transform md:-translate-x-1/2',
      })
      addToCart({ ...product }, quantity);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="flex bg-white rounded-lg p-8 max-w-4xl w-full max-h-screen min-h-[60vh] min-w-[80vw] overflow-y-auto relative  items-center justify-center">
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center sm:flex-row gap-8">
          {/* Imagen o Skeleton */}
          <div className="h-[30vh] w-[30vh] sm:h-[40vh] sm:w-[40vh] flex items-center">
            {product ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-[40vh] object-contain rounded-lg"
              />
            ) : (
              <Skeleton className="w-full h-[40vh] rounded-lg" />
            )}
          </div>

          {/* Detalles o Skeleton */}
          <div className="w-full md:w-1/2">
            {product ? (
              <>
                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                <p className="text-red-600 font-bold text-2xl mb-4">${product.price.toFixed(2)}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
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
              </>
            ) : (
              <>
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-4" />
                <Skeleton className="h-5 w-full mb-4" />
                <Skeleton className="h-4 w-1/3 mb-2" />
                <Skeleton className="h-4 w-1/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-10 w-full" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
