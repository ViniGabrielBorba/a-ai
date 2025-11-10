import Image from 'next/image'

export default function SobrePage() {
  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-7xl sm:text-8xl animate-bounce">🍇</span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Sobre Açaí Mania
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* História */}
        <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl shadow-2xl p-8 sm:p-10 mb-8 border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-purple-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                📖
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                Nossa História
              </h2>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl mb-4 leading-relaxed">
              O <span className="font-bold text-purple-700">Açaí Mania</span> nasceu da paixão pelo sabor autêntico e irresistível do açaí. Nossa missão é
              levar o verdadeiro sabor do açaí para toda a família, mantendo a qualidade
              e o frescor que só ingredientes naturais podem oferecer.
            </p>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Trabalhamos com ingredientes 100% naturais, sem conservantes ou aditivos artificiais.
              Cada tigela de açaí é preparada com cuidado e carinho, preservando todos os nutrientes
              e o sabor único dessa fruta incrível que virou nossa paixão!
            </p>
          </div>
        </div>

        {/* Missão */}
        <div className="bg-gradient-to-br from-white to-yellow-50/50 rounded-3xl shadow-2xl p-8 sm:p-10 mb-8 border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-yellow-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                🎯
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
                Nossa Missão
              </h2>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              Oferecer produtos de alta qualidade, com sabor único e irresistível, proporcionando
              uma experiência única aos nossos clientes através de um atendimento diferenciado e
              entrega rápida e eficiente. Queremos que você se apaixone por açaí tanto quanto nós!
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gradient-to-br from-white to-green-50/50 rounded-3xl shadow-2xl p-8 sm:p-10 mb-8 border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-green-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                💎
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                Nossos Valores
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Qualidade acima de tudo',
                'Sabor único e irresistível',
                'Atendimento personalizado',
                'Compromisso com a satisfação',
                'Ingredientes 100% naturais',
                'Sustentabilidade e respeito ao meio ambiente'
              ].map((value, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/70 rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-md">
                  <span className="text-2xl">✨</span>
                  <span className="text-gray-700 text-base sm:text-lg font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Localização */}
        <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-2xl p-8 sm:p-10 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                📍
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                Localização
              </h2>
            </div>
            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1234567890!2d-48.1234567!3d-1.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDcrMjQuNCJTIDQ4wrAwNycyNC42Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-700 text-lg sm:text-xl mt-6 text-center font-semibold">
              🎉 Venha nos visitar ou peça pelo delivery! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
