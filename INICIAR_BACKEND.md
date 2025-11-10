# 🚀 Como Iniciar o Backend

## Passo a Passo

### 1. Abrir Terminal na Pasta Backend
```bash
cd backend
```

### 2. Verificar se o arquivo .env existe
O arquivo `.env` deve existir na pasta `backend` com as seguintes variáveis:
- `PORT=3001`
- `SUPABASE_URL=...`
- `SUPABASE_ANON_KEY=...`
- `JWT_SECRET=...`
- `ADMIN_EMAIL=admin@acaidopara.com`
- `ADMIN_PASSWORD=admin123`

### 3. Instalar Dependências (se necessário)
```bash
npm install
```

### 4. Criar Admin no Banco (primeira vez)
```bash
npm run seed:admin
```

### 5. Iniciar o Servidor
```bash
npm run dev
```

### 6. Verificar se está Funcionando
Acesse: `http://localhost:3001/api/health`

Deve retornar:
```json
{
  "status": "ok",
  "message": "API está funcionando!",
  "database": "Supabase conectado"
}
```

## 🔍 Verificar se o Backend está Rodando

### Windows (PowerShell)
```powershell
netstat -ano | findstr :3001
```

### Se estiver rodando, você verá:
```
TCP    0.0.0.0:3001           0.0.0.0:0              LISTENING       [PID]
```

## ⚠️ Problemas Comuns

### 1. Porta 3001 já em uso
**Solução:** Encerre o processo que está usando a porta:
```powershell
# Encontrar o PID
netstat -ano | findstr :3001

# Encerrar o processo (substitua [PID] pelo número)
taskkill /F /PID [PID]
```

### 2. Erro ao conectar com Supabase
**Solução:** Verifique se as variáveis `SUPABASE_URL` e `SUPABASE_ANON_KEY` estão corretas no arquivo `.env`

### 3. Admin não existe
**Solução:** Execute:
```bash
npm run seed:admin
```

## 📝 Credenciais do Admin

- **Email:** `admin@acaidopara.com`
- **Senha:** `admin123`

## 🎯 Comandos Úteis

- `npm run dev` - Iniciar servidor em modo desenvolvimento
- `npm run build` - Compilar TypeScript
- `npm run start` - Iniciar servidor em modo produção
- `npm run seed:admin` - Criar admin no banco de dados

