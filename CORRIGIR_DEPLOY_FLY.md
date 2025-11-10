# 🔧 Corrigir Deploy no Fly.io

## ❌ Erro:

```
registry.fly.io/a-ai-swtkcg:deployment-33dae8e2a0d9cf9009ebd7ef601d5c51
Timeout ou erro no health check
```

## 🔍 Causas Possíveis:

1. **Health check falhando** - O endpoint estava tentando conectar ao Supabase antes do servidor estar pronto
2. **Grace period muito curto** - O Fly.io não estava dando tempo suficiente para o servidor iniciar
3. **Variáveis de ambiente não configuradas** - Secrets do Supabase não foram configurados

## ✅ Correções Aplicadas:

### 1. Health Check Simplificado

O health check agora é simples e não depende do Supabase:

```typescript
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'API está funcionando!',
    timestamp: new Date().toISOString()
  });
});
```

### 2. Grace Period Aumentado

No `fly.toml`:
- `grace_period`: `5s` → `30s` (mais tempo para iniciar)
- `interval`: `10s` → `15s` (verifica menos frequentemente)
- `timeout`: `5s` → `10s` (mais tempo para responder)

## 📋 Próximos Passos:

### 1. Verificar Secrets Configurados

Execute na pasta `backend/`:

```bash
cd backend
flyctl secrets list
```

### 2. Configurar Secrets (se necessário)

Se algum secret estiver faltando, configure:

```bash
flyctl secrets set SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
flyctl secrets set SUPABASE_ANON_KEY=sua_chave_aqui
flyctl secrets set SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui
flyctl secrets set JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
flyctl secrets set FRONTEND_URL=https://seu-frontend.vercel.app
```

### 3. Fazer Deploy

```bash
cd backend
flyctl deploy
```

### 4. Verificar Logs

Se ainda houver problemas, veja os logs:

```bash
flyctl logs
```

### 5. Verificar Status

```bash
flyctl status
```

## 🔍 Troubleshooting:

### Se o deploy ainda falhar:

1. **Verificar logs detalhados:**
   ```bash
   flyctl logs --app a-ai-nhp-das
   ```

2. **Verificar se o app está rodando:**
   ```bash
   flyctl status --app a-ai-nhp-das
   ```

3. **Verificar variáveis de ambiente:**
   ```bash
   flyctl ssh console --app a-ai-nhp-das
   # Dentro do console:
   env | grep SUPABASE
   ```

4. **Testar health check manualmente:**
   ```bash
   curl https://a-ai-nhp-das.fly.dev/api/health
   ```

## ✅ O que foi corrigido:

- ✅ Health check simplificado (não depende do Supabase)
- ✅ Grace period aumentado para 30 segundos
- ✅ Timeout aumentado para 10 segundos
- ✅ Intervalo de verificação ajustado

---

**Agora faça o deploy novamente!** 🚀

