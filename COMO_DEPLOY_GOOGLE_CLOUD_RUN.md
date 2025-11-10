# 🚀 Como fazer Deploy no Google Cloud Run (GRATUITO)

## 📋 Pré-requisitos:

1. Conta no [Google Cloud](https://cloud.google.com/) (gratuita com $300 de crédito)
2. Google Cloud SDK instalado
3. Repositório no GitHub
4. Docker instalado (opcional)

## 🛠️ Passo a Passo:

### 1. Criar Conta no Google Cloud:

1. Vá para [https://cloud.google.com/](https://cloud.google.com/)
2. Clique em "Get started for free"
3. Crie uma conta (ganhe $300 de crédito)

### 2. Criar Projeto:

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Clique em "Create Project"
3. Nome: `acai-mania`
4. Clique em "Create"

### 3. Ativar Cloud Run API:

1. Vá em "APIs & Services" → "Library"
2. Busque por "Cloud Run API"
3. Clique em "Enable"

### 4. Instalar Google Cloud SDK:

#### Windows:
```powershell
# Baixar instalador de:
# https://cloud.google.com/sdk/docs/install

# Ou usar Chocolatey:
choco install gcloudsdk
```

#### Verificar instalação:
```bash
gcloud version
```

### 5. Login no Google Cloud:

```bash
gcloud auth login
```

### 6. Configurar projeto:

```bash
gcloud config set project acai-mania
```

### 7. Navegar para pasta do backend:

```bash
cd backend
```

### 8. Deploy no Cloud Run:

```bash
gcloud run deploy acai-mania-backend \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 3001 \
  --memory 512Mi \
  --timeout 300 \
  --max-instances 10
```

### 9. Configurar Variáveis de Ambiente:

```bash
gcloud run services update acai-mania-backend \
  --update-env-vars SUPABASE_URL=sua_url_aqui \
  --update-env-vars SUPABASE_ANON_KEY=sua_chave_aqui \
  --update-env-vars SUPABASE_SERVICE_ROLE_KEY=sua_chave_aqui \
  --update-env-vars JWT_SECRET=sua_chave_secreta_aqui \
  --update-env-vars FRONTEND_URL=https://seu-site.netlify.app \
  --update-env-vars PAGSEGURO_TOKEN=seu_token_aqui \
  --update-env-vars PAGSEGURO_EMAIL=seu_email_aqui \
  --update-env-vars PAGSEGURO_ENV=production \
  --update-env-vars ADMIN_EMAIL=admin@acaidopara.com \
  --update-env-vars ADMIN_PASSWORD=sua_senha_segura \
  --region us-central1
```

### 10. Obter URL:

```bash
gcloud run services describe acai-mania-backend --region us-central1
```

A URL será algo como: `https://acai-mania-backend-xxxxx.run.app`

## 🔧 Configurações Adicionais:

### Dockerfile:

O arquivo `backend/Dockerfile` já está configurado e será usado automaticamente pelo Cloud Run.

### Health Check:

Cloud Run verifica automaticamente se a aplicação está respondendo na porta configurada.

## 📝 Comandos Úteis:

```bash
# Ver logs
gcloud run services logs read acai-mania-backend --region us-central1

# Ver informações do serviço
gcloud run services describe acai-mania-backend --region us-central1

# Atualizar variáveis de ambiente
gcloud run services update acai-mania-backend --update-env-vars CHAVE=valor --region us-central1

# Deletar serviço
gcloud run services delete acai-mania-backend --region us-central1
```

## 🆘 Troubleshooting:

### Erro: "Permission denied"
**Solução:** Execute `gcloud auth login` e configure o projeto

### Erro: "Build failed"
**Solução:** Verifique se o Dockerfile está correto

### Erro: "Port already in use"
**Solução:** Cloud Run usa a variável `PORT` automaticamente

## ✅ Após o Deploy:

1. Copie a URL do backend: `https://acai-mania-backend-xxxxx.run.app`
2. Use essa URL no frontend: `NEXT_PUBLIC_API_URL=https://acai-mania-backend-xxxxx.run.app/api`
3. Teste o health check

## 💰 Custos:

- ✅ **Plano Gratuito:** 2 milhões de requisições/mês
- ✅ **$300 de crédito** nos primeiros 90 dias
- ✅ **Depois:** Pay-as-you-go (muito barato)

## 🎉 Pronto!

Seu backend está rodando gratuitamente no Google Cloud Run! 🚀

---

**Próximo passo:** Fazer deploy do frontend no Netlify ou Vercel!

