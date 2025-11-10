# 🎯 Configuração Completa do Vercel

## 📋 Configurações Importantes:

### 1. Root Directory

**CRÍTICO:** Configure como `frontend`

No Vercel:
1. Vá em **"Settings"** → **"General"**
2. Em **"Root Directory"**, clique em **"Edit"**
3. Digite: `frontend`
4. Clique em **"Save"**

### 2. Build Settings

O Vercel detecta automaticamente, mas verifique:

- **Framework Preset:** `Next.js`
- **Build Command:** `npm run build` (automático)
- **Output Directory:** `.next` (automático)
- **Install Command:** `npm install` (automático)

### 3. Variáveis de Ambiente

Vá em **"Settings"** → **"Environment Variables"** e adicione:

#### Para Produção:

```
NEXT_PUBLIC_API_URL=https://a-ai-nhp-das.fly.dev/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

#### Para Preview (Pull Requests):

```
NEXT_PUBLIC_API_URL=https://a-ai-nhp-das.fly.dev/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

#### Para Desenvolvimento:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

**⚠️ IMPORTANTE:**
- Substitua `https://a-ai-nhp-das.fly.dev/api` pela URL real do seu backend
- Substitua `5511999999999` pelo seu número do WhatsApp

### 4. Node.js Version

O Vercel usa Node.js 18.x por padrão, que é compatível.

Se precisar mudar:
1. Vá em **"Settings"** → **"General"**
2. Em **"Node.js Version"**, escolha a versão

## 🔄 Deploy Automático:

O Vercel faz deploy automático:

- ✅ **Push na branch `main`** → Deploy em produção
- ✅ **Pull Request** → Preview automático
- ✅ **Sempre atualizado**

## 📝 Estrutura Esperada:

O Vercel espera encontrar:

```
frontend/
  ├── package.json
  ├── next.config.js
  ├── app/
  ├── components/
  └── ...
```

## ✅ Verificação:

Após o deploy, verifique:

1. **Build passou:** Veja em "Deployments"
2. **Site carrega:** Acesse a URL
3. **API funciona:** Teste buscar produtos
4. **Admin funciona:** Acesse `/admin`

## 🆘 Troubleshooting:

### Build falha:
- Verifique Root Directory: `frontend`
- Veja os logs de build
- Verifique se `package.json` está correto

### Site não carrega:
- Verifique se o build passou
- Veja os logs de runtime
- Verifique variáveis de ambiente

### API não funciona:
- Verifique `NEXT_PUBLIC_API_URL`
- Teste a API diretamente
- Verifique CORS no backend

---

**Configure tudo e faça o deploy!** 🚀

