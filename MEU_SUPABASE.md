# 🎯 Configuração do Seu Supabase

## ✅ Sua URL do Projeto

**URL:** `https://bfxlarmvnmcrjsrsbqnq.supabase.co`

## 📋 Passo a Passo Rápido

### 1️⃣ Obter as Chaves

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie:
   - **Project URL**: `https://bfxlarmvnmcrjsrsbqnq.supabase.co` ✅
   - **anon public**: Chave longa (começa com `eyJ...`)
   - **service_role**: Chave privada (opcional)

### 2️⃣ Criar arquivo `.env` no backend

Crie `backend/.env`:

```env
PORT=3001
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=cole_aqui_sua_chave_anon
SUPABASE_SERVICE_ROLE_KEY=cole_aqui_sua_chave_service_role
JWT_SECRET=altere_este_secret_para_algo_seguro
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token_pagseguro
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

### 3️⃣ Executar Schema SQL

1. No painel Supabase → **SQL Editor**
2. Clique em **New query**
3. Cole o conteúdo de `backend/src/database/schema.sql`
4. Clique em **Run**

### 4️⃣ Desabilitar RLS (Desenvolvimento)

No SQL Editor, execute:

```sql
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE admins DISABLE ROW LEVEL SECURITY;
```

### 5️⃣ Instalar e Testar

```bash
# Instalar dependências
cd backend
npm install

# Criar admin
npm run seed:admin

# Testar
npm run dev
```

Acesse: `http://localhost:3001/api/health`

---

**Pronto!** 🚀

