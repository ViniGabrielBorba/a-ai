# 📂 Estrutura do Projeto - Açaí do Pará

## Visão Geral

```
acai-do-para/
├── frontend/                 # Aplicação Next.js
│   ├── app/                 # Páginas e rotas (App Router)
│   │   ├── page.tsx        # Home
│   │   ├── cardapio/       # Página do cardápio
│   │   ├── carrinho/       # Página do carrinho
│   │   ├── checkout/       # Página de checkout
│   │   ├── admin/          # Painel administrativo
│   │   ├── sobre/          # Página sobre nós
│   │   └── pedido-confirmado/ # Página de confirmação
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navbar.tsx      # Barra de navegação
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── ProductCard.tsx # Card de produto
│   │   └── WhatsAppButton.tsx # Botão do WhatsApp
│   ├── contexts/            # Contextos React
│   │   └── CartContext.tsx # Contexto do carrinho
│   ├── public/              # Arquivos estáticos
│   │   ├── manifest.json   # Manifest PWA
│   │   └── robots.txt      # SEO
│   └── package.json         # Dependências do frontend
│
├── backend/                 # API Express
│   ├── src/
│   │   ├── models/         # Modelos MongoDB
│   │   │   ├── Product.ts  # Modelo de produto
│   │   │   ├── Order.ts    # Modelo de pedido
│   │   │   └── Admin.ts    # Modelo de admin
│   │   ├── routes/         # Rotas da API
│   │   │   ├── products.ts # Rotas de produtos
│   │   │   ├── orders.ts   # Rotas de pedidos
│   │   │   ├── admin.ts    # Rotas de admin
│   │   │   └── payments.ts # Rotas de pagamento
│   │   ├── middleware/     # Middlewares
│   │   │   └── auth.ts     # Autenticação JWT
│   │   ├── scripts/        # Scripts utilitários
│   │   │   └── seedAdmin.ts # Criar admin inicial
│   │   └── server.ts       # Servidor Express
│   └── package.json         # Dependências do backend
│
└── package.json             # Scripts do projeto raiz
```

## 🔑 Arquivos Importantes

### Frontend

#### `app/layout.tsx`
- Layout principal da aplicação
- Configuração de metadata e SEO
- Providers globais (CartContext)

#### `app/page.tsx`
- Página inicial
- Banner hero
- Produtos em destaque
- Benefícios e depoimentos

#### `app/cardapio/page.tsx`
- Listagem de produtos
- Filtros por categoria
- Integração com API

#### `app/carrinho/page.tsx`
- Gerenciamento do carrinho
- Atualização de quantidades
- Remoção de itens

#### `app/checkout/page.tsx`
- Formulário de checkout
- Integração com PagSeguro
- Geração de QR Code Pix
- Processamento de pagamento

#### `app/admin/page.tsx`
- Login de admin
- CRUD de produtos
- Gerenciamento de pedidos
- Atualização de status

#### `contexts/CartContext.tsx`
- Gerenciamento de estado do carrinho
- Persistência no localStorage
- Funções de adicionar/remover/atualizar

### Backend

#### `src/server.ts`
- Configuração do servidor Express
- Conexão com MongoDB
- Middlewares globais
- Rotas da API

#### `src/models/`
- **Product.ts**: Modelo de produto com categorias
- **Order.ts**: Modelo de pedido com status
- **Admin.ts**: Modelo de admin com autenticação

#### `src/routes/`
- **products.ts**: CRUD de produtos (GET público, POST/PUT/DELETE protegido)
- **orders.ts**: Criação e listagem de pedidos
- **admin.ts**: Autenticação e rotas protegidas
- **payments.ts**: Integração com PagSeguro (Pix e Cartão)

#### `src/middleware/auth.ts`
- Middleware de autenticação JWT
- Proteção de rotas administrativas

## 🗄️ Banco de Dados

### Collections

#### `products`
```typescript
{
  name: string
  description: string
  price: number
  category: 'acai-tradicional' | 'copos-tigelas' | 'sorvetes' | 'adicionais'
  image: string
  sizes?: Array<{ size: string; price: number }>
  available: boolean
  createdAt: Date
  updatedAt: Date
}
```

#### `orders`
```typescript
{
  orderNumber: string
  customer: {
    name: string
    phone: string
    address?: string
    deliveryType: 'delivery' | 'pickup'
  }
  items: Array<{
    productId: string
    name: string
    price: number
    quantity: number
    size?: string
  }>
  total: number
  paymentMethod: 'pix' | 'credit-card' | 'cash'
  paymentStatus: 'pending' | 'approved' | 'cancelled'
  orderStatus: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  observations?: string
  paymentId?: string
  qrCode?: string
  createdAt: Date
  updatedAt: Date
}
```

#### `admins`
```typescript
{
  email: string
  password: string (hashed)
}
```

## 🔌 API Endpoints

### Públicos

- `GET /api/products` - Listar produtos
- `GET /api/products/:id` - Buscar produto por ID
- `POST /api/orders` - Criar pedido
- `GET /api/orders/:id` - Buscar pedido por ID

### Protegidos (Requer JWT)

- `POST /api/admin/login` - Login de admin
- `POST /api/admin/products` - Criar produto
- `PUT /api/admin/products/:id` - Atualizar produto
- `DELETE /api/admin/products/:id` - Deletar produto
- `GET /api/orders` - Listar todos os pedidos
- `PATCH /api/orders/:id` - Atualizar status do pedido

### Pagamentos

- `POST /api/payments/pagseguro/pix` - Gerar QR Code Pix
- `POST /api/payments/pagseguro/credit-card` - Processar cartão
- `GET /api/payments/pagseguro/status/:paymentId` - Verificar status

## 🎨 Estilização

### TailwindCSS

- Cores principais: Roxo (primary) e Verde
- Font: Poppins
- Design responsivo (mobile-first)
- Tema moderno e tropical

### Componentes

- **Navbar**: Navegação fixa no topo
- **Footer**: Rodapé com links e redes sociais
- **ProductCard**: Card de produto reutilizável
- **WhatsAppButton**: Botão flutuante do WhatsApp

## 🔐 Segurança

- Autenticação JWT para admin
- Senhas hasheadas com bcrypt
- Validação de dados no backend
- CORS configurado
- Variáveis de ambiente para secrets

## 📱 Funcionalidades

### Cliente
- ✅ Navegação pelo cardápio
- ✅ Adicionar produtos ao carrinho
- ✅ Gerenciar carrinho
- ✅ Finalizar pedido
- ✅ Pagamento (Pix, Cartão, Dinheiro)
- ✅ Confirmação via WhatsApp

### Admin
- ✅ Login seguro
- ✅ CRUD de produtos
- ✅ Visualizar pedidos
- ✅ Atualizar status dos pedidos
- ✅ Gerenciar disponibilidade

## 🚀 Deploy

### Frontend (Vercel)
- Build automático
- Deploy a cada push
- Variáveis de ambiente configuráveis

### Backend (Railway)
- Build automático
- Deploy a cada push
- Variáveis de ambiente configuráveis

### Banco de Dados (MongoDB Atlas)
- Cluster gratuito disponível
- Backup automático
- Escalável

## 📝 Próximos Passos

1. Adicionar testes unitários
2. Implementar webhooks do PagSeguro
3. Adicionar notificações push
4. Implementar sistema de avaliações
5. Adicionar cupons de desconto
6. Implementar histórico de pedidos do cliente
7. Adicionar busca de produtos
8. Implementar favoritos

