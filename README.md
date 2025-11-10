# 🍇 Açaí do Pará - Sistema de Vendas Online

Sistema completo de vendas online especializado em açaí, sorvetes e complementos, com foco em delivery e retirada local.

## 🚀 Tecnologias

### Frontend
- **Next.js 14** com TypeScript
- **TailwindCSS** para estilização
- **React Context API** para gerenciamento de estado do carrinho

### Backend
- **Node.js** com Express
- **TypeScript**
- **Supabase** (PostgreSQL) como banco de dados
- **JWT** para autenticação
- **PagSeguro API** para pagamentos

## 📁 Estrutura do Projeto

```
.
├── frontend/          # Aplicação Next.js
│   ├── app/          # Páginas e rotas
│   ├── components/   # Componentes reutilizáveis
│   └── contexts/     # Contextos React
├── backend/          # API Express
│   ├── src/
│   │   ├── models/   # Modelos MongoDB
│   │   ├── routes/   # Rotas da API
│   │   ├── middleware/ # Middlewares
│   │   └── scripts/  # Scripts utilitários
└── package.json      # Scripts do projeto
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd acai-do-para
```

2. Instale as dependências:
```bash
npm run install:all
```

3. Configure as variáveis de ambiente:

### Backend (.env)
```env
PORT=3001
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_chave_anon_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui (opcional)
JWT_SECRET=seu_jwt_secret_super_seguro
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token_pagseguro
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

4. Execute o schema SQL no Supabase:
   - Acesse SQL Editor no painel do Supabase
   - Copie o conteúdo de `backend/src/database/schema.sql`
   - Cole e execute no SQL Editor

5. Crie o usuário admin:
```bash
cd backend
npm run seed:admin
```

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```

Isso iniciará:
- Frontend em `http://localhost:3000`
- Backend em `http://localhost:3001`

### Produção
```bash
npm start
```

## 📱 Funcionalidades

### Páginas Principais
- ✅ **Home**: Banner, produtos em destaque, benefícios e depoimentos
- ✅ **Cardápio**: Listagem de produtos com filtros por categoria
- ✅ **Carrinho**: Gerenciamento de itens do carrinho
- ✅ **Checkout**: Finalização de pedido com múltiplas formas de pagamento
- ✅ **Admin**: Painel administrativo para gerenciar produtos e pedidos
- ✅ **Sobre**: Informações sobre a empresa e localização

### Funcionalidades do Sistema
- ✅ Carrinho de compras com persistência local
- ✅ Sistema de pedidos completo
- ✅ Integração com PagSeguro (Pix e Cartão de Crédito)
- ✅ Autenticação JWT para admin
- ✅ CRUD completo de produtos
- ✅ Gerenciamento de status de pedidos
- ✅ Botão de WhatsApp fixo
- ✅ Design responsivo (mobile-first)
- ✅ SEO otimizado

## 🔐 Autenticação Admin

Para acessar o painel administrativo:
1. Acesse `/admin`
2. Use as credenciais configuradas no `.env`:
   - Email: `ADMIN_EMAIL`
   - Senha: `ADMIN_PASSWORD`

## 💳 Pagamentos

O sistema suporta três formas de pagamento:
1. **Pix**: Gera QR Code automático via PagSeguro
2. **Cartão de Crédito**: Processamento seguro via PagSeguro
3. **Dinheiro**: Para pagamento na entrega/retirada

## 📦 Deploy

### Frontend (Vercel)
1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Backend (Railway)
1. Conecte seu repositório à Railway
2. Configure as variáveis de ambiente
3. Deploy automático

### Banco de Dados (Supabase)
1. Crie uma conta no Supabase
2. Crie um novo projeto
3. Execute o schema SQL (`backend/src/database/schema.sql`) no SQL Editor
4. Configure as variáveis de ambiente no backend

## 🎨 Customização

### Cores
As cores podem ser personalizadas em `frontend/tailwind.config.ts`:
- Primary: Roxo (açaí)
- Green: Verde (folhas)

### Imagens
Substitua as URLs das imagens nos produtos por suas próprias imagens.

## 📝 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📞 Suporte

Para suporte, entre em contato através do WhatsApp ou email.

---

Desenvolvido com ❤️ para trazer o sabor da Amazônia até você!

