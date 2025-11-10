# 🔧 Solução: Erro no Deploy do Fly.io

## ❌ Erro Encontrado:

```
Comando malsucedido: 'flyctl deploy -a a-ai-nhp-das --image registry.fly.io/a-ai-nhp-das:deployment-eadcc13d68c27c6a1cb604bede21e70a --depot-scope=app --config fly.toml'
```

## 🔍 Possíveis Causas:

1. **App não inicializado:** O app `a-ai-nhp-das` pode não ter sido criado no Fly.io
2. **Token inválido:** O token do Fly.io pode estar expirado ou incorreto
3. **Configuração incorreta:** O `fly.toml` pode estar na pasta errada
4. **Permissões insuficientes:** O token pode não ter permissões suficientes

## ✅ Soluções:

### 1. **Inicializar o App no Fly.io (Se ainda não foi feito):**

```bash
cd backend
fly launch
```

Isso vai:
- Criar o app no Fly.io
- Gerar/atualizar o `fly.toml`
- Configurar o deploy

**Importante:** Durante o `fly launch`:
- **App name:** Use o nome que você quer (ou deixe gerar automaticamente)
- **Region:** Escolha `gru` (São Paulo) ou mais próxima
- **PostgreSQL:** `n` (não, já usamos Supabase)
- **Deploy now:** `n` (não, vamos configurar primeiro)

### 2. **Verificar se o App Existe:**

```bash
fly apps list
```

Se o app `a-ai-nhp-das` não aparecer, você precisa criar:

```bash
cd backend
fly apps create a-ai-nhp-das
```

### 3. **Configurar Variáveis de Ambiente:**

Antes de fazer deploy, configure as variáveis:

```bash
cd backend
fly secrets set SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
fly secrets set SUPABASE_ANON_KEY=sua_chave_aqui
fly secrets set SUPABASE_SERVICE_ROLE_KEY=sua_chave_aqui
fly secrets set JWT_SECRET=sua_chave_secreta
fly secrets set FRONTEND_URL=https://seu-site.netlify.app
fly secrets set PAGSEGURO_TOKEN=seu_token
fly secrets set PAGSEGURO_EMAIL=seu_email
fly secrets set PAGSEGURO_ENV=sandbox
fly secrets set ADMIN_EMAIL=admin@acaidopara.com
fly secrets set ADMIN_PASSWORD=sua_senha
```

### 4. **Fazer Deploy Manual:**

```bash
cd backend
fly deploy
```

### 5. **Verificar Logs:**

Se o deploy falhar, veja os logs:

```bash
fly logs
```

## 🚀 Deploy Manual (Recomendado):

Se o deploy automático não funcionar, faça manualmente:

### Passo 1: Login no Fly.io

```bash
fly auth login
```

### Passo 2: Navegar para pasta do backend

```bash
cd backend
```

### Passo 3: Verificar/Criar App

```bash
# Verificar se o app existe
fly apps list

# Se não existir, criar
fly apps create a-ai-nhp-das
```

### Passo 4: Configurar Variáveis de Ambiente

```bash
fly secrets set SUPABASE_URL=...
# (adicionar todas as variáveis)
```

### Passo 5: Fazer Deploy

```bash
fly deploy
```

## 🔧 Se o App Já Existe mas o Deploy Falha:

### 1. Verificar Status do App:

```bash
fly status
```

### 2. Verificar Configuração:

```bash
fly config show
```

### 3. Verificar Logs:

```bash
fly logs
```

### 4. Tentar Deploy Novamente:

```bash
fly deploy --verbose
```

## 📝 Configuração Correta do fly.toml:

O arquivo `backend/fly.toml` deve ter:

```toml
app = "a-ai-nhp-das"  # Nome do seu app
primary_region = "gru"

[build]
  builder = "paketobuildpacks/builder:base"

[env]
  PORT = "3001"
  NODE_ENV = "production"

[[services]]
  internal_port = 3001
  protocol = "tcp"
  processes = ["app"]

  [[services.ports]]
    port = 80
    handlers = ["http"]
    force_https = true

  [[services.ports]]
    port = 443
    handlers = ["tls", "http"]

  [[services.http_checks]]
    interval = "10s"
    timeout = "5s"
    grace_period = "5s"
    method = "GET"
    path = "/api/health"
    protocol = "http"

[processes]
  app = "npm start"
```

## 🆘 Troubleshooting:

### Erro: "App not found"
**Solução:** Crie o app primeiro: `fly apps create a-ai-nhp-das`

### Erro: "Authentication failed"
**Solução:** Faça login novamente: `fly auth login`

### Erro: "Build failed"
**Solução:** Verifique os logs: `fly logs` e veja o erro específico

### Erro: "Image not found"
**Solução:** Faça deploy sem especificar imagem: `fly deploy` (sem `--image`)

## ✅ Checklist:

- [ ] Fly CLI instalado e funcionando
- [ ] Login feito: `fly auth login`
- [ ] App criado: `fly apps create a-ai-nhp-das`
- [ ] `fly.toml` configurado corretamente
- [ ] Variáveis de ambiente configuradas
- [ ] Deploy feito: `fly deploy`

---

**Tente fazer deploy manual primeiro para identificar o problema específico!** 🚀

