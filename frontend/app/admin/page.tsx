'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function AdminPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')

  useEffect(() => {
    const storedToken = localStorage.getItem('adminToken')
    if (storedToken) {
      setToken(storedToken)
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      console.log('Tentando fazer login em:', `${apiUrl}/admin/login`)
      
      const response = await axios.post(`${apiUrl}/admin/login`, {
        email,
        password
      })

      const { token: authToken } = response.data
      if (!authToken) {
        throw new Error('Token não recebido do servidor')
      }
      
      setToken(authToken)
      setIsAuthenticated(true)
      localStorage.setItem('adminToken', authToken)
    } catch (error: any) {
      console.error('Erro completo no login:', error)
      
      if (error.response) {
        // Erro com resposta do servidor
        setError(error.response?.data?.message || `Erro ${error.response.status}: ${error.response.statusText}`)
      } else if (error.request) {
        // Requisição feita mas sem resposta
        setError('Erro de conexão. Verifique se o servidor backend está rodando em http://localhost:3001')
      } else {
        // Erro ao configurar a requisição
        setError(error.message || 'Erro ao fazer login. Tente novamente.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    setToken('')
    setIsAuthenticated(false)
    setEmail('')
    setPassword('')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full border-2 border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full mb-4">
              <span className="text-4xl">⚙️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Painel Administrativo
            </h1>
            <p className="text-gray-600">Acesse o painel de controle</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p className="font-bold">⚠️ Erro:</p>
                <p>{error}</p>
                {error.includes('conexão') && (
                  <p className="mt-2 text-sm">
                    💡 Dica: Verifique se o backend está rodando na porta 3001
                  </p>
                )}
              </div>
            )}
            <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded text-sm">
              <p className="font-bold">ℹ️ Credenciais padrão:</p>
              <p>Email: admin@acaidopara.com</p>
              <p>Senha: admin123</p>
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <AdminDashboard token={token} onLogout={handleLogout} />
}

function AdminDashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
  const [products, setProducts] = useState<any[]>([])
  const [orders, setOrders] = useState<any[]>([])
  const [riders, setRiders] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'riders'>('orders')
  const [showProductForm, setShowProductForm] = useState(false)
  const [showRiderForm, setShowRiderForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<any>(null)
  const [editingRider, setEditingRider] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: 0,
    category: 'acai-tradicional',
    image: '',
    available: true
  })

  const [riderForm, setRiderForm] = useState({
    name: '',
    gender: 'masculino',
    birth_date: '',
    cpf: '',
    bike_plate: '',
    bike_color: '',
    bike_model: '',
    active: true
  })

  useEffect(() => {
    if (activeTab === 'products') {
      fetchProducts()
    } else if (activeTab === 'riders') {
      fetchRiders()
    } else {
      fetchOrders()
    }
  }, [activeTab, token])

  const fetchProducts = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      const response = await axios.get(`${apiUrl}/products`)
      setProducts(response.data)
    } catch (error) {
      console.error('Erro ao buscar produtos:', error)
      alert('Erro ao buscar produtos. Verifique se o servidor está rodando.')
    }
  }

  const fetchOrders = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      const response = await axios.get(`${apiUrl}/orders`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setOrders(response.data)
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error)
      alert('Erro ao buscar pedidos. Verifique se está autenticado e se o servidor está rodando.')
    }
  }

  const fetchRiders = async () => {
    try {
      if (!token) {
        alert('Token de autenticação não encontrado. Faça login novamente.')
        return
      }

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      console.log('Buscando entregadores de:', `${apiUrl}/delivery-riders`)
      
      const response = await axios.get(`${apiUrl}/delivery-riders`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      
      console.log('Entregadores recebidos:', response.data)
      setRiders(response.data || [])
    } catch (error: any) {
      console.error('Erro completo ao buscar entregadores:', error)
      
      if (error.response) {
        // Erro com resposta do servidor
        const status = error.response.status
        const message = error.response.data?.message || error.response.statusText
        
        if (status === 401 || status === 403) {
          alert('Sessão expirada. Faça login novamente.')
          // Redirecionar para login ou limpar token
          localStorage.removeItem('adminToken')
          window.location.reload()
        } else {
          alert(`Erro ao buscar entregadores: ${message} (Status: ${status})`)
        }
      } else if (error.request) {
        // Requisição feita mas sem resposta
        alert('Erro de conexão. Verifique se o servidor backend está rodando e se a URL está correta.')
        console.error('Detalhes da requisição:', error.request)
      } else {
        // Erro ao configurar a requisição
        alert(`Erro ao buscar entregadores: ${error.message}`)
      }
      
      // Definir array vazio para evitar erros na renderização
      setRiders([])
    }
  }

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      if (editingProduct) {
        await axios.put(
          `${apiUrl}/admin/products/${editingProduct._id}`,
          productForm,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      } else {
        await axios.post(
          `${apiUrl}/admin/products`,
          productForm,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      }
      setShowProductForm(false)
      setEditingProduct(null)
      setProductForm({
        name: '',
        description: '',
        price: 0,
        category: 'acai-tradicional',
        image: '',
        available: true
      })
      fetchProducts()
    } catch (error) {
      console.error('Erro ao salvar produto:', error)
      alert('Erro ao salvar produto')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) return

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      await axios.delete(`${apiUrl}/admin/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchProducts()
    } catch (error) {
      console.error('Erro ao deletar produto:', error)
      alert('Erro ao deletar produto')
    }
  }

  const handleEditProduct = (product: any) => {
    setEditingProduct(product)
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      available: product.available
    })
    setShowProductForm(true)
  }

  const handleUpdateOrderStatus = async (orderId: string, status: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      await axios.patch(
        `${apiUrl}/orders/${orderId}`,
        { orderStatus: status },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchOrders()
    } catch (error) {
      console.error('Erro ao atualizar pedido:', error)
      alert('Erro ao atualizar pedido')
    }
  }

  const handleRiderSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      if (editingRider) {
        await axios.put(
          `${apiUrl}/delivery-riders/${editingRider.id}`,
          riderForm,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      } else {
        await axios.post(
          `${apiUrl}/delivery-riders`,
          riderForm,
          { headers: { Authorization: `Bearer ${token}` } }
        )
      }
      setShowRiderForm(false)
      setEditingRider(null)
      setRiderForm({
        name: '',
        gender: 'masculino',
        birth_date: '',
        cpf: '',
        bike_plate: '',
        bike_color: '',
        bike_model: '',
        active: true
      })
      fetchRiders()
    } catch (error) {
      console.error('Erro ao salvar entregador:', error)
      alert('Erro ao salvar entregador')
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteRider = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este entregador?')) return

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'
      await axios.delete(`${apiUrl}/delivery-riders/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchRiders()
    } catch (error) {
      console.error('Erro ao deletar entregador:', error)
      alert('Erro ao deletar entregador')
    }
  }

  const handleEditRider = (rider: any) => {
    setEditingRider(rider)
    setRiderForm({
      name: rider.name,
      gender: rider.gender,
      birth_date: rider.birth_date,
      cpf: rider.cpf,
      bike_plate: rider.bike_plate,
      bike_color: rider.bike_color,
      bike_model: rider.bike_model,
      active: rider.active
    })
    setShowRiderForm(true)
  }

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-purple-600">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600 mt-1">Gerencie produtos e pedidos</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>🚪</span>
              <span>Sair</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex gap-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-3 px-6 font-bold text-lg transition-all duration-300 ${
                activeTab === 'orders' 
                  ? 'border-b-4 border-purple-600 text-purple-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📦 Pedidos
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`pb-3 px-6 font-bold text-lg transition-all duration-300 ${
                activeTab === 'products' 
                  ? 'border-b-4 border-purple-600 text-purple-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🍇 Produtos
            </button>
            <button
              onClick={() => setActiveTab('riders')}
              className={`pb-3 px-6 font-bold text-lg transition-all duration-300 ${
                activeTab === 'riders' 
                  ? 'border-b-4 border-purple-600 text-purple-600' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🏍️ Entregadores
            </button>
          </div>
        </div>

        {activeTab === 'orders' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary-800">Pedidos</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-lg">Pedido: {order.orderNumber}</p>
                      <p className="text-gray-600">Cliente: {order.customer.name}</p>
                      <p className="text-gray-600">Telefone: {order.customer.phone}</p>
                      <p className="text-gray-600">
                        Tipo: {order.customer.deliveryType === 'delivery' ? 'Delivery' : 'Retirada'}
                      </p>
                      {order.customer.address && (
                        <p className="text-gray-600">Endereço: {order.customer.address}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-primary-600">R$ {order.total.toFixed(2)}</p>
                      <p className="text-sm text-gray-600">
                        Status: <span className={`font-bold ${
                          order.orderStatus === 'pending' ? 'text-yellow-600' :
                          order.orderStatus === 'preparing' ? 'text-blue-600' :
                          order.orderStatus === 'ready' ? 'text-green-600' :
                          order.orderStatus === 'delivered' ? 'text-gray-600' : 'text-red-600'
                        }`}>
                          {order.orderStatus === 'pending' ? 'Pendente' :
                           order.orderStatus === 'preparing' ? 'Preparando' :
                           order.orderStatus === 'ready' ? 'Pronto' :
                           order.orderStatus === 'delivered' ? 'Entregue' : 'Cancelado'}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mb-2">
                    <p className="font-semibold">Itens:</p>
                    <ul className="list-disc list-inside">
                      {order.items.map((item: any, idx: number) => (
                        <li key={idx}>{item.quantity}x {item.name} - R$ {item.price.toFixed(2)}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <select
                      value={order.orderStatus}
                      onChange={(e) => handleUpdateOrderStatus(order._id, e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2"
                    >
                      <option value="pending">Pendente</option>
                      <option value="preparing">Preparando</option>
                      <option value="ready">Pronto</option>
                      <option value="delivered">Entregue</option>
                      <option value="cancelled">Cancelado</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-primary-800">Produtos</h2>
              <button
                onClick={() => {
                  setEditingProduct(null)
                  setProductForm({
                    name: '',
                    description: '',
                    price: 0,
                    category: 'acai-tradicional',
                    image: '',
                    available: true
                  })
                  setShowProductForm(true)
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Adicionar Produto
              </button>
            </div>

            {showProductForm && (
              <form onSubmit={handleProductSubmit} className="mb-6 p-4 border rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {editingProduct ? 'Editar Produto' : 'Novo Produto'}
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    required
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <textarea
                    placeholder="Descrição"
                    required
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                  <input
                    type="number"
                    placeholder="Preço"
                    required
                    step="0.01"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: parseFloat(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <select
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="acai-tradicional">Açaí Tradicional</option>
                    <option value="copos-tigelas">Copos e Tigelas</option>
                    <option value="sorvetes">Sorvetes</option>
                    <option value="adicionais">Adicionais</option>
                  </select>
                  <input
                    type="text"
                    placeholder="URL da imagem"
                    required
                    value={productForm.image}
                    onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={productForm.available}
                      onChange={(e) => setProductForm({ ...productForm, available: e.target.checked })}
                      className="mr-2"
                    />
                    Disponível
                  </label>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    {loading ? 'Salvando...' : 'Salvar'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProductForm(false)
                      setEditingProduct(null)
                    }}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product._id} className="border rounded-lg p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-2" />
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  <p className="font-bold text-primary-600">R$ {product.price.toFixed(2)}</p>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'riders' && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Entregadores</h2>
              <button
                onClick={() => {
                  setEditingRider(null)
                  setRiderForm({
                    name: '',
                    gender: 'masculino',
                    birth_date: '',
                    cpf: '',
                    bike_plate: '',
                    bike_color: '',
                    bike_model: '',
                    active: true
                  })
                  setShowRiderForm(true)
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Adicionar Entregador
              </button>
            </div>

            {showRiderForm && (
              <form onSubmit={handleRiderSubmit} className="mb-6 p-4 border rounded-lg bg-gray-50">
                <h3 className="text-xl font-bold mb-4">
                  {editingRider ? 'Editar Entregador' : 'Novo Entregador'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    required
                    value={riderForm.name}
                    onChange={(e) => setRiderForm({ ...riderForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <select
                    value={riderForm.gender}
                    onChange={(e) => setRiderForm({ ...riderForm, gender: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="outro">Outro</option>
                  </select>
                  <input
                    type="date"
                    placeholder="Data de nascimento"
                    required
                    value={riderForm.birth_date}
                    onChange={(e) => setRiderForm({ ...riderForm, birth_date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="CPF (apenas números)"
                    required
                    value={riderForm.cpf}
                    onChange={(e) => setRiderForm({ ...riderForm, cpf: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    maxLength={11}
                  />
                  <input
                    type="text"
                    placeholder="Placa da moto"
                    required
                    value={riderForm.bike_plate}
                    onChange={(e) => setRiderForm({ ...riderForm, bike_plate: e.target.value.toUpperCase() })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    maxLength={7}
                  />
                  <input
                    type="text"
                    placeholder="Cor da moto"
                    required
                    value={riderForm.bike_color}
                    onChange={(e) => setRiderForm({ ...riderForm, bike_color: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Modelo da moto"
                    required
                    value={riderForm.bike_model}
                    onChange={(e) => setRiderForm({ ...riderForm, bike_model: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <label className="flex items-center col-span-2">
                    <input
                      type="checkbox"
                      checked={riderForm.active}
                      onChange={(e) => setRiderForm({ ...riderForm, active: e.target.checked })}
                      className="mr-2"
                    />
                    Ativo
                  </label>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    {loading ? 'Salvando...' : 'Salvar'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowRiderForm(false)
                      setEditingRider(null)
                    }}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {riders.map((rider) => (
                <div key={rider.id} className="border rounded-lg p-4 bg-gradient-to-br from-white to-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{rider.name}</h3>
                      <p className="text-sm text-gray-600">CPF: {rider.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}</p>
                      <p className="text-sm text-gray-600">Sexo: {rider.gender}</p>
                      <p className="text-sm text-gray-600">Data de nascimento: {new Date(rider.birth_date).toLocaleDateString('pt-BR')}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${rider.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {rider.active ? 'Ativo' : 'Inativo'}
                    </span>
                  </div>
                  <div className="mt-3 p-3 bg-gray-100 rounded-lg">
                    <p className="text-sm font-semibold text-gray-700">Moto:</p>
                    <p className="text-sm text-gray-600">Placa: {rider.bike_plate}</p>
                    <p className="text-sm text-gray-600">Cor: {rider.bike_color}</p>
                    <p className="text-sm text-gray-600">Modelo: {rider.bike_model}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEditRider(rider)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300 flex-1"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteRider(rider.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300 flex-1"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

