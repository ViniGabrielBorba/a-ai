# 🔐 Configurar Secrets no Fly.io

## 📋 Variáveis de Ambiente Necessárias:

Execute estes comandos na pasta `backend/`:

```bash
flyctl secrets set SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
flyctl secrets set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
flyctl secrets set SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w
flyctl secrets set JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
flyctl secrets set FRONTEND_URL=http://localhost:3000
flyctl secrets set PAGSEGURO_TOKEN=seu_token_pagseguro_aqui
flyctl secrets set PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
flyctl secrets set PAGSEGURO_ENV=sandbox
flyctl secrets set ADMIN_EMAIL=admin@acaidopara.com
flyctl secrets set ADMIN_PASSWORD=admin123
```

## ⚠️ IMPORTANTE:

Substitua os valores do PagSeguro pelos seus valores reais!

## ✅ Após Configurar:

1. Fazer deploy: `flyctl deploy`
2. Verificar status: `flyctl status`
3. Ver logs: `flyctl logs`

---

**Configure os secrets e depois faça o deploy!** 🚀

