# 🔧 Solução: Erro ao Buscar Entregadores

## ❌ Problema

Ao clicar na aba "Entregadores" no painel administrativo, aparece o erro:
```
Erro ao buscar entregadores.
Verifique se está autenticado e se o servidor está rodando.
```

---

## ✅ Soluções

### 1️⃣ Verificar Autenticação

**Problema:** Token de autenticação pode estar expirado ou inválido.

**Solução:**
1. Faça logout e login novamente no painel admin
2. Verifique se o token está sendo salvo no `localStorage`
3. Abra o Console do navegador (F12) e verifique se há erros de autenticação

**Como verificar:**
1. Abra o Console do navegador (F12 → Console)
2. Procure por mensagens como:
   - `Token de autenticação não encontrado`
   - `401 Unauthorized`
   - `403 Forbidden`

---

### 2️⃣ Verificar URL do Backend

**Problema:** A variável `NEXT_PUBLIC_API_URL` pode estar incorreta ou não configurada.

**Solução:**
1. No Vercel, vá em **Settings** → **Environment Variables**
2. Verifique se `NEXT_PUBLIC_API_URL` está configurada
3. O valor deve ser: `https://SEU-BACKEND.onrender.com/api`
4. **Importante:** Deve terminar com `/api`

**Como verificar:**
1. Abra o Console do navegador (F12 → Console)
2. Procure por: `Buscando entregadores de:`
3. Verifique se a URL está correta

---

### 3️⃣ Verificar se o Backend está Rodando

**Problema:** O backend pode não estar rodando ou pode estar com problemas.

**Solução:**
1. Acesse o painel do Render: https://dashboard.render.com
2. Verifique se o serviço está **"Live"** (verde)
3. Verifique os logs do Render para ver se há erros
4. Teste o health check: `https://SEU-BACKEND.onrender.com/api/health`

**Como testar:**
1. Abra uma nova aba no navegador
2. Acesse: `https://SEU-BACKEND.onrender.com/api/health`
3. Deve retornar: `{"status":"ok",...}`

---

### 4️⃣ Verificar Tabela no Supabase

**Problema:** A tabela `delivery_riders` pode não existir no Supabase.

**Solução:**
1. Acesse o Supabase Dashboard: https://supabase.com/dashboard
2. Vá em **Table Editor** → **delivery_riders**
3. Verifique se a tabela existe
4. Se não existir, crie a tabela com os seguintes campos:

```sql
CREATE TABLE delivery_riders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  birth_date DATE NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  bike_plate TEXT NOT NULL,
  bike_color TEXT NOT NULL,
  bike_model TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

### 5️⃣ Verificar Variáveis de Ambiente no Render

**Problema:** As variáveis de ambiente do Supabase podem estar incorretas.

**Solução:**
1. No Render, vá em **Environment**
2. Verifique se as seguintes variáveis estão configuradas:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET`

**Como verificar:**
1. No Render, vá em **Logs**
2. Procure por erros relacionados ao Supabase
3. Exemplo: `Error connecting to Supabase`

---

### 6️⃣ Verificar CORS

**Problema:** O backend pode estar bloqueando requisições do frontend.

**Solução:**
1. No Render, verifique se a variável `FRONTEND_URL` está configurada
2. O valor deve ser: `https://SEU-SITE.vercel.app`
3. Verifique os logs do Render para erros de CORS

**Como verificar:**
1. Abra o Console do navegador (F12 → Console)
2. Procure por erros como:
   - `CORS policy`
   - `Access-Control-Allow-Origin`
   - `Blocked by CORS policy`

---

## 🔍 Diagnóstico Passo a Passo

### Passo 1: Verificar Console do Navegador

1. Abra o painel admin
2. Abra o Console (F12 → Console)
3. Clique na aba "Entregadores"
4. Veja as mensagens no console:
   - `Buscando entregadores de: https://...`
   - Erros em vermelho

### Passo 2: Verificar Network (Rede)

1. Abra o DevTools (F12)
2. Vá na aba **Network** (Rede)
3. Clique na aba "Entregadores"
4. Procure pela requisição `delivery-riders`
5. Clique nela e veja:
   - **Status:** Deve ser `200 OK`
   - **Headers:** Verifique o `Authorization` header
   - **Response:** Veja a resposta do servidor

### Passo 3: Verificar Logs do Render

1. No Render, vá em **Logs**
2. Procure por:
   - Erros relacionados a `delivery-riders`
   - Erros de autenticação
   - Erros do Supabase

---

## 🎯 Solução Rápida

Se nada funcionar, tente:

1. **Fazer logout e login novamente:**
   - Clique em "Sair" no painel admin
   - Faça login novamente

2. **Limpar cache do navegador:**
   - Pressione `Ctrl + Shift + R` (Windows) ou `Cmd + Shift + R` (Mac)
   - Ou limpe o cache manualmente

3. **Verificar se o backend está funcionando:**
   - Acesse: `https://SEU-BACKEND.onrender.com/api/health`
   - Deve retornar `{"status":"ok"}`

4. **Fazer novo deploy:**
   - No Vercel, faça um novo deploy
   - No Render, verifique se o serviço está rodando

---

## 📝 Checklist de Verificação

Antes de reportar o problema, verifique:

- [ ] Token de autenticação está presente (verificar localStorage)
- [ ] Variável `NEXT_PUBLIC_API_URL` está configurada no Vercel
- [ ] Backend está rodando no Render (status "Live")
- [ ] Health check do backend funciona
- [ ] Tabela `delivery_riders` existe no Supabase
- [ ] Variáveis de ambiente do Supabase estão configuradas no Render
- [ ] Variável `FRONTEND_URL` está configurada no Render
- [ ] Console do navegador não mostra erros de CORS

---

## 🆘 Se Ainda Não Funcionar

1. **Verifique os logs completos:**
   - Console do navegador (F12)
   - Logs do Render
   - Logs do Vercel

2. **Teste a API diretamente:**
   - Use Postman ou Insomnia
   - Faça uma requisição GET para: `https://SEU-BACKEND.onrender.com/api/delivery-riders`
   - Inclua o header: `Authorization: Bearer SEU_TOKEN`

3. **Verifique se outras abas funcionam:**
   - A aba "Pedidos" funciona?
   - A aba "Produtos" funciona?
   - Se sim, o problema é específico da rota de entregadores

---

## ✅ Melhorias Implementadas

O código foi atualizado para:

1. ✅ Verificar se o token existe antes de fazer a requisição
2. ✅ Mostrar mensagens de erro mais detalhadas
3. ✅ Tratar erros de autenticação (401/403) automaticamente
4. ✅ Adicionar logs no console para facilitar debug
5. ✅ Definir array vazio em caso de erro para evitar crashes

---

**Após seguir esses passos, o problema deve ser resolvido!** 🚀

