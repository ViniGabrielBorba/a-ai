# 📋 Guia de Configuração - Açaí do Pará

## Pré-requisitos

- Node.js 18+ instalado
- MongoDB Atlas (conta gratuita)
- Conta PagSeguro (para pagamentos)
- Git

## Passo a Passo

### 1. Instalação das Dependências

```bash
npm run install:all
```

### 2. Configuração do Supabase

1. Acesse [Supabase](https://supabase.com)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Aguarde o projeto ser criado (pode levar alguns minutos)
5. Vá em Settings → API
6. Copie a URL do projeto e a chave `anon` (public)
7. Vá em SQL Editor e execute o arquivo `backend/src/database/schema.sql` para criar as tabelas

### 3. Configuração do Backend

1. Crie o arquivo `.env` na pasta `backend/`:

```env
PORT=3001
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua_chave_anon_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui (opcional)
JWT_SECRET=seu_jwt_secret_super_seguro_aqui_altere_este_valor
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token_pagseguro
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

**Onde encontrar as chaves do Supabase:**
- Acesse seu projeto no Supabase
- Vá em Settings → API
- `SUPABASE_URL`: Project URL
- `SUPABASE_ANON_KEY`: anon public key
- `SUPABASE_SERVICE_ROLE_KEY`: service_role key (opcional, para operações administrativas)

2. Execute o schema SQL no Supabase:
   - Acesse SQL Editor no painel do Supabase
   - Copie o conteúdo de `backend/src/database/schema.sql`
   - Cole e execute no SQL Editor

3. Crie o usuário admin:

```bash
cd backend
npm run seed:admin
```

### 4. Configuração do Frontend

1. Crie o arquivo `.env.local` na pasta `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Substitua `5511999999999` pelo seu número do WhatsApp (formato: código do país + DDD + número, sem espaços ou caracteres especiais).

### 6. Configuração do PagSeguro

1. Acesse [PagSeguro Developers](https://dev.pagseguro.uol.com.br/)
2. Crie uma conta de desenvolvedor
3. Gere um token de autenticação
4. Use o ambiente sandbox para testes
5. Adicione o token e email no `.env` do backend

**Nota**: A integração com PagSeguro requer configuração adicional. Para produção, você precisará:
- Verificar a documentação oficial da API do PagSeguro
- Ajustar os endpoints conforme necessário
- Configurar webhooks para notificações de pagamento

### 7. Executando o Projeto

#### Desenvolvimento

```bash
npm run dev
```

Isso iniciará:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

#### Produção

```bash
# Build do backend
cd backend
npm run build

# Build do frontend
cd ../frontend
npm run build

# Iniciar backend
cd ../backend
npm start

# Iniciar frontend (em outro terminal)
cd frontend
npm start
```

## 🚀 Deploy

### Frontend (Vercel)

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Na pasta `frontend/`, execute:
```bash
vercel
```

3. Configure as variáveis de ambiente na dashboard da Vercel:
   - `NEXT_PUBLIC_API_URL`: URL da sua API em produção
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: Seu número do WhatsApp

### Backend (Railway)

1. Crie uma conta no [Railway](https://railway.app/)
2. Conecte seu repositório
3. Configure as variáveis de ambiente:
   - `PORT`: 3001 (ou a porta que a Railway fornecer)
   - `MONGODB_URI`: Sua string de conexão do MongoDB
   - `JWT_SECRET`: Seu JWT secret
   - `FRONTEND_URL`: URL do seu frontend
   - `PAGSEGURO_TOKEN`: Token do PagSeguro
   - `PAGSEGURO_EMAIL`: Email do PagSeguro
   - `PAGSEGURO_ENV`: production ou sandbox
   - `ADMIN_EMAIL`: Email do admin
   - `ADMIN_PASSWORD`: Senha do admin

4. A Railway fará o build e deploy automaticamente

### Banco de Dados (Supabase)

O Supabase já está configurado. Certifique-se de:
- Ter executado o schema SQL no SQL Editor
- Configurar as variáveis de ambiente corretas
- Verificar as políticas de segurança (RLS) se necessário

## 🔧 Troubleshooting

### Erro de conexão com Supabase

- Verifique se SUPABASE_URL e SUPABASE_ANON_KEY estão corretos
- Confirme que as tabelas foram criadas (execute o schema.sql)
- Verifique se o projeto está ativo no Supabase
- Teste a conexão no painel do Supabase

### Erro de CORS

- Certifique-se de que `FRONTEND_URL` no backend está correto
- Verifique se o frontend está usando a URL correta da API

### Erro no PagSeguro

- Verifique se o token está correto
- Confirme que está usando o ambiente correto (sandbox/production)
- Consulte a documentação da API do PagSeguro

### Problemas com imagens

- As imagens estão usando URLs do Unsplash como exemplo
- Substitua pelas URLs das suas próprias imagens
- Ou configure um serviço de armazenamento de imagens (Cloudinary, AWS S3, etc.)

## 📝 Notas Importantes

1. **Segurança**: Nunca commite arquivos `.env` no repositório
2. **PagSeguro**: A integração atual é básica. Para produção, implemente:
   - Webhooks para notificações
   - Tratamento de erros mais robusto
   - Validação de dados do cartão no frontend
3. **Imagens**: Configure um CDN ou serviço de armazenamento para as imagens dos produtos
4. **Admin**: Altere a senha padrão do admin antes de fazer deploy

## 🆘 Suporte

Para problemas ou dúvidas, consulte a documentação ou abra uma issue no repositório.

