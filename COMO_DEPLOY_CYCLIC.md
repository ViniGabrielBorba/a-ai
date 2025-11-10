# 🚀 Como fazer Deploy no Cyclic.sh (GRATUITO)

## 📋 Pré-requisitos:

1. Conta no [Cyclic.sh](https://www.cyclic.sh/) (gratuita)
2. Repositório no GitHub
3. Código no GitHub

## 🛠️ Passo a Passo:

### 1. Acesse Cyclic.sh:

1. Vá para [https://www.cyclic.sh/](https://www.cyclic.sh/)
2. Clique em "Sign Up"
3. Faça login com GitHub

### 2. Criar Nova Aplicação:

1. Clique em "New App"
2. Selecione "Deploy from GitHub"
3. Escolha seu repositório: `ViniGabrielBorba/a-ai`
4. Clique em "Connect"

### 3. Configurar Aplicação:

1. **App Name:** `acai-mania-backend`
2. **Runtime:** Node.js 18.x
3. **Root Directory:** `backend`
4. **Build Command:** `npm install && npm run build`
5. **Start Command:** `npm start`
6. **Port:** `3001`

### 4. Configurar Variáveis de Ambiente:

No painel do Cyclic, vá em "Environment Variables" e adicione:

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
2. Cyclic vai fazer o deploy automaticamente
3. Aguarde alguns minutos
4. A URL será gerada automaticamente: `https://acai-mania-backend.cyclic.app`

### 6. Verificar Deploy:

1. Acesse a URL: `https://acai-mania-backend.cyclic.app/api/health`
2. Deve retornar: `{"status":"ok","message":"API está funcionando!","database":"Supabase conectado"}`

## 🔧 Configurações Adicionais:

### Arquivo `cyclic.json`:

O arquivo `backend/cyclic.json` já está configurado com:
- ✅ Runtime Node.js 18.x
- ✅ Comandos de build e start
- ✅ Configurações otimizadas

## 📝 Comandos Úteis:

No painel do Cyclic você pode:
- ✅ Ver logs em tempo real
- ✅ Reiniciar a aplicação
- ✅ Ver métricas
- ✅ Configurar domínio customizado
- ✅ Gerenciar variáveis de ambiente

## 🆘 Troubleshooting:

### Erro: "Build failed"
**Solução:** Verifique se todas as dependências estão no `package.json`

### Erro: "Port already in use"
**Solução:** Cyclic usa a variável `PORT` automaticamente

### Erro: "Module not found"
**Solução:** Verifique se `npm install` está instalando todas as dependências

## ✅ Após o Deploy:

1. Copie a URL do backend: `https://acai-mania-backend.cyclic.app`
2. Use essa URL no frontend: `NEXT_PUBLIC_API_URL=https://acai-mania-backend.cyclic.app/api`
3. Teste o health check

## 🎉 Pronto!

Seu backend está rodando gratuitamente no Cyclic.sh! 🚀

---

**Próximo passo:** Fazer deploy do frontend no Netlify ou Vercel!

