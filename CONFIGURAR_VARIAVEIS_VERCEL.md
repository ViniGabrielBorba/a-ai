# 🔧 Configurar Variáveis de Ambiente no Vercel

## 📋 Variáveis Necessárias:

Você precisa adicionar **2 variáveis** no Vercel:

### 1. **NEXT_PUBLIC_API_URL** (URL do Backend)

### 2. **NEXT_PUBLIC_WHATSAPP_NUMBER** (Número do WhatsApp)

---

## 🎯 Passo a Passo:

### Passo 1: Acessar Variáveis de Ambiente

1. No Vercel, vá em **"Settings"** → **"Environment Variables"**
2. Ou clique em **"Variáveis de ambiente"** na tela de configuração do projeto

### Passo 2: Adicionar Primeira Variável

1. Clique em **"+ Adicionar mais"** (ou **"+ Add more"**)
2. No campo **"Chave"** (Key), digite:
   ```
   NEXT_PUBLIC_API_URL
   ```
3. No campo **"Valor"** (Value), coloque a URL do seu backend:

   **Se o backend ainda NÃO está deployado:**
   ```
   http://localhost:3001/api
   ```
   ⚠️ **Nota:** Isso só funciona para testes locais. Depois você precisa atualizar!

   **Se o backend JÁ está deployado:**
   
   - **Fly.io:** `https://a-ai-nhp-das.fly.dev/api`
   - **Cyclic.sh:** `https://acai-mania-backend.cyclic.app/api`
   - **Koyeb:** `https://seu-app.koyeb.app/api`
   - **Outro:** Use a URL do seu backend + `/api`

4. Clique em **"Salvar"** ou **"Save"**

### Passo 3: Adicionar Segunda Variável

1. Clique em **"+ Adicionar mais"** novamente
2. No campo **"Chave"** (Key), digite:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER
   ```
3. No campo **"Valor"** (Value), coloque seu número do WhatsApp:
   ```
   5511999999999
   ```
   **Formato:** Código do país + DDD + Número (sem espaços, sem parênteses, sem hífen)
   
   **Exemplos:**
   - Brasil (SP): `5511999999999` (55 = Brasil, 11 = DDD, 999999999 = número)
   - Brasil (RJ): `5521999999999` (55 = Brasil, 21 = DDD, 999999999 = número)

4. Clique em **"Salvar"** ou **"Save"**

---

## ✅ Resultado Final:

Você deve ter **2 variáveis** configuradas:

| Chave | Valor |
|-------|-------|
| `NEXT_PUBLIC_API_URL` | `https://seu-backend.com/api` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `5511999999999` |

---

## 🔄 Após Adicionar:

1. **Salve** as alterações
2. O Vercel vai fazer um **novo deploy automaticamente**
3. Aguarde alguns minutos
4. Teste o site!

---

## ⚠️ IMPORTANTE:

### Sobre NEXT_PUBLIC_API_URL:

- Se o backend **ainda não está deployado**, use `http://localhost:3001/api` temporariamente
- **Depois que fizer deploy do backend**, você **DEVE atualizar** para a URL de produção
- Exemplo: Se deployou no Fly.io, use `https://a-ai-nhp-das.fly.dev/api`

### Sobre NEXT_PUBLIC_WHATSAPP_NUMBER:

- Use o formato: `código do país + DDD + número`
- Sem espaços, sem parênteses, sem hífen
- Exemplo: `5511999999999` (Brasil, DDD 11, número 999999999)

---

## 🆘 Problemas Comuns:

### Erro: "API não encontrada"
**Solução:** Verifique se `NEXT_PUBLIC_API_URL` está correto e se o backend está rodando

### Erro: "WhatsApp não abre"
**Solução:** Verifique se `NEXT_PUBLIC_WHATSAPP_NUMBER` está no formato correto (sem espaços)

### Variáveis não funcionam
**Solução:** 
1. Verifique se salvou as variáveis
2. Faça um novo deploy (ou aguarde o deploy automático)
3. Variáveis que começam com `NEXT_PUBLIC_` são acessíveis no navegador

---

## 📝 Checklist:

- [ ] Variável `NEXT_PUBLIC_API_URL` adicionada
- [ ] Variável `NEXT_PUBLIC_WHATSAPP_NUMBER` adicionada
- [ ] Valores configurados corretamente
- [ ] Alterações salvas
- [ ] Deploy feito (automático ou manual)

---

**Configure essas 2 variáveis e seu site vai funcionar perfeitamente!** 🚀

