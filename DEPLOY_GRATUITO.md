# 🆓 Deploy Gratuito do Backend - Alternativas

## 🎯 Alternativas Gratuitas para Backend:

### 1. **Fly.io** ⭐⭐⭐ RECOMENDADO
- ✅ **Plano Gratuito:** 3 VMs compartilhadas
- ✅ **RAM:** 256MB por VM
- ✅ **CPU:** Compartilhado
- ✅ **Bandwidth:** Ilimitado
- ✅ **Ideal para:** Node.js/Express
- ✅ **Muito fácil de usar**

### 2. **Cyclic.sh** ⭐⭐
- ✅ **Plano Gratuito:** Ilimitado
- ✅ **RAM:** 1GB
- ✅ **CPU:** Compartilhado
- ✅ **Bandwidth:** Ilimitado
- ✅ **Ideal para:** Node.js/Express
- ✅ **Focado em Node.js**

### 3. **Koyeb** ⭐⭐
- ✅ **Plano Gratuito:** 2 serviços
- ✅ **RAM:** 512MB por serviço
- ✅ **CPU:** Compartilhado
- ✅ **Bandwidth:** Ilimitado
- ✅ **Ideal para:** Node.js/Express
- ✅ **Fácil de usar**

### 4. **Google Cloud Run** ⭐⭐⭐
- ✅ **Plano Gratuito:** 2 milhões de requisições/mês
- ✅ **RAM:** Até 512MB
- ✅ **CPU:** Compartilhado
- ✅ **Bandwidth:** Ilimitado
- ✅ **Ideal para:** Node.js/Express
- ✅ **Muito generoso**

### 5. **Vercel Serverless** ⭐
- ⚠️ **Requer adaptação:** Converter para serverless functions
- ✅ **Plano Gratuito:** Ilimitado
- ✅ **Ideal para:** APIs serverless
- ⚠️ **Não ideal para:** Express completo

### 6. **DigitalOcean App Platform** ⭐
- ⚠️ **Trial:** $200 de crédito por 60 dias
- ✅ **Depois:** $5/mês (muito barato)
- ✅ **Ideal para:** Node.js/Express
- ✅ **Muito confiável**

---

## 🚀 Opção 1: Fly.io (RECOMENDADO) ⭐⭐⭐

### Por quê Fly.io?
- ✅ Plano gratuito generoso
- ✅ Fácil de usar
- ✅ Suporta Node.js/Express perfeitamente
- ✅ Deploy rápido
- ✅ Sem cartão de crédito necessário

### Como fazer deploy:

#### 1. Instalar Fly CLI:
```bash
# Windows (PowerShell)
iwr https://fly.io/install.ps1 -useb | iex

# Ou baixar de: https://fly.io/docs/getting-started/installing-flyctl/
```

#### 2. Login no Fly.io:
```bash
fly auth login
```

#### 3. Inicializar projeto:
```bash
cd backend
fly launch
```

#### 4. Configurar:
- Nome do app: `acai-mania-backend`
- Região: `gru` (São Paulo) ou `iad` (Virgínia)
- Não criar PostgreSQL (já usamos Supabase)

#### 5. Deploy:
```bash
fly deploy
```

### Arquivo `fly.toml` (já criado):
```toml
app = "acai-mania-backend"
primary_region = "gru"

[build]
  builder = "paketobuildpacks/builder:base"

[env]
  PORT = "3001"
  NODE_ENV = "production"

[[services]]
  internal_port = 3001
  protocol = "tcp"

  [[services.ports]]
    port = 80
    handlers = ["http"]
    force_https = true

  [[services.ports]]
    port = 443
    handlers = ["tls", "http"]
```

---

## 🚀 Opção 2: Cyclic.sh ⭐⭐

### Por quê Cyclic.sh?
- ✅ Plano gratuito ilimitado
- ✅ Focado em Node.js
- ✅ Deploy automático do GitHub
- ✅ Muito fácil

### Como fazer deploy:

#### 1. Acesse [Cyclic.sh](https://www.cyclic.sh/)
#### 2. Faça login com GitHub
#### 3. Clique em "New App"
#### 4. Selecione seu repositório
#### 5. Configure:
   - **Runtime:** Node.js
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
#### 6. Adicione variáveis de ambiente
#### 7. Deploy automático!

---

## 🚀 Opção 3: Koyeb ⭐⭐

### Por quê Koyeb?
- ✅ Plano gratuito (2 serviços)
- ✅ Deploy automático do GitHub
- ✅ Fácil de usar
- ✅ Suporta Node.js/Express

### Como fazer deploy:

#### 1. Acesse [Koyeb](https://www.koyeb.com/)
#### 2. Faça login com GitHub
#### 3. Clique em "Create App"
#### 4. Selecione "GitHub"
#### 5. Configure:
   - **Repository:** `ViniGabrielBorba/a-ai`
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Run Command:** `npm start`
#### 6. Adicione variáveis de ambiente
#### 7. Deploy!

---

## 🚀 Opção 4: Google Cloud Run ⭐⭐⭐

### Por quê Cloud Run?
- ✅ Plano gratuito muito generoso (2M requisições/mês)
- ✅ Suporta containers Docker
- ✅ Escalável automaticamente
- ✅ Muito confiável

### Como fazer deploy:

#### 1. Criar conta no [Google Cloud](https://cloud.google.com/)
#### 2. Ativar Cloud Run API
#### 3. Instalar Google Cloud SDK
#### 4. Criar Dockerfile no backend
#### 5. Deploy:
```bash
gcloud run deploy acai-mania-backend \
  --source backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## 🚀 Opção 5: Vercel Serverless (Adaptado) ⭐

### Por quê Vercel?
- ✅ Plano gratuito ilimitado
- ✅ Deploy automático
- ⚠️ **Requer adaptação:** Converter Express para serverless

### Como adaptar:
- Criar API Routes no Next.js
- Ou usar Vercel Serverless Functions
- Converter rotas do Express para functions

**Nota:** Esta opção requer refatoração do código.

---

## 📊 Comparação:

| Plataforma | Plano Gratuito | Facilidade | Recomendado |
|-----------|----------------|------------|-------------|
| **Fly.io** | ⭐⭐⭐ Generoso | ⭐⭐⭐ Muito fácil | ✅ SIM |
| **Cyclic.sh** | ⭐⭐⭐ Ilimitado | ⭐⭐⭐ Muito fácil | ✅ SIM |
| **Koyeb** | ⭐⭐ 2 serviços | ⭐⭐⭐ Fácil | ✅ SIM |
| **Cloud Run** | ⭐⭐⭐ Muito generoso | ⭐⭐ Médio | ✅ SIM |
| **Vercel** | ⭐⭐⭐ Ilimitado | ⚠️ Requer adaptação | ❌ Não |
| **DigitalOcean** | ⭐ Trial $200 | ⭐⭐⭐ Fácil | ⚠️ Trial |

---

## 🎯 Recomendação Final:

### Para começar rápido: **Fly.io** ou **Cyclic.sh**
- ✅ Mais fácil
- ✅ Deploy rápido
- ✅ Plano gratuito suficiente

### Para longo prazo: **Google Cloud Run**
- ✅ Mais recursos gratuitos
- ✅ Mais confiável
- ✅ Escalável

---

## 🛠️ Configurações Criadas:

Já criei arquivos de configuração para:
- ✅ `fly.toml` - Fly.io
- ✅ `cyclic.json` - Cyclic.sh
- ✅ `Dockerfile` - Para Cloud Run e outras plataformas
- ✅ `vercel.json` - Vercel (se quiser adaptar)

---

## 📝 Próximos Passos:

1. Escolha uma plataforma (recomendo Fly.io ou Cyclic.sh)
2. Siga o guia específico abaixo
3. Configure as variáveis de ambiente
4. Faça o deploy!

---

**Vamos começar com Fly.io ou Cyclic.sh? São as mais fáceis!** 🚀

