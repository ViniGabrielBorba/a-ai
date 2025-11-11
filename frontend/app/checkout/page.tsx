'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { CartContext } from '@/contexts/CartContext'
import { useToast } from '@/contexts/ToastContext'
import axios from 'axios'
import { QRCodeSVG } from 'qrcode.react'

export default function CheckoutPage() {
  const { cart, getTotal, clearCart } = useContext(CartContext)
  const { showSuccess, showError, showInfo } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit-card' | 'cash'>('pix')
  const [qrCode, setQrCode] = useState<string>('')
  const [paymentId, setPaymentId] = useState<string>('')
  const [orderCreated, setOrderCreated] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')
  const [orderItems, setOrderItems] = useState<typeof cart>([])
  const [orderTotal, setOrderTotal] = useState(0)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    street: '',
    neighborhood: '',
    zipCode: '',
    deliveryType: 'delivery' as 'delivery' | 'pickup',
    observations: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    cardCpf: ''
  })

  if (cart.length === 0 && !orderCreated) {
    router.push('/carrinho')
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Criar pedido
      const fullAddress = formData.deliveryType === 'delivery' 
        ? `${formData.street}, ${formData.neighborhood}, CEP: ${formData.zipCode}`.trim()
        : undefined

      const orderData = {
        customer: {
          name: formData.name,
          phone: formData.phone,
          address: fullAddress,
          deliveryType: formData.deliveryType
        },
        items: cart.map(item => ({
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size
        })),
        total: getTotal(),
        paymentMethod,
        observations: formData.observations
      }

      const orderResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        orderData
      )

      const order = orderResponse.data
      setOrderNumber(order.orderNumber)
      setOrderItems([...cart])
      setOrderTotal(getTotal())
      setOrderCreated(true)

      // Processar pagamento
      if (paymentMethod === 'pix') {
        try {
          const pixResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/payments/pagseguro/pix`,
            {
              orderId: order.id || order._id,
              amount: getTotal(),
              description: `Pedido ${order.orderNumber} - Açaí Mania`,
              customer: {
                name: formData.name,
                email: `${formData.phone}@temp.com`,
                tax_id: '12345678909' // CPF padrão para sandbox
              }
            }
          )
          
          if (pixResponse.data.qrCode) {
            setQrCode(pixResponse.data.qrCode)
            setPaymentId(pixResponse.data.paymentId)
          } else {
            throw new Error('QR Code não retornado')
          }
        } catch (pixError: any) {
          console.error('Erro ao gerar Pix:', pixError)
          console.error('Detalhes do erro:', pixError.response?.data)
          
          // Se falhar, ainda cria o pedido mas sem QR Code
          const errorMessage = pixError.response?.data?.message || pixError.message || 'Erro desconhecido'
          showError(`Erro ao gerar QR Code Pix. Pedido criado! Entre em contato pelo WhatsApp se necessário.`)
          showInfo(`Detalhes: ${errorMessage}`, 8000)
          setLoading(false)
          // Não limpa o carrinho nem redireciona, deixa o usuário tentar novamente
        }
      } else if (paymentMethod === 'credit-card') {
        try {
          const cardResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/payments/pagseguro/credit-card`,
            {
              orderId: order.id || order._id,
              amount: getTotal(),
              cardData: {
                number: formData.cardNumber.replace(/\s/g, ''),
                expMonth: formData.cardExpiry.split('/')[0],
                expYear: formData.cardExpiry.split('/')[1],
                cvv: formData.cardCvv,
                holderName: formData.cardName
              },
              customerData: {
                name: formData.name,
                email: `${formData.phone}@temp.com`,
                cpf: formData.cardCpf.replace(/\D/g, '')
              }
            }
          )
          if (cardResponse.data.paymentStatus === 'approved') {
            showSuccess('Pagamento aprovado! Seu pedido será processado. 🎉')
            clearCart()
            setTimeout(() => {
              router.push('/pedido-confirmado')
            }, 1500)
          } else {
            showInfo('Pagamento pendente. Aguardando confirmação. ⏳')
          }
        } catch (cardError: any) {
          console.error('Erro ao processar cartão:', cardError)
          showError('Erro ao processar pagamento. Pedido criado, mas pagamento pendente.')
          showInfo('Entre em contato pelo WhatsApp para mais informações.', 8000)
          clearCart()
          setTimeout(() => {
            router.push('/pedido-confirmado')
          }, 2000)
        }
      } else if (paymentMethod === 'cash') {
        // Pagamento em dinheiro - apenas confirmar pedido
        clearCart()
        // Não precisa redirecionar aqui, o estado orderCreated já está true
      }
    } catch (error: any) {
      console.error('Erro ao processar pedido:', error)
      showError('Erro ao processar pedido. Tente novamente. 😔')
      setLoading(false)
    }
  }

  const sendWhatsAppMessage = () => {
    const items = orderItems.length > 0 ? orderItems : cart
    const total = orderTotal > 0 ? orderTotal : getTotal()
    const message = `Olá! Gostaria de confirmar meu pedido ${orderNumber}.\n\nProdutos:\n${items.map(item => `${item.quantity}x ${item.name} - R$ ${item.price.toFixed(2)}`).join('\n')}\n\nTotal: R$ ${total.toFixed(2)}\n\nForma de pagamento: ${paymentMethod === 'pix' ? 'Pix' : paymentMethod === 'credit-card' ? 'Cartão de Crédito' : 'Dinheiro'}\n\n${formData.observations ? `Observações: ${formData.observations}` : ''}`
    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (orderCreated && paymentMethod === 'pix' && qrCode) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-4xl font-bold text-primary-800 mb-4">
              Pedido Criado com Sucesso!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Número do pedido: <strong>{orderNumber}</strong>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Escaneie o QR Code abaixo para pagar com Pix:
            </p>
            <div className="bg-white p-6 rounded-lg inline-block mb-6 border-2 border-gray-200">
              <QRCodeSVG value={qrCode} size={200} />
            </div>
            <p className="text-gray-600 mb-4">
              Ou copie o código Pix:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-6 relative">
              <code className="text-sm break-all block pr-12">{qrCode}</code>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(qrCode)
                  showSuccess('Código Pix copiado!')
                }}
                className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs font-semibold transition"
                title="Copiar código"
              >
                Copiar
              </button>
            </div>
            <div className="mb-6">
              <button
                onClick={() => {
                  // Tentar abrir o app do banco com o QR Code
                  const pixUrl = `pix://${qrCode}`
                  window.location.href = pixUrl
                  setTimeout(() => {
                    // Se não abrir, mostrar instruções
                    showInfo('Se o app não abrir, copie o código Pix acima e cole no app do seu banco')
                  }, 1000)
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 mb-2"
              >
                Abrir no App do Banco
              </button>
            </div>
            <div className="flex gap-4 justify-center">
              <button
                onClick={sendWhatsAppMessage}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Enviar via WhatsApp
              </button>
              <button
                onClick={() => {
                  clearCart()
                  router.push('/')
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Voltar para Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (orderCreated && (paymentMethod === 'cash' || (paymentMethod === 'credit-card' && !qrCode))) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-4xl font-bold text-primary-800 mb-4">
              Pedido Confirmado!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Número do pedido: <strong>{orderNumber}</strong>
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Seu pedido será preparado e você será notificado quando estiver pronto!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={sendWhatsAppMessage}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Enviar via WhatsApp
              </button>
              <button
                onClick={() => {
                  clearCart()
                  router.push('/')
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Voltar para Home
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-4">
            <span className="text-5xl sm:text-6xl">🛒</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
            Finalizar Pedido
          </h1>
          <div className="w-32 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-800">Informações do Cliente</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome completo *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <input
                type="tel"
                placeholder="Telefone (com DDD) *"
                required
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')
                  const formatted = value.length <= 11 
                    ? value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3').replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
                    : formData.phone
                  setFormData({ ...formData, phone: formatted || value })
                }}
                maxLength={15}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Tipo de entrega:</label>
                <div className="flex gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="delivery"
                      checked={formData.deliveryType === 'delivery'}
                      onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value as 'delivery' | 'pickup' })}
                      className="mr-2"
                    />
                    <span>Delivery</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="pickup"
                      checked={formData.deliveryType === 'pickup'}
                      onChange={(e) => setFormData({ ...formData, deliveryType: e.target.value as 'delivery' | 'pickup' })}
                      className="mr-2"
                    />
                    <span>Retirada</span>
                  </label>
                </div>
              </div>
              {formData.deliveryType === 'delivery' && (
                <div className="space-y-3 border-t pt-4">
                  <input
                    type="text"
                    placeholder="Rua/Avenida *"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Bairro *"
                      required
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                    <input
                      type="text"
                      placeholder="CEP *"
                      required
                      value={formData.zipCode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        const formatted = value.length <= 8 
                          ? value.replace(/(\d{5})(\d{3})/, '$1-$2')
                          : formData.zipCode
                        setFormData({ ...formData, zipCode: formatted || value })
                      }}
                      maxLength={9}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                    />
                  </div>
                </div>
              )}
              <textarea
                placeholder="Observações (opcional)"
                value={formData.observations}
                onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                rows={3}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-800">Forma de Pagamento</h2>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="pix"
                  checked={paymentMethod === 'pix'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'pix' | 'credit-card' | 'cash')}
                  className="mr-2"
                />
                Pix (QR Code)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="credit-card"
                  checked={paymentMethod === 'credit-card'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'pix' | 'credit-card' | 'cash')}
                  className="mr-2"
                />
                Cartão de Crédito
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'pix' | 'credit-card' | 'cash')}
                  className="mr-2"
                />
                Dinheiro
              </label>
            </div>

            {paymentMethod === 'credit-card' && (
              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  required
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <input
                  type="text"
                  placeholder="Nome no cartão"
                  required
                  value={formData.cardName}
                  onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/AA"
                    required
                    value={formData.cardExpiry}
                    onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    required
                    value={formData.cardCvv}
                    onChange={(e) => setFormData({ ...formData, cardCvv: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <input
                  type="text"
                  placeholder="CPF do titular"
                  required
                  value={formData.cardCpf}
                  onChange={(e) => setFormData({ ...formData, cardCpf: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-800">Resumo do Pedido</h2>
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={`${item.productId}-${item.size || 'default'}`} className="flex justify-between">
                  <span>{item.quantity}x {item.name}</span>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 flex justify-between text-2xl font-bold">
              <span>Total:</span>
              <span className="text-primary-600">R$ {getTotal().toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-lg"
          >
            {loading ? 'Processando...' : 'Confirmar Pedido'}
          </button>
        </form>
      </div>
    </div>
  )
}

