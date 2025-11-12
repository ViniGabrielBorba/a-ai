import Link from 'next/link'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  const featuredProducts = [
    {
      _id: '1',
      name: 'Açaí Tradicional 500ml',
      description: 'Açaí puro e gelado, perfeito para refrescar',
      price: 12.00,
      category: 'acai-tradicional',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500',
      available: true
    },
    {
      _id: '2',
      name: 'Tigela Completa',
      description: 'Açaí com granola, banana e leite condensado',
      price: 18.00,
      category: 'copos-tigelas',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f1f4b32e?w=500',
      available: true
    },
    {
      _id: '3',
      name: 'Sorvete de Açaí',
      description: 'Sorvete cremoso de açaí',
      price: 8.00,
      category: 'sorvetes',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500',
      available: true
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Profissional */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920"
            alt="Açaí"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-purple-800/70 to-indigo-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Açaí Mania
            </h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-white/95 font-light max-w-3xl mx-auto leading-relaxed">
            Sabor autêntico do Pará em cada tigela
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto font-light">
            Açaí tradicional, sorvetes e complementos com qualidade premium. Delivery rápido e sabor inigualável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/cardapio"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 min-w-[200px]"
            >
              Ver Cardápio
            </Link>
            <Link
              href="/cardapio"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-4 px-10 rounded-lg text-lg border-2 border-white/30 transition-all duration-300 min-w-[200px]"
            >
              Fazer Pedido
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
              Produtos em Destaque
            </h2>
            <div className="w-20 h-0.5 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Conheça nossos produtos mais populares, preparados com ingredientes selecionados
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/cardapio"
              className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Ver Cardápio Completo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
              Por que escolher Açaí Mania?
            </h2>
            <div className="w-20 h-0.5 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Qualidade, sabor e compromisso em cada produto
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="text-center p-10 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">100% Natural</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Açaí puro e natural, sem conservantes ou aditivos artificiais. Sabor autêntico em cada tigela.
              </p>
            </div>
            <div className="text-center p-10 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Entrega Rápida</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Delivery rápido e eficiente, garantindo que seu açaí chegue geladinho e na hora certa.
              </p>
            </div>
            <div className="text-center p-10 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sabor Único</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Sabor irresistível que vai te deixar com vontade de mais. Cada tigela é uma experiência única.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
              O que nossos clientes dizem
            </h2>
            <div className="w-20 h-0.5 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A satisfação dos nossos clientes é nossa maior recompensa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-base leading-relaxed italic font-light">
                "Melhor açaí da cidade! Sempre fresco e saboroso. Já virou minha mania! Recomendo muito!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  M
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-sm text-gray-500">Cliente VIP</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-base leading-relaxed italic font-light">
                "Entrega super rápida e o produto chegou geladinho. Perfeito! Já pedi 3 vezes esta semana!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  J
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João Santos</p>
                  <p className="text-sm text-gray-500">Cliente Fiel</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-base leading-relaxed italic font-light">
                "Açaí Mania virou minha paixão! Sabor autêntico e qualidade incrível. Adorei!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-500">Cliente Desde o Início</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
