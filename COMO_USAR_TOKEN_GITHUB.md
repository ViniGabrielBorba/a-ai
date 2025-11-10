# 🔐 Como Usar Token do GitHub

## ⚠️ IMPORTANTE: Segurança

**NUNCA compartilhe seu token do GitHub publicamente!**

O token do GitHub que você forneceu deve ser mantido em **segredo** e nunca compartilhado publicamente.

## 🎯 Para o Deploy no Cyclic.sh:

**Você NÃO precisa desse token!**

O Cyclic.sh faz login direto com GitHub OAuth, então você só precisa:
1. Acessar https://www.cyclic.sh/
2. Clicar em "Login with GitHub"
3. Autorizar o acesso
4. Pronto! Não precisa de token

## 🎯 Para o Deploy Automático (GitHub Actions + Fly.io):

Se você quiser usar o deploy automático via GitHub Actions, você precisa de um **token do Fly.io**, não do GitHub.

### Passo a Passo:

1. **Criar token no Fly.io:**
   - Acesse: https://fly.io/app/personal/tokens/new
   - Dê um nome (ex: "GitHub Actions")
   - Clique em "Create token"
   - **Copie o token** (você só verá uma vez!)

2. **Adicionar token no GitHub:**
   - Acesse: https://github.com/ViniGabrielBorba/a-ai/settings/secrets/actions
   - Clique em "New repository secret"
   - Nome: `FLY_API_TOKEN`
   - Valor: Cole o token do Fly.io (não o token do GitHub!)
   - Clique em "Add secret"

3. **Pronto!** Agora cada push no código fará deploy automático

## 🔒 Segurança do Token do GitHub:

Se você já compartilhou o token publicamente:

1. **Revogue o token imediatamente:**
   - Acesse: https://github.com/settings/tokens
   - Encontre o token
   - Clique em "Revoke"

2. **Crie um novo token** (se necessário):
   - Acesse: https://github.com/settings/tokens/new
   - Dê um nome
   - Selecione as permissões necessárias
   - Clique em "Generate token"
   - **Copie e guarde em local seguro**

## ✅ Recomendação:

Para o deploy no **Cyclic.sh**, você não precisa de nenhum token:
- ✅ Login direto com GitHub
- ✅ Mais seguro
- ✅ Mais fácil

**Use o Cyclic.sh - é mais simples e não precisa de tokens!** 🚀

---

**Para fazer deploy agora, siga o guia `DEPLOY_AGORA.md` - não precisa de token!** ✅

