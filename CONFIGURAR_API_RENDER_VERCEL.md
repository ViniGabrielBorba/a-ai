# 🔗 Configurar URL do Backend Render no Vercel

## 🎯 Objetivo

Configurar a variável `NEXT_PUBLIC_API_URL` no Vercel para que o frontend se conecte ao backend no Render.

---

## 📋 Passo a Passo Detalhado

### 1️⃣ Encontrar a URL do Backend no Render

1. Acesse o painel do Render: https://dashboard.render.com
2. Clique no seu serviço (ex: `a-ai-backend`)
3. No topo da página, você verá a **URL do seu serviço**
4. A URL geralmente é algo como: `https://a-ai-backend.onrender.com`
5. **Copie essa URL completa!**

**Exemplo de URL:**
```
https://a-ai-backend.onrender.com
```

**⚠️ IMPORTANTE:** 
- Não inclua `/api` ainda, vamos adicionar depois
- A URL pode levar alguns minutos para ficar ativa após o primeiro deploy

---

### 2️⃣ Adicionar Variável no Vercel

1. Acesse o painel do Vercel: https://vercel.com/dashboard
2. Clique no seu projeto (frontend)
3. Vá em **"Settings"** (Configurações)
4. No menu lateral, clique em **"Environment Variables"** (Variáveis de Ambiente)
5. Você verá uma lista de variáveis (pode estar vazia)

---

### 3️⃣ Adicionar a Variável NEXT_PUBLIC_API_URL

1. Clique no botão **"+ Add New"** ou **"+ Adicionar"**
2. No campo **"Key"** (Chave), digite:
   ```
   NEXT_PUBLIC_API_URL
   ```
3. No campo **"Value"** (Valor), cole a URL do Render e adicione `/api` no final:
   ```
   https://a-ai-backend.onrender.com/api
   ```
   **⚠️ IMPORTANTE:** 
   - Substitua `a-ai-backend` pelo nome do SEU serviço no Render
   - **SEMPRE adicione `/api` no final!**
   - Não adicione barra no final: `/api` ✅ (correto) vs `/api/` ❌ (errado)

4. Selecione os ambientes onde a variável será usada:
   - ✅ **Production** (Produção)
   - ✅ **Preview** (Pré-visualização)
   - ✅ **Development** (Desenvolvimento) - opcional

5. Clique em **"Save"** (Salvar)

---

### 4️⃣ Verificar se a Variável foi Adicionada

Você deve ver na lista:

| Key | Value | Environments |
|-----|-------|--------------|
| `NEXT_PUBLIC_API_URL` | `https://a-ai-backend.onrender.com/api` | Production, Preview |

---

### 5️⃣ Fazer Novo Deploy

Após adicionar a variável, você precisa fazer um novo deploy:

**Opção 1: Deploy Automático**
- O Vercel pode fazer deploy automático se você tiver integração com GitHub
- Aguarde alguns minutos

**Opção 2: Deploy Manual**
1. Vá em **"Deployments"** (Deployments)
2. Clique nos **3 pontinhos** (⋯) do último deployment
3. Clique em **"Redeploy"** (Reimplantar)
4. Aguarde o deploy terminar

---

## ✅ Verificação

### 1. Verificar se o Backend está Funcionando

1. Abra uma nova aba no navegador
2. Acesse: `https://a-ai-backend.onrender.com/api/health`
3. Você deve ver uma resposta JSON:
   ```json
   {
     "status": "ok",
     "message": "API está funcionando!",
     "timestamp": "2024-01-01T12:00:00.000Z"
   }
   ```

**Se não funcionar:**
- Verifique se o backend está deployado no Render
- Verifique os logs do Render para ver se há erros
- Aguarde alguns minutos (o Render pode estar iniciando o serviço)

---

### 2. Verificar se o Frontend está Conectando

1. Acesse seu site no Vercel
2. Abra o **Console do Navegador** (F12 → Console)
3. Tente fazer uma ação que chama a API (ex: ver cardápio)
4. Você deve ver requisições para: `https://a-ai-backend.onrender.com/api/...`

**Se aparecer erro de CORS:**
- Verifique se a variável `FRONTEND_URL` está configurada no Render
- Verifique se a URL do frontend no Render está correta

---

## 🔧 Troubleshooting

### Erro: "Cannot connect to server"

**Possíveis causas:**
1. ❌ URL do backend está errada
2. ❌ Backend não está rodando no Render
3. ❌ Variável não foi salva no Vercel
4. ❌ Deploy não foi feito após adicionar a variável

**Soluções:**
1. ✅ Verifique a URL no Render e copie exatamente
2. ✅ Verifique os logs do Render para ver se o backend está rodando
3. ✅ Verifique se a variável está salva no Vercel
4. ✅ Faça um novo deploy no Vercel

---

### Erro: "CORS policy"

**Causa:** O backend não está permitindo requisições do frontend.

**Solução:**
1. No Render, adicione a variável `FRONTEND_URL` com a URL do seu frontend no Vercel
2. Exemplo: `https://seu-projeto.vercel.app`
3. Faça um novo deploy no Render

---

### Variável não funciona após adicionar

**Soluções:**
1. ✅ Verifique se a variável começa com `NEXT_PUBLIC_` (obrigatório!)
2. ✅ Faça um novo deploy no Vercel
3. ✅ Limpe o cache do navegador (Ctrl+Shift+R)
4. ✅ Verifique se a variável está nos ambientes corretos (Production, Preview)

---

## 📝 Checklist Final

Antes de testar, verifique:

- [ ] URL do backend copiada do Render
- [ ] Variável `NEXT_PUBLIC_API_URL` adicionada no Vercel
- [ ] Valor da variável: `https://SEU-BACKEND.onrender.com/api`
- [ ] Variável salva no Vercel
- [ ] Novo deploy feito no Vercel
- [ ] Backend está rodando no Render (verificar logs)
- [ ] Health check do backend funciona: `https://SEU-BACKEND.onrender.com/api/health`

---

## 🎉 Pronto!

Após seguir esses passos, seu frontend deve conseguir se conectar ao backend no Render!

**Se ainda tiver problemas, verifique:**
1. Logs do Render (para ver erros do backend)
2. Logs do Vercel (para ver erros do frontend)
3. Console do navegador (para ver erros de requisições)

---

**Dica:** Sempre teste o health check do backend primeiro antes de testar o frontend! 🚀

