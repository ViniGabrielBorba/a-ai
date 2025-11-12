'use client'

import Link from 'next/link'
import { useContext, useState } from 'react'
import { CartContext } from '@/contexts/CartContext'

export default function Navbar() {
  const { cart } = useContext(CartContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-purple-900 shadow-md sticky top-0 z-50 border-b border-purple-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-2xl sm:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              Açaí Mania
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white/90 hover:text-white font-semibold text-sm transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/cardapio"
              className="text-white/90 hover:text-white font-semibold text-sm transition-colors duration-300"
            >
              Cardápio
            </Link>
            <Link
              href="/sobre"
              className="text-white/90 hover:text-white font-semibold text-sm transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link
              href="/carrinho"
              className="relative text-white/90 hover:text-white font-semibold text-sm transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden lg:inline">Carrinho</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
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
          <div className="md:hidden pb-4 space-y-2 bg-purple-800 rounded-lg mt-4 p-4 border border-purple-700">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/cardapio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              Cardápio
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              Sobre
            </Link>
            <Link
              href="/carrinho"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors duration-300 relative"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Carrinho
              </span>
              {cartItemsCount > 0 && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-500 text-gray-900 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
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

