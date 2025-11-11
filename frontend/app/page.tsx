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
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] flex items-center justify-center bg-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=1920"
            alt="Açaí"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-6 animate-bounce">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">🍇</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 sm:mb-8 text-yellow-300 drop-shadow-lg">
            Açaí Mania
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-10 sm:mb-12 text-white/95 font-bold drop-shadow-lg">
            Sua paixão por açaí em cada tigela! 🎉
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 text-white/80 max-w-2xl mx-auto">
            Açaí tradicional, sorvetes e complementos com sabor único e irresistível!
          </p>
          <Link
            href="/cardapio"
            className="group inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-extrabold py-4 px-8 sm:py-5 sm:px-10 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Peça Agora</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
        
        <div className="absolute top-20 left-20 text-4xl animate-bounce">🥥</div>
        <div className="absolute top-40 right-32 text-5xl animate-bounce">🍌</div>
        <div className="absolute bottom-32 left-32 text-4xl animate-bounce">🥝</div>
        <div className="absolute bottom-20 right-20 text-5xl animate-bounce">🍓</div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 container mx-auto bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-purple-700">
            Produtos em Destaque
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={product._id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/cardapio"
            className="group inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-4 px-10 sm:px-12 rounded-full text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Ver Cardápio Completo</span>
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-green-700">
              Por que escolher Açaí Mania?
            </h2>
            <div className="w-32 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="text-5xl sm:text-6xl mb-6">🌿</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-green-700">100% Natural</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Açaí puro e natural, sem conservantes ou aditivos artificiais. Sabor autêntico em cada tigela!
                </p>
              </div>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
              <div className="text-5xl sm:text-6xl mb-6">🚀</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-yellow-600">Entrega Rápida</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Delivery rápido e eficiente, garantindo que seu açaí chegue geladinho e na hora certa!
                </p>
              </div>
            </div>
            <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 sm:col-span-2 lg:col-span-1">
              <div className="text-5xl sm:text-6xl mb-6">💜</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-pink-600">Sabor Único</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Sabor irresistível que vai te deixar com vontade de mais! Cada tigela é uma experiência única.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 container mx-auto bg-white">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-purple-700">
            O que nossos clientes dizem
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="text-yellow-400 text-2xl sm:text-3xl mb-6 flex gap-1">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed italic">
              Melhor açaí da cidade! Sempre fresco e saboroso. Já virou minha mania! Recomendo muito!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
                <div>
                  <p className="font-extrabold text-purple-700">Maria Silva</p>
                  <p className="text-sm text-gray-500">Cliente VIP</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="text-yellow-400 text-2xl sm:text-3xl mb-6 flex gap-1">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed italic">
              Entrega super rápida e o produto chegou geladinho. Perfeito! Já pedi 3 vezes esta semana!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                J
              </div>
                <div>
                  <p className="font-extrabold text-yellow-700">João Santos</p>
                  <p className="text-sm text-gray-500">Cliente Fiel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 sm:col-span-2 lg:col-span-1">
            <div className="text-yellow-400 text-2xl sm:text-3xl mb-6 flex gap-1">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed italic">
              Açaí Mania virou minha paixão! Sabor autêntico e qualidade incrível. Adorei!
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
                <div>
                  <p className="font-extrabold text-pink-700">Ana Costa</p>
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
