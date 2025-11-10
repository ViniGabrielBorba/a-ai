# 🔐 Configurar Variáveis de Ambiente no Cyclic.sh

## 📋 Variáveis de Ambiente Necessárias

Copie e cole estas variáveis no painel do Cyclic.sh:

### Variáveis Obrigatórias:

```env
PORT=3001
NODE_ENV=production
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w
JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

### Variáveis do PagSeguro (Substitua pelos seus valores):

```env
PAGSEGURO_TOKEN=seu_token_pagseguro_aqui
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
```

**⚠️ IMPORTANTE:** 
- Substitua `seu_token_pagseguro_aqui` pelo seu token real do PagSeguro
- Substitua `seu_email_pagseguro@email.com` pelo seu email do PagSeguro
- Se estiver em produção, mude `PAGSEGURO_ENV` para `production`

## 🎯 Como Adicionar no Cyclic.sh

1. **Acesse o painel do Cyclic.sh**
2. **Vá em "Environment Variables"** (ou "Config" → "Environment Variables")
3. **Clique em "Add Variable"** (ou "+ Add")
4. **Adicione cada variável uma por uma:**
   - Nome: `PORT`
   - Valor: `3001`
   - Clique em "Add" ou "Save"
5. **Repita para todas as variáveis**

## 📝 Lista Completa (Copiar e Colar):

```
PORT=3001
NODE_ENV=production
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w
JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token_pagseguro_aqui
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

## ✅ Verificação

Após adicionar todas as variáveis:

1. **Verifique se todas estão listadas**
2. **Clique em "Deploy"** ou "Save"
3. **Aguarde o deploy**
4. **Teste o health check:** `https://acai-mania-backend.cyclic.app/api/health`

## 🆘 Problemas Comuns

### Variável não está sendo usada
- Verifique se o nome está exatamente igual (case-sensitive)
- Verifique se não há espaços antes ou depois
- Reinicie a aplicação após adicionar variáveis

### Erro de conexão com Supabase
- Verifique se `SUPABASE_URL` está correto
- Verifique se `SUPABASE_ANON_KEY` está correto
- Verifique se o Supabase está ativo

### Erro de autenticação
- Verifique se `JWT_SECRET` está configurado
- Verifique se `ADMIN_EMAIL` e `ADMIN_PASSWORD` estão corretos

---

**Após configurar as variáveis, o deploy deve funcionar!** ✅

