'use client'

import { useState, useEffect } from 'react'
import ProductCard from '@/components/ProductCard'
import axios from 'axios'

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

export default function CardapioPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'acai-tradicional', name: 'Açaí Tradicional' },
    { id: 'copos-tigelas', name: 'Copos e Tigelas' },
    { id: 'sorvetes', name: 'Sorvetes' },
    { id: 'adicionais', name: 'Adicionais' }
  ]

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory))
    }
  }, [selectedCategory, products])

  const fetchProducts = async () => {
    try {
      setError('')
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      const response = await axios.get(`${apiUrl}/products`)
      
      if (response.data && Array.isArray(response.data)) {
        setProducts(response.data)
        setFilteredProducts(response.data)
      } else {
        setError('Formato de dados inválido')
      }
      setLoading(false)
    } catch (error: any) {
      console.error('Erro ao buscar produtos:', error)
      setError('Erro ao carregar produtos. Verifique se o servidor está rodando.')
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">🍇</div>
          <div className="text-2xl text-primary-600">Carregando produtos...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Erro ao carregar produtos</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchProducts}
            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-6">
            <span className="text-6xl sm:text-7xl">🍇</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-purple-700">
            Cardápio Açaí Mania
          </h1>
          <div className="w-32 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Escolha seu açaí favorito e monte sua tigela perfeita!
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-extrabold text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border-2 border-purple-200 hover:border-purple-400 shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 sm:py-16">
            <div className="text-6xl mb-4">🍇</div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-4">
              {products.length === 0 
                ? 'Nenhum produto cadastrado ainda.' 
                : 'Nenhum produto encontrado nesta categoria.'}
            </p>
            {products.length === 0 && (
              <p className="text-gray-400 text-sm sm:text-base">
                Acesse o painel admin para adicionar produtos.
              </p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

