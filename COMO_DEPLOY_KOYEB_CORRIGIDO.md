# 🔧 Deploy no Koyeb - Configuração Corrigida

## ❌ Erro Encontrado:

```
! Missing lockfile
! Couldn't determine Node.js package manager. Package manager lockfile not found.
```

## 🔍 Causa do Problema:

O Koyeb está procurando o `package-lock.json` na **raiz do repositório**, mas ele está na pasta `backend/`.

## ✅ Solução:

### 1. **Configurar Root Directory no Koyeb:**

No painel do Koyeb, configure:

- **Root Directory:** `backend` ⚠️ **IMPORTANTE!**
- **Build Command:** `npm install && npm run build`
- **Run Command:** `npm start`
- **Port:** `3001`

### 2. **Verificar se package-lock.json está no Git:**

O `package-lock.json` deve estar commitado no repositório. Verifique:

```bash
git ls-files | grep package-lock.json
```

Se não aparecer, adicione:

```bash
cd backend
git add package-lock.json
git commit -m "fix: Adiciona package-lock.json para Koyeb"
git push origin main
```

### 3. **Configuração Completa no Koyeb:**

#### Configurações da Aplicação:

- **Name:** `acai-mania-backend`
- **Region:** Escolha a mais próxima (ex: `fra` - Frankfurt)
- **Root Directory:** `backend` ⚠️ **CRÍTICO!**
- **Build Command:** `npm install && npm run build`
- **Run Command:** `npm start`
- **Port:** `3001`

#### Variáveis de Ambiente:

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

## 📝 Passo a Passo:

### 1. Verificar package-lock.json:

```bash
cd backend
ls package-lock.json
```

Se existir, está OK. Se não existir:

```bash
npm install
git add package-lock.json
git commit -m "fix: Adiciona package-lock.json"
git push origin main
```

### 2. Configurar Koyeb:

1. Acesse o painel do Koyeb
2. Vá em **"Settings"** ou **"Configuration"**
3. Configure:
   - **Root Directory:** `backend`
   - **Build Command:** `npm install && npm run build`
   - **Run Command:** `npm start`
   - **Port:** `3001`

### 3. Adicionar Variáveis de Ambiente:

1. Vá em **"Environment Variables"**
2. Adicione todas as variáveis listadas acima

### 4. Fazer Deploy Novamente:

1. Clique em **"Redeploy"** ou **"Deploy"**
2. Aguarde o build
3. Verifique os logs

## ✅ Checklist:

- [ ] `package-lock.json` existe na pasta `backend/`
- [ ] `package-lock.json` está commitado no Git
- [ ] Root Directory está configurado como `backend` no Koyeb
- [ ] Build Command está correto: `npm install && npm run build`
- [ ] Run Command está correto: `npm start`
- [ ] Port está configurada: `3001`
- [ ] Todas as variáveis de ambiente estão configuradas

## 🆘 Se Ainda Não Funcionar:

1. **Verifique os logs completos** no Koyeb
2. **Confirme que o Root Directory está como `backend`**
3. **Verifique se o package-lock.json está no Git:**
   ```bash
   git ls-files backend/package-lock.json
   ```

4. **Se não estiver, adicione:**
   ```bash
   git add backend/package-lock.json
   git commit -m "fix: Adiciona package-lock.json"
   git push origin main
   ```

---

**O problema é o Root Directory! Configure como `backend` no Koyeb!** 🚀

