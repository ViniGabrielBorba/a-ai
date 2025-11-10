# 🔐 Adicionar Variáveis de Ambiente no Render - Passo a Passo

## 📋 Como Adicionar Variáveis de Ambiente no Render

### 1️⃣ Acessar a Seção de Environment

1. No painel do Render, clique no seu serviço (ex: `a-ai-backend`)
2. No menu lateral esquerdo, clique em **"Environment"**
3. Você verá uma lista de variáveis de ambiente (pode estar vazia no início)

---

## 🔧 Adicionar Variáveis - Uma por Uma

### Variável 1: NODE_ENV

1. Clique no botão **"Add Environment Variable"** ou **"Add Variable"**
2. No campo **"Key"**, digite: `NODE_ENV`
3. No campo **"Value"**, digite: `production`
4. Clique em **"Save Changes"** ou **"Add"**

✅ **Pronto!** A primeira variável foi adicionada.

---

### Variável 2: PORT

1. Clique novamente em **"Add Environment Variable"**
2. **Key:** `PORT`
3. **Value:** `10000`
4. Clique em **"Save Changes"**

✅ **Pronto!** A segunda variável foi adicionada.

**💡 Dica:** O Render define automaticamente a porta, mas é bom ter essa variável como backup.

---

### Variável 3: SUPABASE_URL

1. Clique em **"Add Environment Variable"**
2. **Key:** `SUPABASE_URL`
3. **Value:** `https://bfxlarmvnmcrjsrsbqnq.supabase.co`
4. Clique em **"Save Changes"**

✅ **Pronto!** A terceira variável foi adicionada.

**💡 Dica:** Esta é a URL do seu projeto no Supabase. Você encontra ela em:
- Supabase Dashboard → Settings → API → Project URL

---

### Variável 4: SUPABASE_ANON_KEY

1. Clique em **"Add Environment Variable"**
2. **Key:** `SUPABASE_ANON_KEY`
3. **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM`
4. Clique em **"Save Changes"**

✅ **Pronto!** A quarta variável foi adicionada.

**💡 Dica:** Esta é a chave pública (anon) do Supabase. Você encontra ela em:
- Supabase Dashboard → Settings → API → anon public key

**⚠️ IMPORTANTE:** Esta chave é pública e pode ser exposta no frontend, mas ainda assim deve ser mantida segura.

---

### Variável 5: SUPABASE_SERVICE_ROLE_KEY

1. Clique em **"Add Environment Variable"**
2. **Key:** `SUPABASE_SERVICE_ROLE_KEY`
3. **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w`
4. Clique em **"Save Changes"**

✅ **Pronto!** A quinta variável foi adicionada.

**💡 Dica:** Esta é a chave de serviço (service_role) do Supabase. Você encontra ela em:
- Supabase Dashboard → Settings → API → service_role key

**⚠️ MUITO IMPORTANTE:** Esta chave é **SECRETA** e **NUNCA** deve ser exposta no frontend! Ela tem acesso total ao banco de dados.

---

### Variável 6: JWT_SECRET

1. Clique em **"Add Environment Variable"**
2. **Key:** `JWT_SECRET`
3. **Value:** `acai_do_para_jwt_secret_2024_altere_esta_senha`
4. Clique em **"Save Changes"**

✅ **Pronto!** A sexta variável foi adicionada.

**💡 Dica:** Esta é a chave secreta usada para assinar os tokens JWT. 
**⚠️ IMPORTANTE:** Altere este valor para algo único e seguro! Use uma string longa e aleatória.

**Exemplo de senha segura:**
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6
```

---

### Variável 7: FRONTEND_URL

1. Clique em **"Add Environment Variable"**
2. **Key:** `FRONTEND_URL`
3. **Value:** `https://seu-frontend.vercel.app`
4. Clique em **"Save Changes"**

✅ **Pronto!** A sétima variável foi adicionada.

**💡 Dica:** Esta é a URL do seu frontend no Vercel.

**Como encontrar a URL do Vercel:**
1. Acesse: https://vercel.com/dashboard
2. Clique no seu projeto
3. A URL estará no topo da página (ex: `https://seu-projeto.vercel.app`)

**⚠️ IMPORTANTE:** Substitua `seu-frontend.vercel.app` pela URL real do seu frontend!

---

### Variável 8: PAGSEGURO_TOKEN

1. Clique em **"Add Environment Variable"**
2. **Key:** `PAGSEGURO_TOKEN`
3. **Value:** `seu_token_pagseguro_aqui`
4. Clique em **"Save Changes"**

✅ **Pronto!** A oitava variável foi adicionada.

**💡 Dica:** Este é o token de autenticação do PagSeguro.

**Como obter o token:**
1. Acesse: https://dev.pagseguro.uol.com.br/
2. Faça login na sua conta
3. Vá em "Integrações" → "Tokens"
4. Copie o token gerado

**⚠️ IMPORTANTE:** Substitua `seu_token_pagseguro_aqui` pelo token real do PagSeguro!

---

### Variável 9: PAGSEGURO_EMAIL

1. Clique em **"Add Environment Variable"**
2. **Key:** `PAGSEGURO_EMAIL`
3. **Value:** `seu_email_pagseguro@email.com`
4. Clique em **"Save Changes"**

✅ **Pronto!** A nona variável foi adicionada.

**💡 Dica:** Este é o email da sua conta PagSeguro.

**⚠️ IMPORTANTE:** Substitua `seu_email_pagseguro@email.com` pelo email real da sua conta PagSeguro!

---

### Variável 10: PAGSEGURO_ENV

1. Clique em **"Add Environment Variable"**
2. **Key:** `PAGSEGURO_ENV`
3. **Value:** `sandbox`
4. Clique em **"Save Changes"**

✅ **Pronto!** A décima variável foi adicionada.

**💡 Dica:** 
- `sandbox` = ambiente de testes (recomendado para começar)
- `production` = ambiente de produção (use quando estiver pronto para receber pagamentos reais)

**⚠️ IMPORTANTE:** 
- Use `sandbox` para testes
- Mude para `production` apenas quando estiver pronto para receber pagamentos reais

---

### Variável 11: ADMIN_EMAIL

1. Clique em **"Add Environment Variable"**
2. **Key:** `ADMIN_EMAIL`
3. **Value:** `admin@acaidopara.com`
4. Clique em **"Save Changes"**

✅ **Pronto!** A décima primeira variável foi adicionada.

**💡 Dica:** Este é o email do administrador do sistema. Você pode alterar para o email que preferir.

---

### Variável 12: ADMIN_PASSWORD

1. Clique em **"Add Environment Variable"**
2. **Key:** `ADMIN_PASSWORD`
3. **Value:** `admin123`
4. Clique em **"Save Changes"**

✅ **Pronto!** A décima segunda variável foi adicionada.

**💡 Dica:** Esta é a senha do administrador do sistema.

**⚠️ MUITO IMPORTANTE:** 
- Altere esta senha para algo seguro!
- Use uma senha forte com letras, números e caracteres especiais
- Exemplo: `Admin@2024!Seguro`

---

## ✅ Verificação Final

Após adicionar todas as variáveis, você deve ter:

1. ✅ `NODE_ENV` = `production`
2. ✅ `PORT` = `10000`
3. ✅ `SUPABASE_URL` = `https://bfxlarmvnmcrjsrsbqnq.supabase.co`
4. ✅ `SUPABASE_ANON_KEY` = `sua_chave_anon`
5. ✅ `SUPABASE_SERVICE_ROLE_KEY` = `sua_chave_service_role`
6. ✅ `JWT_SECRET` = `sua_chave_secreta`
7. ✅ `FRONTEND_URL` = `https://seu-frontend.vercel.app`
8. ✅ `PAGSEGURO_TOKEN` = `seu_token_pagseguro`
9. ✅ `PAGSEGURO_EMAIL` = `seu_email_pagseguro@email.com`
10. ✅ `PAGSEGURO_ENV` = `sandbox`
11. ✅ `ADMIN_EMAIL` = `admin@acaidopara.com`
12. ✅ `ADMIN_PASSWORD` = `sua_senha_segura`

---

## 🔄 Após Adicionar Todas as Variáveis

1. **Salve todas as alterações** (se houver um botão "Save All" ou similar)
2. O Render **automaticamente fará um novo deploy** com as novas variáveis
3. Aguarde o deploy terminar (pode levar alguns minutos)
4. Verifique os logs para garantir que tudo está funcionando

---

## 🆘 Dicas Importantes

### Como Editar uma Variável:

1. Clique na variável que deseja editar
2. Altere o valor
3. Clique em "Save Changes"

### Como Deletar uma Variável:

1. Clique na variável que deseja deletar
2. Clique no ícone de lixeira ou botão "Delete"
3. Confirme a exclusão

### Variáveis Sensíveis:

As seguintes variáveis contêm informações sensíveis e devem ser mantidas em segredo:
- 🔒 `SUPABASE_SERVICE_ROLE_KEY`
- 🔒 `JWT_SECRET`
- 🔒 `ADMIN_PASSWORD`
- 🔒 `PAGSEGURO_TOKEN`

**Nunca compartilhe essas variáveis publicamente!**

---

## ✅ Próximo Passo

Após adicionar todas as variáveis:

1. ✅ Aguarde o deploy automático terminar
2. ✅ Teste o health check: `https://seu-app.onrender.com/api/health`
3. ✅ Verifique os logs no painel do Render
4. ✅ Atualize a variável `NEXT_PUBLIC_API_URL` no Vercel com a URL do Render

---

**Pronto! Agora você sabe como adicionar variáveis de ambiente no Render!** 🎉

