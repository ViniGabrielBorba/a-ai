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
    <div className="group relative bg-gradient-to-br from-white to-purple-50/30 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] border-2 border-transparent hover:border-purple-300">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-yellow-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-yellow-500/5 transition-all duration-500"></div>
      
      {/* Image Container */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
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
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200">
            <span className="text-7xl animate-pulse">🍇</span>
          </div>
        )}
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          NOVO
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 sm:p-6 relative z-10">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-2 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent line-clamp-1">
          {product.name || 'Produto sem nome'}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base mb-5 line-clamp-2 leading-relaxed">
          {product.description || 'Sem descrição'}
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-purple-100">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              R$ {price.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="group/btn w-full sm:w-auto bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-extrabold py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-110 transform text-base sm:text-lg relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>Adicionar</span>
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300">+</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
      </div>
    </div>
  )
}

