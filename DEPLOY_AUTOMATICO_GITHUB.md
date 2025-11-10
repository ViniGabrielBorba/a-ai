# 🤖 Deploy Automático com GitHub Actions

## ✅ O que já está configurado:

Criei um arquivo `.github/workflows/deploy-backend.yml` que faz deploy automático no Fly.io toda vez que você faz push no código!

## 🚀 Como Configurar (5 minutos):

### 1. Criar Token no Fly.io:

1. Acesse: https://fly.io/app/personal/tokens/new
2. Dê um nome para o token (ex: "GitHub Actions")
3. Clique em "Create token"
4. **Copie o token** (você só verá uma vez!)

### 2. Adicionar Token no GitHub:

1. Acesse: https://github.com/ViniGabrielBorba/a-ai/settings/secrets/actions
2. Clique em "New repository secret"
3. Nome: `FLY_API_TOKEN`
4. Valor: Cole o token que você copiou do Fly.io
5. Clique em "Add secret"

### 3. Fazer Push no Código:

```bash
git add .
git commit -m "feat: Configura deploy automático"
git push origin main
```

### 4. Verificar Deploy:

1. Acesse: https://github.com/ViniGabrielBorba/a-ai/actions
2. Você verá o deploy em andamento
3. Aguarde alguns minutos
4. Deploy concluído! ✅

## 📝 Como Funciona:

- ✅ Toda vez que você faz push no código
- ✅ O GitHub Actions detecta mudanças na pasta `backend/`
- ✅ Faz deploy automático no Fly.io
- ✅ Você não precisa fazer nada manualmente!

## 🔧 Configurar Variáveis de Ambiente:

Antes do primeiro deploy, configure as variáveis de ambiente no Fly.io:

```bash
cd backend
fly secrets set SUPABASE_URL=sua_url
fly secrets set SUPABASE_ANON_KEY=sua_chave
fly secrets set SUPABASE_SERVICE_ROLE_KEY=sua_chave
fly secrets set JWT_SECRET=sua_chave_secreta
fly secrets set FRONTEND_URL=https://seu-site.netlify.app
fly secrets set PAGSEGURO_TOKEN=seu_token
fly secrets set PAGSEGURO_EMAIL=seu_email
fly secrets set PAGSEGURO_ENV=production
fly secrets set ADMIN_EMAIL=admin@acaidopara.com
fly secrets set ADMIN_PASSWORD=sua_senha
```

## 🆘 Troubleshooting:

### Erro: "FLY_API_TOKEN not found"
**Solução:** Verifique se o token foi adicionado corretamente no GitHub Secrets

### Erro: "App not found"
**Solução:** Execute `fly launch` manualmente uma vez para criar o app

### Erro: "Deploy failed"
**Solução:** Verifique os logs em: https://github.com/ViniGabrielBorba/a-ai/actions

## ✅ Vantagens:

- ✅ **Deploy automático** - Não precisa fazer nada manual
- ✅ **Sempre atualizado** - Código atualizado automaticamente
- ✅ **Rastreável** - Você vê o histórico de deploys
- ✅ **Confiável** - GitHub Actions é muito confiável

## 🎯 Próximos Passos:

1. ✅ Configurar token do Fly.io
2. ✅ Adicionar token no GitHub
3. ✅ Fazer push no código
4. ✅ Deploy automático! 🚀

---

**Depois de configurar, todo push no código faz deploy automaticamente!** 🎉

