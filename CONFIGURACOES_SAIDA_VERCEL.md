# 📤 Configurações de Saída no Vercel

## 🎯 Para Next.js com Root Directory `frontend`:

### ✅ Configurações Recomendadas:

#### 1. **Comando de Construção (Build Command):**

**Deixe DESLIGADO (automático)** ou configure:

```
cd frontend && npm run build
```

**Ou simplesmente:**
```
npm run build
```

(O Vercel já executa dentro do Root Directory, então `cd frontend` pode não ser necessário)

#### 2. **Diretório de Saída (Output Directory):**

**Deixe DESLIGADO (automático)** - O Vercel detecta automaticamente:

- **Next.js padrão:** `.next`
- **Vercel detecta automaticamente** quando o Root Directory é `frontend`

**Se precisar configurar manualmente:**
```
.next
```

**⚠️ IMPORTANTE:** 
- Não use `frontend/.next` (o Vercel já está no diretório `frontend`)
- Use apenas `.next`

#### 3. **Comando de Instalação (Installation Command):**

**Deixe DESLIGADO (automático)** ou configure:

```
npm install
```

**Ou:**
```
cd frontend && npm install
```

## ✅ Configuração Ideal (Recomendada):

### Deixe TUDO Automático! ✅

O Vercel detecta automaticamente Next.js quando:
- ✅ Root Directory está como `frontend`
- ✅ `package.json` está em `frontend/`
- ✅ `next.config.js` está em `frontend/`

**Recomendação:** Deixe todos os toggles **DESLIGADOS** (automático)

## 📝 Se Precisar Configurar Manualmente:

### Opção 1: Com Root Directory `frontend`

Se o Root Directory está como `frontend`:

- **Build Command:** `npm run build`
- **Output Directory:** `.next` (ou deixe automático)
- **Install Command:** `npm install`

### Opção 2: Sem Root Directory (não recomendado)

Se não configurou Root Directory:

- **Build Command:** `cd frontend && npm run build`
- **Output Directory:** `frontend/.next`
- **Install Command:** `cd frontend && npm install`

## 🎯 Resumo:

### ✅ MELHOR OPÇÃO:

1. **Root Directory:** `frontend` ✅
2. **Build Command:** Deixe automático (toggle OFF) ✅
3. **Output Directory:** Deixe automático (toggle OFF) ✅
4. **Install Command:** Deixe automático (toggle OFF) ✅

**O Vercel detecta tudo automaticamente!** 🎉

## 🔍 Como Verificar:

Após o deploy, verifique os logs:

1. Vá em **"Deployments"**
2. Clique no deploy
3. Veja **"Build Logs"**
4. Deve mostrar:
   ```
   Installing dependencies...
   Building...
   Build completed
   ```

## 🆘 Se o Build Falhar:

### Erro: "Cannot find module"
**Solução:** Verifique se o Root Directory está como `frontend`

### Erro: "Build command failed"
**Solução:** 
- Verifique se `package.json` está em `frontend/`
- Verifique se `npm run build` funciona localmente

### Erro: "Output directory not found"
**Solução:** 
- Deixe Output Directory automático
- Ou configure como `.next` (não `frontend/.next`)

---

**Deixe tudo automático! O Vercel é muito inteligente e detecta Next.js automaticamente!** ✅

