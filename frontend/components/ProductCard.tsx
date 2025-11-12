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
    <div className="group relative bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100 flex flex-col">
      
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-50">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://via.placeholder.com/500?text=Açaí'
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
          NOVO
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-1">
          {product.name || 'Produto sem nome'}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed font-light flex-1">
          {product.description || 'Sem descrição'}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              R$ {price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            Adicionar
          </button>
        </div>
      </div>
      
    </div>
  )
}

