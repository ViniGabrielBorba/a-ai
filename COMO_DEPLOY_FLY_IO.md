# 🚀 Como fazer Deploy no Fly.io (GRATUITO)

## 📋 Pré-requisitos:

1. Conta no [Fly.io](https://fly.io/) (gratuita)
2. Fly CLI instalado
3. Repositório no GitHub

## 🛠️ Passo a Passo:

### 1. Instalar Fly CLI:

#### Windows (PowerShell):
```powershell
# Baixar e instalar
iwr https://fly.io/install.ps1 -useb | iex

# Ou baixar manualmente de:
# https://fly.io/docs/getting-started/installing-flyctl/
```

#### Verificar instalação:
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

### 4. Inicializar projeto Fly.io:

```bash
fly launch
```

Isso vai perguntar:
- **App name:** `acai-mania-backend` (ou outro nome)
- **Region:** `gru` (São Paulo) ou escolha mais próxima
- **PostgreSQL:** `n` (não, já usamos Supabase)
- **Redis:** `n` (não necessário)
- **Deploy now:** `y` (sim)

### 5. Configurar variáveis de ambiente:

```bash
fly secrets set SUPABASE_URL=sua_url_aqui
fly secrets set SUPABASE_ANON_KEY=sua_chave_aqui
fly secrets set SUPABASE_SERVICE_ROLE_KEY=sua_chave_aqui
fly secrets set JWT_SECRET=sua_chave_secreta_aqui
fly secrets set FRONTEND_URL=https://seu-site.netlify.app
fly secrets set PAGSEGURO_TOKEN=seu_token_aqui
fly secrets set PAGSEGURO_EMAIL=seu_email_aqui
fly secrets set PAGSEGURO_ENV=production
fly secrets set ADMIN_EMAIL=admin@acaidopara.com
fly secrets set ADMIN_PASSWORD=sua_senha_segura
```

### 6. Deploy:

```bash
fly deploy
```

### 7. Verificar status:

```bash
fly status
```

### 8. Ver logs:

```bash
fly logs
```

### 9. Obter URL:

```bash
fly info
```

A URL será algo como: `https://acai-mania-backend.fly.dev`

## 🔧 Comandos Úteis:

```bash
# Ver status da aplicação
fly status

# Ver logs em tempo real
fly logs

# Reiniciar aplicação
fly restart

# Escalar aplicação
fly scale count 1

# Ver variáveis de ambiente
fly secrets list

# Atualizar variáveis de ambiente
fly secrets set CHAVE=valor

# Abrir SSH na aplicação
fly ssh console

# Ver informações da aplicação
fly info
```

## 📝 Arquivo fly.toml:

O arquivo `backend/fly.toml` já está configurado com:
- ✅ Porta 3001
- ✅ Health check em `/api/health`
- ✅ HTTPS forçado
- ✅ Configurações otimizadas

## 🆘 Troubleshooting:

### Erro: "No app name specified"
**Solução:** Execute `fly launch` na pasta `backend`

### Erro: "Build failed"
**Solução:** Verifique se `package.json` tem o script `build` e `start`

### Erro: "Port already in use"
**Solução:** Fly.io usa a variável `PORT` automaticamente, não precisa configurar

### Erro: "Memory limit exceeded"
**Solução:** No plano gratuito, você tem 256MB. Otimize o código ou use `fly scale memory 512` (pode custar)

## ✅ Após o Deploy:

1. Copie a URL do backend: `https://acai-mania-backend.fly.dev`
2. Use essa URL no frontend: `NEXT_PUBLIC_API_URL=https://acai-mania-backend.fly.dev/api`
3. Teste o health check: `https://acai-mania-backend.fly.dev/api/health`

## 🎉 Pronto!

Seu backend está rodando gratuitamente no Fly.io! 🚀

---

**Próximo passo:** Fazer deploy do frontend no Netlify ou Vercel!

