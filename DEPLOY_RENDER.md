# 🚀 Deploy no Render - Guia Completo

## 📋 Pré-requisitos:

1. Conta no Render: https://render.com
2. Repositório no GitHub conectado
3. Variáveis de ambiente do Supabase configuradas

## 🚀 Passo a Passo:

### 1. Criar Novo Web Service no Render

1. Acesse: https://dashboard.render.com
2. Clique em **"New +"** → **"Web Service"**
3. Conecte seu repositório GitHub: `ViniGabrielBorba/a-ai`
4. Configure o serviço:

#### Configurações Básicas:

- **Name:** `a-ai-backend` (ou o nome que preferir)
- **Region:** `São Paulo (Brazil)` ou mais próximo
- **Branch:** `main`
- **Root Directory:** `backend`
- **Runtime:** `Node`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Instance Type:** `Free` (para começar)

### 2. Configurar Variáveis de Ambiente

No painel do Render, vá em **"Environment"** e adicione:

```env
NODE_ENV=production
PORT=10000
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w
JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
FRONTEND_URL=https://seu-frontend.vercel.app
PAGSEGURO_TOKEN=seu_token_pagseguro
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

**⚠️ IMPORTANTE:**
- Substitua `FRONTEND_URL` pela URL real do seu frontend no Vercel
- Substitua os valores do PagSeguro pelos seus valores reais
- O Render define automaticamente a variável `PORT`, mas você pode usar `10000` como padrão

### 3. Configurar Health Check (Opcional)

No Render, você pode configurar um health check:

- **Health Check Path:** `/api/health`
- O Render verifica automaticamente se o serviço está respondendo

### 4. Deploy Automático

O Render faz deploy automaticamente quando você faz push para a branch `main`.

### 5. Verificar Deploy

Após o deploy:

1. Acesse a URL fornecida pelo Render (ex: `https://a-ai-backend.onrender.com`)
2. Teste o health check: `https://a-ai-backend.onrender.com/api/health`
3. Verifique os logs no painel do Render

## 📝 Arquivo render.yaml (Opcional)

Você pode criar um arquivo `render.yaml` na raiz do projeto para configurar tudo via código:

```yaml
services:
  - type: web
    name: a-ai-backend
    env: node
    region: sao-paulo
    plan: free
    buildCommand: npm install && npm run build
    startCommand: npm start
    rootDir: backend
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
      - key: SUPABASE_URL
        sync: false
      - key: SUPABASE_ANON_KEY
        sync: false
      - key: SUPABASE_SERVICE_ROLE_KEY
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: FRONTEND_URL
        sync: false
      - key: PAGSEGURO_TOKEN
        sync: false
      - key: PAGSEGURO_EMAIL
        sync: false
      - key: PAGSEGURO_ENV
        value: sandbox
      - key: ADMIN_EMAIL
        value: admin@acaidopara.com
      - key: ADMIN_PASSWORD
        sync: false
    healthCheckPath: /api/health
```

**Nota:** Variáveis com `sync: false` precisam ser configuradas manualmente no painel do Render.

## 🔧 Ajustes Necessários no Código

O código já está preparado para o Render! Mas vamos verificar:

1. ✅ O servidor escuta em `0.0.0.0` (já configurado)
2. ✅ Usa `process.env.PORT` (já configurado)
3. ✅ Health check em `/api/health` (já configurado)
4. ✅ CORS permite múltiplas origens (já configurado)

## 🌐 Configurar CORS para Render

Após fazer o deploy, você precisa atualizar o CORS no backend para permitir o frontend do Vercel.

No arquivo `backend/src/server.ts`, o CORS já está configurado para aceitar:
- Qualquer subdomínio `.vercel.app`
- Qualquer subdomínio `.netlify.app`
- O valor de `FRONTEND_URL`

## 📊 Monitoramento

O Render fornece:
- Logs em tempo real
- Métricas de uso
- Status do serviço
- Histórico de deploys

## ⚠️ Limitações do Plano Gratuito:

- **Sleep após 15 minutos de inatividade** - O serviço "dorme" se não receber requisições
- **Primeira requisição pode demorar** - Após dormir, a primeira requisição pode levar 30-60 segundos
- **Limite de recursos** - CPU e memória limitados

## 🚀 Próximos Passos:

1. ✅ Criar serviço no Render
2. ✅ Configurar variáveis de ambiente
3. ✅ Fazer primeiro deploy
4. ✅ Testar health check
5. ✅ Atualizar `FRONTEND_URL` no frontend (Vercel) com a URL do Render
6. ✅ Testar integração completa

## 🔗 Links Úteis:

- Dashboard Render: https://dashboard.render.com
- Documentação: https://render.com/docs
- Status: https://status.render.com

---

**Pronto para fazer deploy no Render!** 🚀

