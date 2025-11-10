# 🧪 Verificar Build Localmente

## ✅ Teste Antes de Fazer Deploy:

Execute estes comandos para verificar se o build funciona:

```bash
cd backend
npm install
npm run build
npm start
```

## 📋 O que cada comando faz:

1. **`npm install`** - Instala todas as dependências
2. **`npm run build`** - Compila o TypeScript para JavaScript
3. **`npm start`** - Inicia o servidor

## ✅ Se funcionar localmente:

- ✅ O código está correto
- ✅ As dependências estão corretas
- ✅ O problema pode ser configuração no Cyclic.sh

## ❌ Se não funcionar localmente:

- ❌ Verifique os erros
- ❌ Corrija os problemas
- ❌ Teste novamente

## 🔍 Erros Comuns:

### "Cannot find module"
**Solução:** Execute `npm install` novamente

### "tsc: command not found"
**Solução:** Verifique se `typescript` está instalado:
```bash
npm install --save-dev typescript
```

### "Cannot find file 'tsconfig.json'"
**Solução:** Verifique se o arquivo existe na pasta `backend/`

### "Port already in use"
**Solução:** Pare outros processos usando a porta 3001:
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

---

**Teste localmente primeiro! Se funcionar, o problema é configuração no Cyclic.sh.** ✅

