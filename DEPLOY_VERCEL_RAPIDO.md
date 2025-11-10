# ⚡ Deploy Rápido no Vercel (5 minutos)

## 🚀 Passo a Passo Simplificado:

### 1. Acessar Vercel:
https://vercel.com/

### 2. Login com GitHub:
- Clique em "Sign Up" ou "Login"
- Escolha "Continue with GitHub"
- Autorize

### 3. Criar Projeto:
- Clique em "Add New..." → "Project"
- Selecione: `ViniGabrielBorba/a-ai`
- Clique em "Import"

### 4. Configurar:
- **Root Directory:** `frontend` ⚠️ **IMPORTANTE!**
- **Framework:** Next.js (automático)
- Clique em "Deploy"

### 5. Adicionar Variáveis:
Antes ou depois do deploy, adicione:

**Settings → Environment Variables:**

```
NEXT_PUBLIC_API_URL=https://a-ai-nhp-das.fly.dev/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

**⚠️ IMPORTANTE:**
- Substitua a URL do backend pela sua URL real
- Substitua o número do WhatsApp pelo seu

### 6. Pronto! ✅

Você receberá uma URL como:
```
https://acai-mania.vercel.app
```

## 📝 Checklist Rápido:

- [ ] Login no Vercel com GitHub
- [ ] Importar repositório `ViniGabrielBorba/a-ai`
- [ ] Root Directory: `frontend`
- [ ] Variável `NEXT_PUBLIC_API_URL` configurada
- [ ] Deploy feito
- [ ] Site funcionando

## 🆘 Se Der Erro:

1. **Verifique Root Directory:** Deve ser `frontend`
2. **Verifique variáveis:** `NEXT_PUBLIC_API_URL` deve estar configurada
3. **Veja os logs:** No Vercel, vá em "Deployments" → Clique no deploy → Veja "Build Logs"

---

**É só isso! Muito fácil!** 🎉

