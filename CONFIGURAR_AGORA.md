# ⚡ Configure Agora - Passo a Passo

## ✅ Você já tem:
- ✅ URL do Supabase: `https://bfxlarmvnmcrjsrsbqnq.supabase.co`
- ✅ Chave anon: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## 🚀 Próximos Passos:

### 1. Criar arquivo `.env` no backend

Copie o arquivo `backend/.env.exemplo` para `backend/.env`:

**Windows (PowerShell):**
```powershell
cd backend
Copy-Item .env.exemplo .env
```

**Linux/Mac:**
```bash
cd backend
cp .env.exemplo .env
```

Ou crie manualmente o arquivo `backend/.env` com:

```env
PORT=3001
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
SUPABASE_SERVICE_ROLE_KEY=
JWT_SECRET=altere_este_secret_para_algo_seguro_123456
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=
PAGSEGURO_EMAIL=
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

**⚠️ IMPORTANTE:** Altere o `JWT_SECRET` para algo seguro (pode ser qualquer string aleatória).

### 2. Obter chave service_role (Opcional, mas recomendado)

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Copie a chave **service_role** (é privada, não compartilhe!)
5. Cole no `.env` em `SUPABASE_SERVICE_ROLE_KEY=`

**Nota:** Se não quiser usar agora, deixe vazio. O projeto funciona só com a chave anon.

### 3. Criar as Tabelas no Supabase

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **SQL Editor** (menu lateral)
4. Clique em **New query**
5. Abra o arquivo `backend/src/database/schema.sql` do projeto
6. **Copie TODO o conteúdo** do arquivo
7. **Cole no SQL Editor**
8. Clique em **Run** (ou Ctrl+Enter)
9. Deve aparecer: "Success. No rows returned"

### 4. Desabilitar RLS (Para Desenvolvimento)

No mesmo SQL Editor, execute:

```sql
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE admins DISABLE ROW LEVEL SECURITY;
```

Clique em **Run** novamente.

### 5. Verificar Tabelas Criadas

1. No painel, vá em **Table Editor** (menu lateral)
2. Você deve ver 3 tabelas:
   - ✅ `products`
   - ✅ `orders`
   - ✅ `admins`

### 6. Instalar Dependências

```bash
cd backend
npm install
```

### 7. Criar Usuário Admin

```bash
cd backend
npm run seed:admin
```

Isso criará um admin:
- Email: `admin@acaidopara.com`
- Senha: `admin123`

### 8. Testar Conexão

```bash
cd backend
npm run dev
```

Acesse no navegador: `http://localhost:3001/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "API está funcionando!",
  "database": "Supabase conectado"
}
```

## ✅ Checklist

- [ ] Arquivo `.env` criado no backend
- [ ] JWT_SECRET alterado para algo seguro
- [ ] Schema SQL executado no Supabase
- [ ] RLS desabilitado
- [ ] Tabelas visíveis no Table Editor
- [ ] Dependências instaladas (`npm install`)
- [ ] Admin criado (`npm run seed:admin`)
- [ ] Conexão testada (`npm run dev`)

## 🎯 Próximo Passo

Após tudo configurado, execute o frontend:

```bash
cd frontend
npm install
npm run dev
```

Acesse: `http://localhost:3000`

---

**Pronto para começar!** 🚀

