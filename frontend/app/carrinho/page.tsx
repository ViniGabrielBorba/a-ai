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
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            Seu Carrinho
          </h1>
          <div className="w-20 h-0.5 bg-purple-600 mx-auto"></div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-md border border-gray-100">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-2xl font-semibold text-gray-900 mb-2">Seu carrinho está vazio</p>
            <p className="text-gray-600 mb-8 font-light">Que tal adicionar alguns produtos deliciosos?</p>
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Ver Cardápio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.productId}-${item.size || 'default'}`}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex-1 w-full sm:w-auto">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  {item.size && (
                    <p className="text-sm text-gray-600 mb-2 font-light">Tamanho: {item.size}</p>
                  )}
                  <p className="text-xl font-bold text-gray-900">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </p>
                </div>
                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                  <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-2 border border-gray-200">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        const newQuantity = Math.max(0, item.quantity - 1)
                        updateQuantity(item.productId, item.size || '', newQuantity)
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold w-9 h-9 rounded-lg transition-all duration-300 flex items-center justify-center"
                      aria-label="Diminuir quantidade"
                      type="button"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold w-8 text-center text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        updateQuantity(item.productId, item.size || '', item.quantity + 1)
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold w-9 h-9 rounded-lg transition-all duration-300 flex items-center justify-center"
                      aria-label="Aumentar quantidade"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId, item.size || '')}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm shadow-sm"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-lg shadow-md p-8 mt-6 border border-gray-100">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
                <span className="text-2xl font-bold text-gray-900">Total:</span>
                <span className="text-3xl font-bold text-purple-700">
                  R$ {getTotal().toFixed(2).replace('.', ',')}
                </span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Finalizar Pedido</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

