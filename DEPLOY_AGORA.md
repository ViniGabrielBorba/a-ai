# 🚀 Deploy AGORA - Passo a Passo Rápido

## ⚡ Opção Mais Rápida: Cyclic.sh (5 minutos)

### Passo 1: Acessar Cyclic.sh
1. Abra: https://www.cyclic.sh/
2. Clique em **"Sign Up"** ou **"Login"**
3. Escolha **"Login with GitHub"**
4. Autorize o acesso

### Passo 2: Criar Nova Aplicação
1. Clique em **"New App"**
2. Selecione **"Deploy from GitHub"**
3. Escolha o repositório: **`ViniGabrielBorba/a-ai`**
4. Clique em **"Connect"**

### Passo 3: Configurar Aplicação
Preencha os campos:

- **App Name:** `acai-mania-backend`
- **Runtime:** `Node.js 18.x` (automático)
- **Root Directory:** `backend`
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Port:** `3001`

### Passo 4: Configurar Variáveis de Ambiente
No painel do Cyclic, vá em **"Environment Variables"** e adicione:

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

**⚠️ IMPORTANTE:** Substitua os valores de `PAGSEGURO_TOKEN` e `PAGSEGURO_EMAIL` pelos seus valores reais!

### Passo 5: Deploy
1. Clique em **"Deploy"**
2. Aguarde alguns minutos (2-5 minutos)
3. A URL será gerada automaticamente: `https://acai-mania-backend.cyclic.app`

### Passo 6: Verificar Deploy
Acesse: `https://acai-mania-backend.cyclic.app/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "API está funcionando!",
  "database": "Supabase conectado"
}
```

## ✅ Pronto!

Seu backend está rodando! 🎉

## 🔗 Usar no Frontend

No frontend (Netlify/Vercel), configure a variável de ambiente:

```
NEXT_PUBLIC_API_URL=https://acai-mania-backend.cyclic.app/api
```

## 📝 Checklist

- [ ] Login no Cyclic.sh com GitHub
- [ ] Conectado repositório `ViniGabrielBorba/a-ai`
- [ ] Configurado Root Directory: `backend`
- [ ] Configurado Build Command: `npm install && npm run build`
- [ ] Configurado Start Command: `npm start`
- [ ] Adicionadas todas as variáveis de ambiente
- [ ] Deploy iniciado
- [ ] Health check funcionando

## 🆘 Problemas?

### Erro: "Build failed"
- Verifique se o Root Directory está correto: `backend`
- Verifique se o Build Command está correto: `npm install && npm run build`

### Erro: "Port already in use"
- Certifique-se de que a porta está definida como `3001` na variável `PORT`

### Erro: "Cannot find module"
- Verifique se o `package.json` está na pasta `backend`
- Verifique se o build está gerando os arquivos em `dist/`

### Health check não funciona
- Verifique se o Supabase está configurado corretamente
- Verifique se as variáveis de ambiente estão corretas
- Verifique os logs no painel do Cyclic

## 🎯 Próximos Passos

1. ✅ Backend deployado no Cyclic.sh
2. ⏭️ Fazer deploy do frontend no Netlify/Vercel
3. ⏭️ Configurar `NEXT_PUBLIC_API_URL` no frontend
4. ⏭️ Testar a aplicação completa

---

**Siga estes passos e em 5 minutos seu backend estará no ar!** 🚀

