'use client'

import Link from 'next/link'
import { useContext, useState } from 'react'
import { CartContext } from '@/contexts/CartContext'

export default function Navbar() {
  const { cart } = useContext(CartContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b-4 border-purple-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <span className="relative text-3xl sm:text-4xl animate-bounce">🍇</span>
            </div>
            <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-white via-yellow-100 to-green-100 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
              Açaí Mania
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/"
              className="text-white/90 hover:text-white font-bold text-sm lg:text-base px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/cardapio"
              className="text-white/90 hover:text-white font-bold text-sm lg:text-base px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg relative group"
            >
              Cardápio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/sobre"
              className="text-white/90 hover:text-white font-bold text-sm lg:text-base px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg relative group"
            >
              Sobre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/carrinho"
              className="relative text-white/90 hover:text-white font-bold text-sm lg:text-base px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
            >
              <span className="text-xl">🛒</span>
              <span className="hidden lg:inline">Carrinho</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-extrabold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-lg border-2 border-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top bg-gradient-to-b from-purple-800/50 to-purple-900/50 rounded-xl mt-4 p-4 backdrop-blur-md border border-white/20">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-bold hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Home
            </Link>
            <Link
              href="/cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-bold hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Cardápio
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-bold hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Sobre
            </Link>
            <Link
              href="/carrinho"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-bold hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg relative"
            >
              🛒 Carrinho
              {cartItemsCount > 0 && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-extrabold rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

