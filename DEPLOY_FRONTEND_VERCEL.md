# 🚀 Deploy do Frontend no Vercel - Passo a Passo Completo

## 📋 Pré-requisitos:

1. Conta no [Vercel](https://vercel.com/) (gratuita)
2. Repositório no GitHub: `ViniGabrielBorba/a-ai`
3. Código commitado e enviado para o GitHub

## 🎯 Passo a Passo:

### 1. Criar Conta no Vercel

1. Acesse: https://vercel.com/
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o acesso ao GitHub
5. Pronto! Você está logado

### 2. Criar Novo Projeto

1. No dashboard do Vercel, clique em **"Add New..."** → **"Project"**
2. Você verá seus repositórios do GitHub
3. Encontre e selecione: **`ViniGabrielBorba/a-ai`**
4. Clique em **"Import"**

### 3. Configurar Projeto

O Vercel vai detectar automaticamente que é um projeto Next.js! Configure:

#### Configurações do Projeto:

- **Project Name:** `acai-mania` (ou o nome que você quiser)
- **Framework Preset:** `Next.js` (já detectado automaticamente)
- **Root Directory:** `frontend` ⚠️ **IMPORTANTE!**
- **Build Command:** `npm run build` (ou deixe automático)
- **Output Directory:** `.next` (automático)
- **Install Command:** `npm install` (automático)

### 4. Configurar Variáveis de Ambiente

Antes de fazer deploy, configure as variáveis de ambiente:

Clique em **"Environment Variables"** e adicione:

```
NEXT_PUBLIC_API_URL=https://a-ai-nhp-das.fly.dev/api
```

**⚠️ IMPORTANTE:** 
- Se você ainda não fez deploy do backend, use a URL do backend que você vai usar
- Se já fez deploy no Fly.io, use: `https://a-ai-nhp-das.fly.dev/api`
- Se fez deploy no Cyclic.sh, use: `https://acai-mania-backend.cyclic.app/api`
- Se fez deploy no Koyeb, use a URL do Koyeb

**Outras variáveis (se necessário):**

```
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Substitua pelo seu número do WhatsApp (formato: código do país + DDD + número, sem espaços).

### 5. Fazer Deploy

1. Clique em **"Deploy"**
2. Aguarde alguns minutos (2-5 minutos)
3. O Vercel vai:
   - Instalar dependências
   - Fazer build do projeto
   - Fazer deploy
   - Gerar uma URL

### 6. Verificar Deploy

Após o deploy, você receberá uma URL como:
```
https://acai-mania.vercel.app
```

Ou:
```
https://a-ai-xxxxx.vercel.app
```

### 7. Testar o Site

1. Acesse a URL fornecida pelo Vercel
2. Teste as páginas:
   - Home: `https://seu-site.vercel.app/`
   - Cardápio: `https://seu-site.vercel.app/cardapio`
   - Carrinho: `https://seu-site.vercel.app/carrinho`
   - Admin: `https://seu-site.vercel.app/admin`

## ✅ Configuração Completa:

### Variáveis de Ambiente no Vercel:

```
NEXT_PUBLIC_API_URL=https://a-ai-nhp-das.fly.dev/api
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

**⚠️ Lembre-se:**
- Substitua `https://a-ai-nhp-das.fly.dev/api` pela URL real do seu backend
- Substitua `5511999999999` pelo seu número do WhatsApp

### Root Directory:

**CRÍTICO:** Configure o Root Directory como `frontend`

No Vercel:
1. Vá em **"Settings"** → **"General"**
2. Em **"Root Directory"**, clique em **"Edit"**
3. Digite: `frontend`
4. Salve

## 🔄 Deploy Automático:

O Vercel faz deploy automático toda vez que você faz push no GitHub!

- ✅ Push na branch `main` → Deploy automático
- ✅ Pull Request → Preview automático
- ✅ Sempre atualizado

## 📝 Checklist:

- [ ] Conta criada no Vercel
- [ ] Repositório conectado: `ViniGabrielBorba/a-ai`
- [ ] Root Directory configurado: `frontend`
- [ ] Variável `NEXT_PUBLIC_API_URL` configurada
- [ ] Variável `NEXT_PUBLIC_WHATSAPP_NUMBER` configurada (se necessário)
- [ ] Deploy feito
- [ ] Site funcionando

## 🆘 Problemas Comuns:

### Erro: "Build failed"
**Solução:** 
- Verifique se o Root Directory está como `frontend`
- Verifique se o `package.json` está na pasta `frontend/`
- Veja os logs de build no Vercel

### Erro: "Cannot find module"
**Solução:**
- Verifique se todas as dependências estão no `package.json`
- O Vercel instala automaticamente, mas verifique os logs

### Erro: "API URL not found"
**Solução:**
- Verifique se `NEXT_PUBLIC_API_URL` está configurada
- Verifique se a URL do backend está correta
- Certifique-se de que o backend está rodando

### Site não carrega produtos
**Solução:**
- Verifique se `NEXT_PUBLIC_API_URL` está correto
- Verifique se o backend está acessível
- Teste a API diretamente: `https://seu-backend.com/api/products`

## 🎯 Após o Deploy:

1. **Copie a URL do frontend:** `https://seu-site.vercel.app`
2. **Atualize o backend:**
   - No Fly.io: `fly secrets set FRONTEND_URL=https://seu-site.vercel.app`
   - No Cyclic.sh: Atualize a variável `FRONTEND_URL`
   - No Koyeb: Atualize a variável `FRONTEND_URL`

3. **Teste tudo:**
   - Navegação
   - Produtos
   - Carrinho
   - Checkout
   - Admin

## 🔗 URLs Importantes:

- **Frontend:** `https://seu-site.vercel.app`
- **Backend:** `https://seu-backend.com/api`
- **Admin:** `https://seu-site.vercel.app/admin`

## 📱 Domínio Customizado (Opcional):

Você pode adicionar um domínio customizado:

1. No Vercel, vá em **"Settings"** → **"Domains"**
2. Adicione seu domínio
3. Configure o DNS conforme instruções
4. Pronto!

---

**Siga estes passos e em 5 minutos seu frontend estará no ar!** 🚀

