'use client'

import Link from 'next/link'

export default function AdminNavbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-lg border-b-4 border-purple-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <span className="relative text-2xl">⚙️</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                Painel Administrativo
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-white/90 hover:text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">🏠</span>
              <span className="hidden sm:inline">Voltar ao Site</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

