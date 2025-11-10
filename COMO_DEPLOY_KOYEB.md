# 🚀 Como fazer Deploy no Koyeb (GRATUITO)

## 📋 Pré-requisitos:

1. Conta no [Koyeb](https://www.koyeb.com/) (gratuita)
2. Repositório no GitHub
3. Código no GitHub

## 🛠️ Passo a Passo:

### 1. Acesse Koyeb:

1. Vá para [https://www.koyeb.com/](https://www.koyeb.com/)
2. Clique em "Sign Up"
3. Faça login com GitHub

### 2. Criar Nova Aplicação:

1. Clique em "Create App"
2. Selecione "GitHub"
3. Escolha seu repositório: `ViniGabrielBorba/a-ai`
4. Clique em "Connect"

### 3. Configurar Aplicação:

1. **Name:** `acai-mania-backend`
2. **Region:** `fra` (Frankfurt) ou escolha mais próxima
3. **Buildpack:** Node.js
4. **Root Directory:** `backend`
5. **Build Command:** `npm install && npm run build`
6. **Run Command:** `npm start`
7. **Port:** `3001`

### 4. Configurar Variáveis de Ambiente:

No painel do Koyeb, vá em "Environment Variables" e adicione:

```
PORT=3001
NODE_ENV=production
SUPABASE_URL=sua_url_aqui
SUPABASE_ANON_KEY=sua_chave_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_aqui
JWT_SECRET=sua_chave_secreta_aqui
FRONTEND_URL=https://seu-site.netlify.app
PAGSEGURO_TOKEN=seu_token_aqui
PAGSEGURO_EMAIL=seu_email_aqui
PAGSEGURO_ENV=production
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=sua_senha_segura
```

### 5. Deploy:

1. Clique em "Deploy"
2. Koyeb vai fazer o deploy automaticamente
3. Aguarde alguns minutos
4. A URL será gerada automaticamente: `https://acai-mania-backend-xxxxx.koyeb.app`

### 6. Verificar Deploy:

1. Acesse a URL: `https://acai-mania-backend-xxxxx.koyeb.app/api/health`
2. Deve retornar: `{"status":"ok","message":"API está funcionando!","database":"Supabase conectado"}`

## 🔧 Configurações Adicionais:

### Domínio Customizado:

No painel do Koyeb você pode:
- ✅ Adicionar domínio customizado
- ✅ Configurar SSL automático
- ✅ Ver logs em tempo real
- ✅ Ver métricas
- ✅ Escalar aplicação

## 📝 Comandos Úteis:

No painel do Koyeb você pode:
- ✅ Ver logs em tempo real
- ✅ Reiniciar a aplicação
- ✅ Ver métricas
- ✅ Configurar domínio customizado
- ✅ Gerenciar variáveis de ambiente
- ✅ Ver histórico de deploys

## 🆘 Troubleshooting:

### Erro: "Build failed"
**Solução:** Verifique se todas as dependências estão no `package.json`

### Erro: "Port already in use"
**Solução:** Koyeb usa a variável `PORT` automaticamente

### Erro: "Memory limit exceeded"
**Solução:** No plano gratuito, você tem 512MB. Otimize o código

## ✅ Após o Deploy:

1. Copie a URL do backend: `https://acai-mania-backend-xxxxx.koyeb.app`
2. Use essa URL no frontend: `NEXT_PUBLIC_API_URL=https://acai-mania-backend-xxxxx.koyeb.app/api`
3. Teste o health check

## 🎉 Pronto!

Seu backend está rodando gratuitamente no Koyeb! 🚀

---

**Próximo passo:** Fazer deploy do frontend no Netlify ou Vercel!

