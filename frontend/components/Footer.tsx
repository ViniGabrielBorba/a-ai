import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl animate-pulse">🍇</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-green-300 to-yellow-300 bg-clip-text text-transparent">
                Açaí Mania
              </h3>
            </div>
            <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
              Sua paixão por açaí em cada tigela! Açaí tradicional, sorvetes e complementos com sabor único.
            </p>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold mb-5 text-yellow-300">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base sm:text-lg text-purple-100 hover:text-yellow-300 transition-all duration-300 hover:translate-x-2 inline-block font-semibold">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/cardapio" className="text-base sm:text-lg text-purple-100 hover:text-yellow-300 transition-all duration-300 hover:translate-x-2 inline-block font-semibold">
                  → Cardápio
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-base sm:text-lg text-purple-100 hover:text-yellow-300 transition-all duration-300 hover:translate-x-2 inline-block font-semibold">
                  → Sobre Nós
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-extrabold mb-5 text-yellow-300">Contato</h4>
            <ul className="space-y-3 text-base sm:text-lg text-purple-100 mb-6">
              <li className="flex items-center gap-2">
                <span className="text-2xl">📞</span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span>contato@acaimania.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span>Belém, Pará</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-green-500 rounded-full flex items-center justify-center text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-xl"
                aria-label="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-8 text-center">
          <p className="text-purple-200 text-sm sm:text-base">
            &copy; {new Date().getFullYear()} <span className="font-bold text-yellow-300">Açaí Mania</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

