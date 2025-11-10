# ⚡ Início Rápido - Açaí do Pará

## 🚀 Começar em 5 minutos

### 1. Instalar dependências
```bash
npm run install:all
```

### 2. Configurar variáveis de ambiente

#### Backend (`backend/.env`)
```env
PORT=3001
MONGODB_URI=sua_string_de_conexao_mongodb
JWT_SECRET=seu_secret_jwt_qualquer
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token (opcional para testes)
PAGSEGURO_EMAIL=seu_email (opcional para testes)
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

#### Frontend (`frontend/.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### 3. Criar usuário admin
```bash
cd backend
npm run seed:admin
```

### 4. Executar projeto
```bash
npm run dev
```

Acesse:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- Admin: http://localhost:3000/admin

## 📝 Próximos passos

1. Configure o MongoDB Atlas (veja SETUP.md)
2. Configure o PagSeguro para pagamentos (opcional)
3. Adicione produtos no painel admin
4. Personalize as cores e imagens
5. Faça deploy (Vercel + Railway)

## 🔑 Credenciais padrão do admin

- Email: `admin@acaidopara.com`
- Senha: `admin123`

**⚠️ IMPORTANTE**: Altere a senha antes de fazer deploy!

## 🆘 Problemas?

Consulte o arquivo SETUP.md para instruções detalhadas.

