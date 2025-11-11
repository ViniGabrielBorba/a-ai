# 🔧 Solução: Erro "Não foi possível encontrar o módulo '/app/backend/dist/server.js'"

## Problema
O Render está tentando executar o arquivo `/app/backend/dist/server.js`, mas o arquivo não existe ou o caminho está incorreto.

## Causa
Quando o `rootDir` é `backend` no `render.yaml`, o Render já está executando comandos dentro do diretório `backend`. O caminho `/app/backend/dist/server.js` sugere que o Render pode estar procurando no diretório errado.

## Soluções

### 1. Verificar o Build Command
Certifique-se de que o build está sendo executado corretamente. O `render.yaml` deve ter:

```yaml
buildCommand: npm install && npm run build
startCommand: node dist/server.js
rootDir: backend
```

### 2. Verificar se o arquivo está sendo gerado
Após o build, o arquivo `dist/server.js` deve existir no diretório `backend`.

### 3. Alternativa: Usar caminho absoluto
Se o problema persistir, você pode tentar usar o caminho absoluto no `startCommand`:

```yaml
startCommand: node ./dist/server.js
```

### 4. Verificar logs do build
No painel do Render, verifique os logs do build para ver se há erros durante a compilação TypeScript.

### 5. Verificar estrutura de diretórios
Certifique-se de que a estrutura está assim:
```
/
├── backend/
│   ├── src/
│   │   └── server.ts
│   ├── dist/
│   │   └── server.js (gerado após build)
│   ├── package.json
│   └── tsconfig.json
└── render.yaml
```

## Passos para corrigir

1. **Verificar o build localmente:**
   ```bash
   cd backend
   npm run build
   ls dist/  # ou dir dist no Windows
   ```

2. **Verificar o render.yaml:**
   - Certifique-se de que `rootDir: backend` está correto
   - Certifique-se de que `startCommand: node dist/server.js` está correto

3. **Fazer novo deploy:**
   - Faça commit das alterações
   - Faça push para o GitHub
   - O Render deve fazer um novo deploy automaticamente

4. **Verificar logs no Render:**
   - Acesse o painel do Render
   - Vá em "Logs" do seu serviço
   - Verifique se o build foi executado com sucesso
   - Verifique se o arquivo `dist/server.js` foi criado

## Se o problema persistir

1. **Verificar se o TypeScript está instalado:**
   ```bash
   npm list typescript
   ```

2. **Limpar e reconstruir:**
   ```bash
   cd backend
   rm -rf dist node_modules
   npm install
   npm run build
   ```

3. **Verificar se há erros de TypeScript:**
   ```bash
   npm run build
   ```

4. **Usar script de verificação:**
   Adicione um script no `package.json` para verificar se o arquivo existe:
   ```json
   "postbuild": "node -e \"const fs = require('fs'); if (!fs.existsSync('dist/server.js')) { console.error('ERRO: dist/server.js não existe!'); process.exit(1); }\""
   ```

## Arquivos modificados

- `render.yaml`: Ajustado `startCommand` para usar `node dist/server.js` diretamente
- `backend/package.json`: Adicionado script `postbuild` para verificação (opcional)

