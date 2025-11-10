# 🔧 Solução para Problemas no Fly.io

## ❌ Problema: "O proxy não está encontrando máquinas para rotear as solicitações"

Este erro geralmente acontece quando:
1. O servidor não está iniciando corretamente
2. O servidor não está escutando na porta correta
3. O processo não está rodando
4. A configuração do fly.toml está incorreta

## ✅ Solução:

### 1. **Verificar se o servidor está escutando em 0.0.0.0**

O servidor precisa escutar em `0.0.0.0` (todas as interfaces) e não apenas em `localhost` ou `127.0.0.1`.

**Já corrigido no código!** O arquivo `backend/src/server.ts` agora escuta em `0.0.0.0`.

### 2. **Verificar fly.toml**

O arquivo `backend/fly.toml` já está configurado corretamente com:
- ✅ `internal_port = 3001`
- ✅ Health check em `/api/health`
- ✅ Processo `app` definido

### 3. **Verificar se o processo está rodando**

Execute no Fly.io:
```bash
fly logs
```

Você deve ver:
```
🚀 Servidor rodando na porta 3001
🌐 Escutando em 0.0.0.0:3001
✅ Conectado ao Supabase
```

### 4. **Verificar variáveis de ambiente**

Certifique-se de que todas as variáveis de ambiente estão configuradas:
```bash
fly secrets list
```

### 5. **Verificar status da aplicação**

```bash
fly status
```

### 6. **Reiniciar a aplicação**

```bash
fly restart
```

## 🛠️ Passo a Passo para Corrigir:

### 1. Mesclar arquivos do Fly.io:

Se o Fly.io gerou arquivos durante o `fly launch`, você precisa:

```bash
cd backend
git add fly.toml
git commit -m "fix: Atualiza fly.toml com configuração correta"
git push origin main
```

### 2. Verificar configuração:

Certifique-se de que o `fly.toml` está assim:

```toml
app = "acai-mania-backend"
primary_region = "gru"

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

### 3. Verificar se o servidor está iniciando:

```bash
fly logs
```

Procure por:
- ✅ "Servidor rodando na porta 3001"
- ✅ "Escutando em 0.0.0.0:3001"
- ❌ Erros de conexão
- ❌ Erros de porta

### 4. Testar health check:

```bash
fly curl /api/health
```

Deve retornar:
```json
{"status":"ok","message":"API está funcionando!","database":"Supabase conectado"}
```

## 🔍 Troubleshooting:

### Erro: "Cannot find module"
**Solução:** Verifique se o build está gerando os arquivos em `dist/`

### Erro: "Port already in use"
**Solução:** Fly.io usa a variável `PORT` automaticamente. Não defina porta fixa.

### Erro: "Connection refused"
**Solução:** Certifique-se de que o servidor está escutando em `0.0.0.0` e não em `localhost`

### Erro: "Health check failed"
**Solução:** Verifique se o endpoint `/api/health` está funcionando

## 📝 Checklist:

- [ ] Servidor escuta em `0.0.0.0` (não `localhost`)
- [ ] Porta é definida por `process.env.PORT`
- [ ] `fly.toml` tem `internal_port = 3001`
- [ ] Health check está configurado
- [ ] Processo `app` está definido
- [ ] Variáveis de ambiente estão configuradas
- [ ] Build está gerando arquivos em `dist/`
- [ ] Logs mostram servidor rodando

## 🚀 Deploy Corrigido:

Após corrigir, faça o deploy novamente:

```bash
cd backend
fly deploy
```

## 🆘 Se ainda não funcionar:

1. **Ver logs detalhados:**
   ```bash
   fly logs --verbose
   ```

2. **Verificar status:**
   ```bash
   fly status
   ```

3. **Verificar máquinas:**
   ```bash
   fly machines list
   ```

4. **Reiniciar tudo:**
   ```bash
   fly restart
   ```

5. **Recriar aplicação (último recurso):**
   ```bash
   fly apps destroy acai-mania-backend
   fly launch
   ```

## ✅ Verificação Final:

Após o deploy, teste:

1. **Health check:**
   ```bash
   curl https://acai-mania-backend.fly.dev/api/health
   ```

2. **Deve retornar:**
   ```json
   {"status":"ok","message":"API está funcionando!","database":"Supabase conectado"}
   ```

3. **Se retornar isso, está funcionando!** ✅

## 📞 Ainda com problemas?

1. Verifique os logs: `fly logs`
2. Verifique o status: `fly status`
3. Verifique as máquinas: `fly machines list`
4. Consulte a documentação: [Fly.io Docs](https://fly.io/docs/)

---

**O código já está corrigido! Basta fazer o deploy novamente.** 🚀

