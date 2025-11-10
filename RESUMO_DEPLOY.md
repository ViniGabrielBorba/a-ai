# 🚀 Resumo - Como Fazer Deploy AGORA

## ⚡ Opção Mais Rápida: Cyclic.sh (5 minutos)

### 🎯 Passo a Passo Simplificado:

1. **Acesse:** https://www.cyclic.sh/
2. **Login com GitHub**
3. **Clique em "New App"**
4. **Selecione repositório:** `ViniGabrielBorba/a-ai`
5. **Configure:**
   - Root Directory: `backend`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Port: `3001`
6. **Adicione variáveis de ambiente** (veja `CONFIGURAR_VARIAVEIS_CYCLIC.md`)
7. **Clique em "Deploy"**
8. **Pronto!** ✅

### 📋 Variáveis de Ambiente (Copiar e Colar):

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

**⚠️ Lembre-se de substituir os valores do PagSeguro!**

### 🔗 URL do Backend:

Após o deploy, você receberá uma URL como:
`https://acai-mania-backend.cyclic.app`

### ✅ Verificar se está funcionando:

Acesse: `https://acai-mania-backend.cyclic.app/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "API está funcionando!",
  "database": "Supabase conectado"
}
```

## 📚 Guias Completos:

- **`DEPLOY_AGORA.md`** - Guia passo a passo completo
- **`CONFIGURAR_VARIAVEIS_CYCLIC.md`** - Como configurar variáveis de ambiente
- **`DEPLOY_RAPIDO_SEM_CLI.md`** - Guia detalhado do Cyclic.sh

## 🎯 Próximos Passos:

1. ✅ Backend deployado no Cyclic.sh
2. ⏭️ Fazer deploy do frontend no Netlify/Vercel
3. ⏭️ Configurar `NEXT_PUBLIC_API_URL` no frontend
4. ⏭️ Testar aplicação completa

---

**Tudo pronto para deploy! Siga o guia `DEPLOY_AGORA.md`!** 🚀

