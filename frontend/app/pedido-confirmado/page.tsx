import Link from 'next/link'

export default function PedidoConfirmadoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-10 sm:p-12 max-w-2xl text-center border border-gray-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
          Pedido Confirmado!
        </h1>
        <p className="text-xl text-gray-700 mb-4 font-semibold">
          Seu pedido foi recebido com sucesso
        </p>
        <p className="text-lg text-gray-600 mb-10 font-light leading-relaxed">
          Estamos preparando seu pedido com muito carinho. Você receberá uma notificação quando estiver pronto.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span>Voltar para Home</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

