# 🔐 Como Acessar o Painel Administrativo

## 🎯 Acesso Rápido

### 1️⃣ URL da Página Admin

Acesse a página administrativa através da URL:

```
https://SEU-SITE-VERCEL.vercel.app/admin
```

**Exemplo:**
```
https://seu-projeto.vercel.app/admin
```

---

## 🔑 Credenciais Padrão

### Credenciais de Login:

- **Email:** `admin@acaidopara.com`
- **Senha:** `admin123`

---

## ⚠️ IMPORTANTE: Criar Admin no Banco de Dados

Antes de fazer login, você precisa garantir que o usuário admin foi criado no banco de dados.

### Opção 1: Admin já foi criado automaticamente

Se você configurou as variáveis `ADMIN_EMAIL` e `ADMIN_PASSWORD` no Render, o admin pode ter sido criado automaticamente.

**Teste fazendo login com as credenciais acima.**

---

### Opção 2: Criar Admin Manualmente (se necessário)

Se o login não funcionar, você precisa criar o admin no banco de dados.

#### Método 1: Via Script (Recomendado)

1. **Acesse o terminal do Render (ou localmente):**

   **No Render:**
   - Vá em **"Shell"** no painel do Render
   - Ou use SSH se disponível

   **Localmente:**
   ```bash
   cd backend
   ```

2. **Execute o script de seed:**
   ```bash
   npm run seed:admin
   ```

3. **O script vai:**
   - Verificar se o admin já existe
   - Criar o admin com as credenciais das variáveis de ambiente
   - Ou usar as credenciais padrão se as variáveis não estiverem configuradas

---

#### Método 2: Via Supabase Dashboard (Alternativa)

1. Acesse o Supabase Dashboard: https://supabase.com/dashboard
2. Vá em **"Table Editor"** → **"admins"**
3. Clique em **"Insert row"** (Inserir linha)
4. Preencha:
   - **email:** `admin@acaidopara.com`
   - **password:** (você precisa gerar o hash da senha)

**⚠️ Problema:** A senha precisa estar em hash (criptografada). Use o script para isso!

---

#### Método 3: Criar via API (Se tiver endpoint)

Você pode criar um endpoint temporário para criar o admin, mas o método mais seguro é usar o script.

---

## 📝 Passo a Passo Completo

### 1. Verificar se o Admin Existe

1. Acesse: `https://SEU-SITE-VERCEL.vercel.app/admin`
2. Tente fazer login com:
   - Email: `admin@acaidopara.com`
   - Senha: `admin123`

**Se funcionar:** ✅ Pronto! Você já tem acesso.

**Se não funcionar:** Continue para o próximo passo.

---

### 2. Criar o Admin no Banco

#### No Render (via Shell):

1. No painel do Render, vá em **"Shell"** (se disponível)
2. Execute:
   ```bash
   cd backend
   npm run seed:admin
   ```

#### Localmente (para testar):

1. Abra o terminal
2. Navegue até a pasta do backend:
   ```bash
   cd "C:\Users\vinicius\Desktop\Sistema de lanches\backend"
   ```
3. Execute:
   ```bash
   npm run seed:admin
   ```

**Resultado esperado:**
```
✅ Admin criado com sucesso!
Email: admin@acaidopara.com
```

---

### 3. Fazer Login

1. Acesse: `https://SEU-SITE-VERCEL.vercel.app/admin`
2. Digite:
   - **Email:** `admin@acaidopara.com`
   - **Senha:** `admin123`
3. Clique em **"Entrar"**

---

## 🎉 O que você pode fazer no Painel Admin?

Após fazer login, você terá acesso a:

### 📦 **Produtos**
- Ver todos os produtos
- Adicionar novos produtos
- Editar produtos existentes
- Deletar produtos

### 📋 **Pedidos**
- Ver todos os pedidos
- Ver detalhes de cada pedido
- Atualizar status dos pedidos
- Ver informações de entrega

### 🏍️ **Entregadores**
- Ver todos os entregadores
- Adicionar novos entregadores
- Editar entregadores
- Ativar/desativar entregadores

---

## 🔒 Segurança

### ⚠️ IMPORTANTE: Alterar Senha Padrão

A senha padrão `admin123` é **muito fraca** e deve ser alterada!

**Como alterar:**

1. No Supabase Dashboard, vá em **"Table Editor"** → **"admins"**
2. Encontre o admin com email `admin@acaidopara.com`
3. **NÃO altere diretamente!** A senha precisa estar em hash.

**Melhor opção:** Criar um endpoint para alterar senha (pode ser implementado depois).

**Por enquanto:** Mantenha a senha padrão, mas **não compartilhe publicamente!**

---

## 🆘 Problemas Comuns

### Erro: "Credenciais inválidas"

**Possíveis causas:**
1. ❌ Admin não foi criado no banco de dados
2. ❌ Email ou senha estão incorretos
3. ❌ Backend não está conectado ao Supabase

**Soluções:**
1. ✅ Execute `npm run seed:admin` para criar o admin
2. ✅ Verifique se está usando: `admin@acaidopara.com` e `admin123`
3. ✅ Verifique as variáveis de ambiente no Render (`SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`)

---

### Erro: "Erro de conexão"

**Causa:** Frontend não está conseguindo se conectar ao backend.

**Solução:**
1. ✅ Verifique se a variável `NEXT_PUBLIC_API_URL` está configurada no Vercel
2. ✅ Verifique se o backend está rodando no Render
3. ✅ Teste o health check: `https://SEU-BACKEND.onrender.com/api/health`

---

### Admin não aparece após criar

**Causa:** O script pode ter falhado silenciosamente.

**Solução:**
1. ✅ Verifique os logs do script
2. ✅ Verifique se as variáveis de ambiente estão corretas
3. ✅ Verifique se a tabela `admins` existe no Supabase

---

## 📋 Checklist

Antes de acessar o painel, verifique:

- [ ] Backend está rodando no Render
- [ ] Frontend está rodando no Vercel
- [ ] Variável `NEXT_PUBLIC_API_URL` configurada no Vercel
- [ ] Admin foi criado no banco de dados (via script)
- [ ] Credenciais corretas: `admin@acaidopara.com` / `admin123`

---

## 🎯 Resumo Rápido

1. **URL:** `https://SEU-SITE.vercel.app/admin`
2. **Email:** `admin@acaidopara.com`
3. **Senha:** `admin123`
4. **Se não funcionar:** Execute `npm run seed:admin` no backend

---

**Pronto! Agora você pode acessar o painel administrativo!** 🚀

