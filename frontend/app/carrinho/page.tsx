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
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl sm:text-6xl">🛒</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-purple-700">
            Seu Carrinho
          </h1>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16 sm:py-20 bg-white rounded-2xl shadow-lg border border-gray-200">
            <div className="text-7xl sm:text-8xl mb-6">🛒</div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2">Seu carrinho está vazio!</p>
            <p className="text-lg text-gray-500 mb-8">Que tal adicionar alguns produtos deliciosos?</p>
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
                className="bg-white rounded-xl shadow-lg p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-purple-700 mb-2">
                    {item.name}
                  </h3>
                  {item.size && (
                    <p className="text-sm sm:text-base text-purple-600 mb-2 font-semibold">Tamanho: {item.size}</p>
                  )}
                  <p className="text-xl sm:text-2xl font-extrabold text-green-600">
                    R$ {item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex items-center gap-3 bg-white rounded-lg p-2 shadow-md border border-gray-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        const newQuantity = Math.max(0, item.quantity - 1)
                        updateQuantity(item.productId, item.size || '', newQuantity)
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center shadow-sm"
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
                      className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center shadow-sm"
                      aria-label="Aumentar quantidade"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.size || '')}
                    className="bg-red-500 hover:bg-red-600 text-white font-extrabold py-2 px-5 rounded-lg transition-all duration-300 text-sm sm:text-base shadow-md"
                  >
                    🗑️ Remover
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 mt-8 border border-gray-200">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-700">Total:</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-purple-700">
                  R$ {getTotal().toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-8 rounded-lg text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
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

