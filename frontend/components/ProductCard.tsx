'use client'

import { useContext } from 'react'
import Image from 'next/image'
import { CartContext } from '@/contexts/CartContext'

interface Product {
  _id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  available: boolean
  sizes?: Array<{ size: string; price: number }>
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    })
  }

  if (!product.available) {
    return null
  }

  // Validar se o produto tem dados necessários
  if (!product || !product._id || !product.name) {
    return null
  }

  // Garantir que price é um número
  const price = typeof product.price === 'number' ? product.price : parseFloat(String(product.price)) || 0

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-200">
      
      {/* Image Container */}
      <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-125 transition-transform duration-700"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://via.placeholder.com/500?text=Açaí'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-5xl">🍇</span>
          </div>
        )}
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
          NOVO
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 sm:p-6 relative z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-purple-700 line-clamp-1">
          {product.name || 'Produto sem nome'}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-5 line-clamp-2 leading-relaxed">
          {product.description || 'Sem descrição'}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-gray-200">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-green-600">
              R$ {price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-3 px-6 sm:px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-base sm:text-lg"
          >
            <span className="flex items-center gap-2">
              <span>Adicionar</span>
              <span>+</span>
            </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

