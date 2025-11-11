import Link from 'next/link'

export default function PedidoConfirmadoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-10 sm:p-12 max-w-2xl text-center border border-gray-200">
        <div className="text-8xl sm:text-9xl mb-6">🎉</div>
        <div className="text-7xl mb-4">✅</div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-purple-700">
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
            className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Voltar para Home</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

