# 🚀 Deploy Automático no Fly.io via GitHub Actions

## ✅ Boa Notícia!

O deploy automático já está configurado! Quando você faz push para a branch `main` com mudanças no `backend/`, o GitHub Actions faz o deploy automaticamente.

## 📋 O que já está configurado:

- ✅ Workflow: `.github/workflows/deploy-backend.yml`
- ✅ Acionado automaticamente em push para `main` com mudanças em `backend/**`
- ✅ Pode ser acionado manualmente também

## ⚙️ Configuração Necessária:

### 1. Adicionar Secret no GitHub

Você precisa adicionar o token do Fly.io como secret no GitHub:

1. **Obter o token do Fly.io:**
   - Acesse: https://fly.io/user/personal_access_tokens
   - Ou execute (se tiver Fly CLI instalado): `flyctl auth token`

2. **Adicionar no GitHub:**
   - Acesse: https://github.com/ViniGabrielBorba/a-ai/settings/secrets/actions
   - Clique em "New repository secret"
   - Nome: `FLY_API_TOKEN`
   - Valor: Cole o token do Fly.io
   - Clique em "Add secret"

### 2. Verificar Deploy

1. Acesse: https://github.com/ViniGabrielBorba/a-ai/actions
2. Veja se há um workflow rodando ou que falhou
3. Clique no workflow para ver os logs

## 🔄 Acionar Deploy Manualmente:

1. Acesse: https://github.com/ViniGabrielBorba/a-ai/actions
2. Clique em "Deploy Backend to Fly.io"
3. Clique em "Run workflow"
4. Selecione a branch `main`
5. Clique em "Run workflow"

## 📝 Verificar Status do Deploy:

Após o deploy, verifique:

```bash
# Se tiver Fly CLI instalado:
flyctl status --app a-ai-nhp-das
flyctl logs --app a-ai-nhp-das
```

Ou acesse: https://fly.io/apps/a-ai-nhp-das

## ⚠️ Importante:

Antes do deploy funcionar, você precisa:

1. ✅ Ter o app criado no Fly.io: `a-ai-nhp-das`
2. ✅ Configurar os secrets no Fly.io:
   ```bash
   flyctl secrets set SUPABASE_URL=...
   flyctl secrets set SUPABASE_ANON_KEY=...
   # etc...
   ```
3. ✅ Adicionar `FLY_API_TOKEN` como secret no GitHub

## 🆘 Se o Deploy Falhar:

1. **Verificar logs no GitHub Actions:**
   - Acesse: https://github.com/ViniGabrielBorba/a-ai/actions
   - Clique no workflow que falhou
   - Veja os logs para identificar o erro

2. **Erro comum: "FLY_API_TOKEN not found"**
   - Solução: Adicione o secret `FLY_API_TOKEN` no GitHub

3. **Erro comum: "App not found"**
   - Solução: Crie o app no Fly.io primeiro: `flyctl apps create a-ai-nhp-das`

---

**O deploy automático está configurado! Só precisa adicionar o token no GitHub.** 🚀

