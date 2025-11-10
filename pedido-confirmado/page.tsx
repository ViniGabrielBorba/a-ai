import Link from 'next/link'

export default function PedidoConfirmadoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-2xl p-10 sm:p-12 max-w-2xl text-center border-2 border-purple-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 opacity-50"></div>
        <div className="relative z-10">
          <div className="text-8xl sm:text-9xl mb-6 animate-bounce">🎉</div>
          <div className="text-7xl mb-4">✅</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Pedido Confirmado!
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-semibold">
            Seu pedido foi recebido com sucesso! 🎊
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Estamos preparando seu pedido com muito carinho. Você receberá uma notificação quando estiver pronto!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-extrabold py-4 px-10 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transform"
          >
            <span>Voltar para Home</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

