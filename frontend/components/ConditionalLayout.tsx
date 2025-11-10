'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin') || false

  // Para rotas admin, o layout admin já renderiza a navbar própria
  // Então não renderizamos Navbar, Footer e WhatsAppButton aqui
  if (isAdminRoute) {
    return <>{children}</>
  }

  // Para rotas normais, renderizar com Navbar, Footer e WhatsAppButton
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

