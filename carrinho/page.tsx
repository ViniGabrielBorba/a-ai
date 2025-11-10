'use client'

import { useContext } from 'react'
import Link from 'next/link'
import { CartContext } from '@/contexts/CartContext'
import { useRouter } from 'next/navigation'

export default function CarrinhoPage() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useContext(CartContext)
  const router = useRouter()

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Seu carrinho está vazio!')
      return
    }
    router.push('/checkout')
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl sm:text-6xl">🛒</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Seu Carrinho
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-xl border-2 border-purple-100">
            <div className="text-7xl sm:text-8xl mb-6 animate-bounce">🛒</div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">Seu carrinho está vazio!</p>
            <p className="text-lg text-gray-500 mb-8">Que tal adicionar alguns produtos deliciosos?</p>
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-extrabold py-4 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transform"
            >
              <span>Ver Cardápio</span>
              <span>→</span>
            </Link>
          </div>
        ) : (
          <div className="space-y-5 sm:space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.productId}-${item.size || 'default'}`}
                className="bg-gradient-to-br from-white to-purple-50/30 rounded-2xl shadow-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 hover:scale-[1.01]"
              >
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-2">
                    {item.name}
                  </h3>
                  {item.size && (
                    <p className="text-sm sm:text-base text-purple-600 mb-2 font-semibold">Tamanho: {item.size}</p>
                  )}
                  <p className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex items-center gap-3 bg-white rounded-full p-2 shadow-lg border-2 border-purple-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        const newQuantity = Math.max(0, item.quantity - 1)
                        updateQuantity(item.productId, item.size || '', newQuantity)
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center active:scale-95 shadow-md"
                      aria-label="Diminuir quantidade"
                      type="button"
                    >
                      -
                    </button>
                    <span className="text-xl sm:text-2xl font-extrabold w-10 text-center min-w-[2.5rem] text-purple-700">
                      {item.quantity}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        updateQuantity(item.productId, item.size || '', item.quantity + 1)
                      }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-extrabold w-10 h-10 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center active:scale-95 shadow-md"
                      aria-label="Aumentar quantidade"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.size || '')}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-extrabold py-2 px-5 rounded-full transition-all duration-300 text-sm sm:text-base hover:scale-105 transform shadow-lg"
                  >
                    🗑️ Remover
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-2xl p-8 sm:p-10 mt-8 border-2 border-purple-200">
              <div className="flex justify-between items-center mb-8 pb-6 border-b-2 border-purple-200">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-700">Total:</span>
                <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  R$ {getTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-green-500 via-green-400 to-yellow-400 hover:from-green-600 hover:via-green-500 hover:to-yellow-500 text-white font-extrabold py-4 px-8 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 hover:scale-105 transform flex items-center justify-center gap-3"
              >
                <span>Finalizar Pedido</span>
                <span className="text-2xl">→</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

