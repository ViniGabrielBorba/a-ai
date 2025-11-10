import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { ToastProvider } from '@/contexts/ToastContext'
import ConditionalLayout from '@/components/ConditionalLayout'

export const metadata: Metadata = {
  title: 'Açaí Mania - Sua paixão por açaí em cada tigela!',
  description: 'Açaí tradicional, sorvetes e complementos. Delivery e retirada. Sabor único e irresistível!',
  keywords: 'açaí, sorvete, delivery, açaí mania, tigela de açaí, açaí tradicional',
  authors: [{ name: 'Açaí Mania' }],
  openGraph: {
    title: 'Açaí Mania - Sua paixão por açaí em cada tigela!',
    description: 'Açaí tradicional, sorvetes e complementos. Delivery e retirada.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: '/manifest.json',
  themeColor: '#9333ea',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body>
        <CartProvider>
          <ToastProvider>
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  )
}

