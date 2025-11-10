# 🚀 Deploy Manual no Fly.io - Passo a Passo

## 📋 Pré-requisitos:

1. Fly CLI instalado
2. Login no Fly.io feito
3. App criado no Fly.io

## 🛠️ Passo a Passo:

### 1. Instalar Fly CLI (Se não tiver):

**Windows (PowerShell como Admin):**
```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

**Verificar instalação:**
```bash
fly version
```

### 2. Login no Fly.io:

```bash
fly auth login
```

Isso vai abrir o navegador para fazer login.

### 3. Navegar para pasta do backend:

```bash
cd backend
```

### 4. Verificar/Criar App:

```bash
# Verificar apps existentes
fly apps list

# Se o app não existir, criar
fly apps create a-ai-nhp-das

# Ou usar outro nome
fly apps create acai-mania-backend
```

### 5. Configurar Variáveis de Ambiente:

```bash
fly secrets set SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
fly secrets set SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
fly secrets set SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w
fly secrets set JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
fly secrets set FRONTEND_URL=https://seu-site.netlify.app
fly secrets set PAGSEGURO_TOKEN=seu_token_pagseguro
fly secrets set PAGSEGURO_EMAIL=seu_email_pagseguro
fly secrets set PAGSEGURO_ENV=sandbox
fly secrets set ADMIN_EMAIL=admin@acaidopara.com
fly secrets set ADMIN_PASSWORD=admin123
```

### 6. Verificar fly.toml:

Certifique-se de que o `fly.toml` tem o nome correto do app:

```toml
app = "a-ai-nhp-das"  # Ou o nome que você escolheu
```

### 7. Fazer Deploy:

```bash
fly deploy
```

### 8. Verificar Status:

```bash
fly status
```

### 9. Ver Logs:

```bash
fly logs
```

### 10. Testar Health Check:

```bash
fly curl /api/health
```

Ou acesse no navegador:
```
https://a-ai-nhp-das.fly.dev/api/health
```

## 🆘 Se o Deploy Falhar:

### Verificar Logs Detalhados:

```bash
fly logs --verbose
```

### Verificar Status:

```bash
fly status
```

### Verificar Configuração:

```bash
fly config show
```

### Tentar Deploy com Verbose:

```bash
fly deploy --verbose
```

## ✅ Após Deploy Bem-Sucedido:

1. **Copie a URL:** `https://a-ai-nhp-das.fly.dev`
2. **Use no frontend:** Configure `NEXT_PUBLIC_API_URL=https://a-ai-nhp-das.fly.dev/api`
3. **Teste o health check:** Deve retornar `{"status":"ok"}`

---

**Siga estes passos para fazer deploy manual no Fly.io!** 🚀

