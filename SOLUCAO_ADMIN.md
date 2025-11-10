# 🔧 Solução para Erro no Painel Administrativo

## Problemas Comuns e Soluções

### 1. ❌ Erro: "Erro de conexão. Verifique se o servidor backend está rodando"

**Solução:** O backend não está rodando. Siga estes passos:

1. Abra um terminal na pasta `backend`
2. Execute: `npm run dev` ou `npm start`
3. Aguarde a mensagem: "Server running on port 3001"
4. Tente fazer login novamente no painel admin

### 2. ❌ Erro: "Credenciais inválidas"

**Solução:** Verifique se o admin foi criado no banco de dados:

1. No terminal do backend, execute:
   ```bash
   npm run seed:admin
   ```

2. As credenciais padrão são:
   - **Email:** `admin@acaidopara.com`
   - **Senha:** `admin123`

### 3. ❌ Erro: "Token não recebido do servidor"

**Solução:** Verifique se o backend está configurado corretamente:

1. Verifique se o arquivo `backend/.env` existe e está configurado
2. Verifique se o JWT_SECRET está definido
3. Reinicie o servidor backend

### 4. ❌ Variável de ambiente não encontrada

**Solução:** Crie o arquivo `.env.local` na pasta `frontend`:

1. Crie o arquivo: `frontend/.env.local`
2. Adicione o conteúdo:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```
3. Reinicie o servidor frontend (`npm run dev`)

## 📋 Passo a Passo para Testar o Admin

### 1. Iniciar o Backend
```bash
cd backend
npm run dev
```

### 2. Criar Admin (se não existir)
```bash
cd backend
npm run seed:admin
```

### 3. Iniciar o Frontend
```bash
cd frontend
npm run dev
```

### 4. Acessar o Painel Admin
1. Acesse: `http://localhost:3000/admin`
2. Use as credenciais:
   - Email: `admin@acaidopara.com`
   - Senha: `admin123`

## 🔍 Verificar se está Funcionando

1. **Backend rodando?**
   - Acesse: `http://localhost:3001/api/health`
   - Deve retornar: `{ "status": "ok" }`

2. **Frontend rodando?**
   - Acesse: `http://localhost:3000`
   - Deve carregar a página inicial

3. **Admin existe no banco?**
   - Verifique no Supabase se existe um registro na tabela `admins`
   - Ou execute: `npm run seed:admin` no backend

## 🛠️ Melhorias Aplicadas

- ✅ Tratamento de erros melhorado
- ✅ Mensagens de erro mais claras
- ✅ Fallback para URL da API
- ✅ Logs para debug
- ✅ Validação de token

## 📞 Se o Problema Persistir

1. Abra o Console do Navegador (F12)
2. Veja as mensagens de erro no console
3. Verifique a aba Network para ver as requisições
4. Envie os erros específicos para correção

