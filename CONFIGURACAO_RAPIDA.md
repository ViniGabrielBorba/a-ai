# ⚡ Configuração Rápida - Supabase

## ✅ Seu Projeto Supabase

**URL do Projeto:** `https://bfxlarmvnmcrjsrsbqnq.supabase.co`

## 🚀 Passos para Configurar

### 1. Obter as Chaves de API

1. Acesse o painel do Supabase: https://supabase.com/dashboard
2. Selecione seu projeto
3. Vá em **Settings** → **API**
4. Você verá:
   - **Project URL**: `https://bfxlarmvnmcrjsrsbqnq.supabase.co` ✅
   - **anon public**: Copie esta chave (é longa, começa com `eyJ...`)
   - **service_role**: Copie esta chave também (opcional, mas recomendado)

### 2. Configurar Backend (.env)

Crie o arquivo `backend/.env` com:

```env
PORT=3001
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=cole_a_chave_anon_aqui
SUPABASE_SERVICE_ROLE_KEY=cole_a_chave_service_role_aqui
JWT_SECRET=seu_jwt_secret_super_seguro_aqui_altere_este_valor
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token_pagseguro
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

### 3. Criar as Tabelas

1. No painel do Supabase, vá em **SQL Editor**
2. Clique em **New query**
3. Abra o arquivo `backend/src/database/schema.sql` do projeto
4. Copie TODO o conteúdo do arquivo
5. Cole no SQL Editor
6. Clique em **Run** (ou pressione Ctrl+Enter)
7. Você deve ver: "Success. No rows returned"

### 4. Verificar Tabelas Criadas

1. No painel, vá em **Table Editor**
2. Você deve ver 3 tabelas:
   - ✅ `products`
   - ✅ `orders`
   - ✅ `admins`

### 5. Desabilitar RLS (Row Level Security) - Para Desenvolvimento

No SQL Editor, execute:

```sql
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE admins DISABLE ROW LEVEL SECURITY;
```

**Nota:** Para produção, configure políticas adequadas. Para desenvolvimento, desabilitar RLS facilita.

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

Isso criará um admin com:
- Email: `admin@acaidopara.com`
- Senha: `admin123`

### 8. Testar Conexão

```bash
cd backend
npm run dev
```

Acesse: `http://localhost:3001/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "API está funcionando!",
  "database": "Supabase conectado"
}
```

## ✅ Checklist

- [ ] Chaves copiadas do painel Supabase
- [ ] Arquivo `.env` criado no backend
- [ ] Schema SQL executado no SQL Editor
- [ ] Tabelas visíveis no Table Editor
- [ ] RLS desabilitado (ou políticas configuradas)
- [ ] Dependências instaladas
- [ ] Admin criado
- [ ] Conexão testada

## 🔍 Onde Encontrar as Chaves

1. Acesse: https://supabase.com/dashboard
2. Selecione seu projeto
3. **Settings** → **API**
4. Copie:
   - **Project URL** → `SUPABASE_URL`
   - **anon public** → `SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY`

## 🚨 Problemas Comuns

### Erro: "relation does not exist"
- Execute o schema.sql novamente
- Verifique se todas as tabelas foram criadas

### Erro: "permission denied"
- Desabilite RLS (veja passo 5)
- Ou configure políticas adequadas

### Erro: "invalid API key"
- Verifique se copiou a chave completa
- Confirme que está usando `SUPABASE_ANON_KEY`

## 📝 Próximos Passos

Após configurar:
1. Execute `npm run dev` no backend
2. Execute `npm run dev` no frontend
3. Acesse http://localhost:3000
4. Teste criar produtos no painel admin

---

**Pronto!** Seu Supabase está configurado! 🎉

