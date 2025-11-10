# 🔧 Solução: Erro de Build no Cyclic.sh

## 🔍 Problemas Comuns e Soluções:

### 1. **Root Directory Incorreto**

**Problema:** O Cyclic.sh não encontra o `package.json`

**Solução:** Verifique se o **Root Directory** está configurado como:
```
backend
```

### 2. **Build Command Incorreto**

**Problema:** O comando de build não está funcionando

**Solução:** Use exatamente este comando:
```
npm install && npm run build
```

### 3. **Start Command Incorreto**

**Problema:** O comando de start não está funcionando

**Solução:** Use exatamente este comando:
```
npm start
```

### 4. **Porta Não Configurada**

**Problema:** A aplicação não sabe qual porta usar

**Solução:** Adicione a variável de ambiente:
```
PORT=3001
```

### 5. **Dependências Faltando**

**Problema:** Alguma dependência não está sendo instalada

**Solução:** Verifique se o `package.json` está completo

## ✅ Configuração Correta no Cyclic.sh:

### Configurações da Aplicação:

- **App Name:** `acai-mania-backend`
- **Runtime:** `Node.js 18.x` (ou `Node.js 20.x`)
- **Root Directory:** `backend` ⚠️ **IMPORTANTE!**
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Port:** `3001`

### Variáveis de Ambiente Obrigatórias:

```
PORT=3001
NODE_ENV=production
SUPABASE_URL=https://bfxlarmvnmcrjsrsbqnq.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzY5NDUsImV4cCI6MjA3ODI1Mjk0NX0.cCM4iEG1JnyMWz-J-T_JiNxlkdbElKzC5KoZAMUbYJM
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmeGxhcm12bm1jcmpzcnNicW5xIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjY3Njk0NSwiZXhwIjoyMDc4MjUyOTQ1fQ.HOuudWnCgn0_4DshT9F0dGmTmrWhsDtNg_1WKEhAB2w
JWT_SECRET=acai_do_para_jwt_secret_2024_altere_esta_senha
FRONTEND_URL=http://localhost:3000
PAGSEGURO_TOKEN=seu_token_pagseguro_aqui
PAGSEGURO_EMAIL=seu_email_pagseguro@email.com
PAGSEGURO_ENV=sandbox
ADMIN_EMAIL=admin@acaidopara.com
ADMIN_PASSWORD=admin123
```

## 🔍 Como Verificar os Logs de Build:

1. **No painel do Cyclic.sh:**
   - Vá em "Logs" ou "Build Logs"
   - Veja os erros específicos
   - Copie a mensagem de erro

2. **Erros Comuns nos Logs:**

### Erro: "Cannot find module"
**Solução:** Verifique se todas as dependências estão no `package.json`

### Erro: "tsc: command not found"
**Solução:** O TypeScript não está instalado. Verifique se `typescript` está em `devDependencies`

### Erro: "Cannot find file 'tsconfig.json'"
**Solução:** Verifique se o `tsconfig.json` está na pasta `backend/`

### Erro: "Port 3001 is already in use"
**Solução:** Use a variável `PORT` da plataforma (não defina porta fixa)

### Erro: "Build failed"
**Solução:** Verifique se o `npm run build` funciona localmente

## 🛠️ Testar Build Localmente:

Antes de fazer deploy, teste localmente:

```bash
cd backend
npm install
npm run build
npm start
```

Se funcionar localmente, deve funcionar no Cyclic.sh!

## 📝 Checklist de Verificação:

- [ ] Root Directory está como `backend`
- [ ] Build Command está correto: `npm install && npm run build`
- [ ] Start Command está correto: `npm start`
- [ ] Port está configurada: `3001`
- [ ] Variável `PORT=3001` está nas variáveis de ambiente
- [ ] `package.json` está na pasta `backend/`
- [ ] `tsconfig.json` está na pasta `backend/`
- [ ] Build funciona localmente

## 🔄 Tentar Novamente:

1. **Verifique todas as configurações acima**
2. **Veja os logs de build no Cyclic.sh**
3. **Copie a mensagem de erro exata**
4. **Tente fazer deploy novamente**

## 🆘 Se Ainda Não Funcionar:

1. **Verifique os logs completos** no painel do Cyclic.sh
2. **Copie a mensagem de erro completa**
3. **Verifique se o build funciona localmente:**
   ```bash
   cd backend
   npm install
   npm run build
   ```

4. **Se o build local funcionar, o problema pode ser:**
   - Configuração incorreta no Cyclic.sh
   - Variáveis de ambiente faltando
   - Root Directory incorreto

---

**Verifique os logs de build no Cyclic.sh e me envie a mensagem de erro completa para ajudar melhor!** 🔍

