# 🚀 Deploy Rápido SEM Instalar CLI (Cyclic.sh)

## ⚡ A Melhor Opção: Cyclic.sh (SEM CLI!)

Cyclic.sh é a **mais fácil** porque:
- ✅ **Não precisa instalar CLI**
- ✅ **Deploy pelo GitHub** (só conectar)
- ✅ **5 minutos** para fazer deploy
- ✅ **Plano gratuito ilimitado**

## 🎯 Passo a Passo Rápido:

### 1. Acesse Cyclic.sh:

Vá para: [https://www.cyclic.sh/](https://www.cyclic.sh/)

### 2. Faça Login:

1. Clique em "Sign Up"
2. Escolha "Login with GitHub"
3. Autorize o acesso

### 3. Criar Nova Aplicação:

1. Clique em "New App"
2. Selecione "Deploy from GitHub"
3. Escolha seu repositório: `ViniGabrielBorba/a-ai`
4. Clique em "Connect"

### 4. Configurar Aplicação:

Preencha os campos:

- **App Name:** `acai-mania-backend`
- **Runtime:** Node.js 18.x (automático)
- **Root Directory:** `backend`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Port:** `3001`

### 5. Configurar Variáveis de Ambiente:

No painel do Cyclic, vá em **"Environment Variables"** e adicione:

```
PORT=3001
NODE_ENV=production
SUPABASE_URL=sua_url_do_supabase
SUPABASE_ANON_KEY=sua_chave_anon
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role
JWT_SECRET=sua_chave_secreta_jwt
FRONTEND_URL=https://seu-site.netlify.app
PAGSEGURO_TOKEN=seu_token_pagseguro
PAGSEGURO_EMAIL=seu_email_pagseguro
PAGSEGURO_ENV=production
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=sua_senha_admin
```

### 6. Deploy Automático:

1. Clique em **"Deploy"**
2. Aguarde alguns minutos
3. A URL será gerada automaticamente: `https://acai-mania-backend.cyclic.app`

### 7. Verificar Deploy:

Acesse: `https://acai-mania-backend.cyclic.app/api/health`

Deve retornar:
```json
{"status":"ok","message":"API está funcionando!","database":"Supabase conectado"}
```

## ✅ Pronto!

Seu backend está rodando! 🚀

## 🔗 Usar no Frontend:

No frontend, configure:
```
NEXT_PUBLIC_API_URL=https://acai-mania-backend.cyclic.app/api
```

## 📝 Vantagens do Cyclic.sh:

- ✅ **Sem CLI** - Tudo pela interface web
- ✅ **Deploy automático** - Conecta com GitHub
- ✅ **Gratuito** - Plano ilimitado
- ✅ **Rápido** - 5 minutos
- ✅ **Fácil** - Interface simples

---

## 🆘 Se Preferir Fly.io:

Se quiser usar Fly.io mesmo assim, precisa instalar o CLI primeiro:

1. Abra PowerShell como **Administrador**
2. Execute:
   ```powershell
   iwr https://fly.io/install.ps1 -useb | iex
   ```
3. Reinicie o PowerShell
4. Execute: `fly auth login`
5. Execute: `cd backend && fly deploy`

**Mas recomendo Cyclic.sh porque é mais fácil!** ⚡

---

**Escolha Cyclic.sh para começar rápido!** 🚀

