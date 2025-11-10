# 🚀 Deploy Rápido - Passo a Passo

## ⚡ Resposta Rápida:

- **Frontend:** ✅ SIM no Netlify (mas Vercel é melhor para Next.js)
- **Backend:** ❌ NÃO no Netlify (use Railway ou Render)

## 🎯 Estrutura Recomendada:

```
Frontend (Next.js) → Netlify ou Vercel ✅
Backend (Express) → Railway ou Render ✅
Banco de Dados → Supabase ✅ (já configurado)
```

---

## 📋 Opção 1: Netlify (Frontend) + Railway (Backend) ⭐

### 1. Deploy do Backend no Railway:

1. Acesse [Railway](https://railway.app/)
2. Faça login com GitHub
3. Clique em "New Project" → "Deploy from GitHub repo"
4. Selecione seu repositório: `ViniGabrielBorba/a-ai`
5. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Adicione variáveis de ambiente:
   ```
   PORT=3001
   SUPABASE_URL=sua_url
   SUPABASE_ANON_KEY=sua_chave
   SUPABASE_SERVICE_ROLE_KEY=sua_chave
   JWT_SECRET=sua_chave_secreta
   FRONTEND_URL=https://seu-site.netlify.app
   PAGSEGURO_TOKEN=seu_token
   PAGSEGURO_EMAIL=seu_email
   PAGSEGURO_ENV=production
   ADMIN_EMAIL=admin@acaidopara.com
   ADMIN_PASSWORD=sua_senha
   ```
7. Railway vai gerar uma URL: `https://seu-backend.up.railway.app`
8. Copie essa URL!

### 2. Deploy do Frontend no Netlify:

1. Acesse [Netlify](https://www.netlify.com/)
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Selecione seu repositório: `ViniGabrielBorba/a-ai`
5. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `.next`
6. Adicione variáveis de ambiente:
   ```
   NEXT_PUBLIC_API_URL=https://seu-backend.up.railway.app/api
   NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
   ```
7. Clique em "Deploy site"
8. Netlify vai gerar uma URL: `https://seu-site.netlify.app`

### 3. Atualizar CORS no Backend:

1. Volte ao Railway
2. Adicione a variável de ambiente:
   ```
   FRONTEND_URL=https://seu-site.netlify.app
   ```
3. O backend vai reiniciar automaticamente

---

## 📋 Opção 2: Vercel (Frontend) + Railway (Backend) ⭐⭐ MELHOR

### 1. Deploy do Backend no Railway:
(Segue os mesmos passos da Opção 1)

### 2. Deploy do Frontend no Vercel:

1. Acesse [Vercel](https://vercel.com/)
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Importe seu repositório: `ViniGabrielBorba/a-ai`
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
6. Adicione variáveis de ambiente:
   ```
   NEXT_PUBLIC_API_URL=https://seu-backend.up.railway.app/api
   NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
   ```
7. Clique em "Deploy"
8. Vercel vai gerar uma URL: `https://seu-site.vercel.app`

**Vantagem:** Vercel é feito pela equipe do Next.js, então tem suporte perfeito!

---

## ❓ Por que Backend NÃO pode ir no Netlify?

### Netlify é para:
- ✅ Sites estáticos
- ✅ JAMstack
- ✅ Serverless Functions (pequenas funções)
- ✅ Frontend React/Next.js

### Netlify NÃO é para:
- ❌ Aplicações Express completas
- ❌ Servidores Node.js persistentes
- ❌ APIs REST completas
- ❌ WebSockets

**Solução:** Use Railway ou Render para o backend!

---

## 🎯 Checklist de Deploy:

### Backend (Railway):
- [ ] Conta criada no Railway
- [ ] Repositório conectado
- [ ] Root directory: `backend`
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm start`
- [ ] Variáveis de ambiente configuradas
- [ ] URL do backend copiada

### Frontend (Netlify/Vercel):
- [ ] Conta criada no Netlify/Vercel
- [ ] Repositório conectado
- [ ] Base directory: `frontend`
- [ ] Build command: `npm run build`
- [ ] Variáveis de ambiente configuradas
- [ ] `NEXT_PUBLIC_API_URL` aponta para backend
- [ ] Site funcionando

### Banco de Dados:
- [ ] Supabase configurado
- [ ] Schema SQL executado
- [ ] Credenciais no backend
- [ ] Admin criado

---

## 🆘 Problemas Comuns:

### Erro: "CORS policy"
**Solução:** O CORS já está configurado para permitir Netlify e Vercel automaticamente!

### Erro: "API não encontrada"
**Solução:** Verifique se `NEXT_PUBLIC_API_URL` está configurado corretamente

### Erro: "Build failed"
**Solução:** Verifique se todas as dependências estão no `package.json`

---

## ✅ Pronto!

Após seguir esses passos, você terá:
- ✅ Frontend rodando no Netlify ou Vercel
- ✅ Backend rodando no Railway
- ✅ Banco de dados no Supabase
- ✅ Tudo funcionando em produção!

---

**Dica:** Vercel é a melhor opção para Next.js! 🚀

