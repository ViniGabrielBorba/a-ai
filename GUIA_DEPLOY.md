# 🚀 Guia de Deploy - Açaí Mania

## 📋 Opções de Deploy

### ✅ **Recomendado: Frontend no Netlify + Backend no Railway/Render**

## 🎯 Estrutura Recomendada:

```
Frontend (Next.js) → Netlify ✅
Backend (Node.js/Express) → Railway ou Render ✅
Banco de Dados → Supabase ✅ (já configurado)
```

## 🌐 Opção 1: Netlify (Frontend) + Railway (Backend) ⭐ RECOMENDADO

### Frontend no Netlify:

#### 1. **Preparar o Frontend:**
```bash
cd frontend
npm run build
```

#### 2. **Criar arquivo `netlify.toml` na raiz do projeto:**
```toml
[build]
  base = "frontend"
  command = "npm run build"
  publish = "frontend/.next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

#### 3. **Configurar no Netlify:**
1. Acesse [Netlify](https://www.netlify.com/)
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Selecione seu repositório
5. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

#### 4. **Variáveis de Ambiente no Netlify:**
```
NEXT_PUBLIC_API_URL=https://seu-backend.railway.app/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### Backend no Railway:

#### 1. **Preparar o Backend:**
```bash
cd backend
# Certifique-se de que o package.json tem o script "start"
```

#### 2. **Configurar no Railway:**
1. Acesse [Railway](https://railway.app/)
2. Faça login com GitHub
3. Clique em "New Project" → "Deploy from GitHub repo"
4. Selecione seu repositório
5. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`

#### 3. **Variáveis de Ambiente no Railway:**
```env
PORT=3001
SUPABASE_URL=sua_url_supabase
SUPABASE_ANON_KEY=sua_chave_anon
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role
JWT_SECRET=seu_jwt_secret
FRONTEND_URL=https://seu-site.netlify.app
PAGSEGURO_TOKEN=seu_token
PAGSEGURO_EMAIL=seu_email
PAGSEGURO_ENV=production
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=sua_senha_segura
```

#### 4. **Atualizar CORS no Backend:**
No arquivo `backend/src/server.ts`, certifique-se de que o CORS permite o domínio do Netlify:
```typescript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'https://seu-site.netlify.app',
  credentials: true
}));
```

---

## 🌐 Opção 2: Netlify (Frontend) + Render (Backend) 💰 FREE TIER

### Frontend no Netlify:
(Segue os mesmos passos da Opção 1)

### Backend no Render:

#### 1. **Criar arquivo `render.yaml` na raiz:**
```yaml
services:
  - type: web
    name: acai-mania-backend
    env: node
    buildCommand: cd backend && npm install && npm run build
    startCommand: cd backend && npm start
    envVars:
      - key: PORT
        value: 3001
      - key: SUPABASE_URL
        sync: false
      - key: SUPABASE_ANON_KEY
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: FRONTEND_URL
        value: https://seu-site.netlify.app
```

#### 2. **Configurar no Render:**
1. Acesse [Render](https://render.com/)
2. Faça login com GitHub
3. Clique em "New" → "Web Service"
4. Conecte seu repositório
5. Configure:
   - **Name:** `acai-mania-backend`
   - **Environment:** `Node`
   - **Build Command:** `cd backend && npm install && npm run build`
   - **Start Command:** `cd backend && npm start`
   - **Root Directory:** `backend`

#### 3. **Variáveis de Ambiente:**
(Configurar no painel do Render, mesma lista da Railway)

---

## 🌐 Opção 3: Vercel (Frontend) + Railway/Render (Backend)

### Frontend no Vercel (Recomendado para Next.js):

#### 1. **Configurar no Vercel:**
1. Acesse [Vercel](https://vercel.com/)
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Importe seu repositório
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`

#### 2. **Variáveis de Ambiente:**
```
NEXT_PUBLIC_API_URL=https://seu-backend.railway.app/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

**Vantagem:** Vercel é feito pela equipe do Next.js, então tem suporte nativo perfeito!

---

## 🚫 Por que NÃO colocar Backend no Netlify?

### Netlify é para:
- ✅ Sites estáticos
- ✅ JAMstack (JavaScript, APIs, Markup)
- ✅ Serverless Functions (pequenas funções)
- ✅ Frontend React/Next.js (com export estático)

### Netlify NÃO é para:
- ❌ Aplicações Express completas
- ❌ Servidores Node.js persistentes
- ❌ APIs REST completas
- ❌ WebSockets
- ❌ Processos de longa duração

### Alternativa Netlify Functions:
Se quiser usar Netlify, você precisaria refatorar o backend para usar Netlify Functions (serverless), o que é uma mudança significativa na arquitetura.

---

## 📊 Comparação de Plataformas:

| Plataforma | Frontend | Backend | Free Tier | Fácil Setup |
|-----------|----------|---------|-----------|-------------|
| **Netlify** | ✅ Excelente | ❌ Não | ✅ Sim | ✅ Muito fácil |
| **Vercel** | ✅ Perfeito (Next.js) | ⚠️ Serverless | ✅ Sim | ✅ Muito fácil |
| **Railway** | ⚠️ Possível | ✅ Perfeito | ⚠️ Limitado | ✅ Fácil |
| **Render** | ✅ Possível | ✅ Perfeito | ✅ Sim | ✅ Fácil |
| **Heroku** | ✅ Possível | ✅ Perfeito | ❌ Não | ✅ Fácil |

---

## 🎯 Recomendação Final:

### Para Produção:
```
Frontend: Netlify ou Vercel ✅
Backend: Railway ou Render ✅
Banco: Supabase ✅ (já configurado)
```

### Por quê?
1. **Netlify/Vercel:** Melhor para frontend Next.js
2. **Railway/Render:** Melhor para backend Node.js/Express
3. **Supabase:** Já está configurado e funciona perfeitamente
4. **Custo:** Free tier disponível em todas as opções
5. **Performance:** Cada serviço na melhor plataforma

---

## 🛠️ Passo a Passo Completo (Netlify + Railway):

### 1. **Preparar Backend para Produção:**

#### Atualizar `backend/package.json`:
```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "seed:admin": "tsx src/scripts/seedAdmin.ts"
  }
}
```

#### Criar `backend/.dockerfile` (opcional, para Railway):
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "start"]
```

### 2. **Deploy Backend no Railway:**

1. Acesse [Railway](https://railway.app/)
2. Clique em "New Project"
3. Selecione "Deploy from GitHub repo"
4. Escolha seu repositório
5. Configure:
   - **Service Name:** `acai-mania-backend`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
6. Adicione variáveis de ambiente
7. Railway vai gerar uma URL: `https://seu-backend.up.railway.app`

### 3. **Deploy Frontend no Netlify:**

1. Acesse [Netlify](https://www.netlify.com/)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte seu repositório GitHub
4. Configure:
   - **Base directory:** `frontend`
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `frontend/.next`
5. Adicione variáveis de ambiente:
   - `NEXT_PUBLIC_API_URL=https://seu-backend.up.railway.app/api`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999`
6. Netlify vai gerar uma URL: `https://seu-site.netlify.app`

### 4. **Atualizar CORS no Backend:**

No arquivo `backend/src/server.ts`:
```typescript
app.use(cors({
  origin: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
    'https://seu-site.netlify.app',
    'https://*.netlify.app' // Permitir todos os subdomínios do Netlify
  ],
  credentials: true
}));
```

### 5. **Atualizar FRONTEND_URL no Railway:**
```
FRONTEND_URL=https://seu-site.netlify.app
```

---

## 🔧 Troubleshooting:

### Erro: "CORS policy"
- **Solução:** Atualizar CORS no backend para incluir o domínio do Netlify

### Erro: "API não encontrada"
- **Solução:** Verificar se `NEXT_PUBLIC_API_URL` está configurado corretamente no Netlify

### Erro: "Build failed"
- **Solução:** Verificar se todas as dependências estão no `package.json`

### Erro: "Port already in use"
- **Solução:** Railway/Render configuram a porta automaticamente via `process.env.PORT`

---

## 📝 Checklist de Deploy:

### Backend:
- [ ] Build funciona localmente (`npm run build`)
- [ ] Script `start` está configurado
- [ ] Variáveis de ambiente configuradas
- [ ] CORS atualizado para permitir frontend
- [ ] Deploy no Railway/Render
- [ ] URL do backend funcionando

### Frontend:
- [ ] Build funciona localmente (`npm run build`)
- [ ] Variáveis de ambiente configuradas
- [ ] `NEXT_PUBLIC_API_URL` aponta para backend
- [ ] Deploy no Netlify/Vercel
- [ ] Site funcionando

### Banco de Dados:
- [ ] Supabase configurado
- [ ] Schema SQL executado
- [ ] Credenciais no backend
- [ ] Admin criado

---

## 🎉 Pronto!

Após seguir esses passos, você terá:
- ✅ Frontend rodando no Netlify
- ✅ Backend rodando no Railway/Render
- ✅ Banco de dados no Supabase
- ✅ Tudo funcionando em produção!

---

## 💡 Dicas Extras:

1. **Custom Domain:** Netlify permite domínio customizado gratuito
2. **SSL:** Automático em Netlify e Railway
3. **Monitoring:** Railway tem logs em tempo real
4. **Backups:** Supabase faz backup automático
5. **CI/CD:** Deploy automático a cada push no GitHub

---

## 📞 Suporte:

Se tiver dúvidas durante o deploy, consulte:
- [Documentação Netlify](https://docs.netlify.com/)
- [Documentação Railway](https://docs.railway.app/)
- [Documentação Render](https://render.com/docs)
- [Documentação Vercel](https://vercel.com/docs)

---

**Boa sorte com o deploy! 🚀**

