# 🗄️ Configuração do Supabase - Guia Completo

## O que é Supabase?

Supabase é um Backend-as-a-Service (BaaS) que fornece:
- ✅ Banco de dados PostgreSQL
- ✅ API REST automática
- ✅ Autenticação
- ✅ Storage
- ✅ Real-time subscriptions

## 🚀 Passo a Passo

### 1. Criar Conta no Supabase

1. Acesse [https://supabase.com](https://supabase.com)
2. Clique em "Start your project"
3. Faça login com GitHub (recomendado) ou email
4. Crie uma organização (se necessário)

### 2. Criar Novo Projeto

1. Clique em "New Project"
2. Preencha:
   - **Name**: Açaí do Pará (ou outro nome)
   - **Database Password**: Crie uma senha forte (guarde bem!)
   - **Region**: Escolha a região mais próxima (ex: South America)
   - **Pricing Plan**: Free (para começar)
3. Clique em "Create new project"
4. Aguarde 2-3 minutos enquanto o projeto é criado

### 3. Obter Credenciais

1. No painel do projeto, vá em **Settings** → **API**
2. Você verá:
   - **Project URL**: `https://xxxxx.supabase.co` → `SUPABASE_URL`
   - **anon public**: Chave pública → `SUPABASE_ANON_KEY`
   - **service_role**: Chave privada (opcional) → `SUPABASE_SERVICE_ROLE_KEY`

### 4. Criar Tabelas (Schema)

1. No painel, vá em **SQL Editor**
2. Clique em "New query"
3. Abra o arquivo `backend/src/database/schema.sql` do projeto
4. Copie todo o conteúdo
5. Cole no SQL Editor
6. Clique em "Run" ou pressione Ctrl+Enter
7. Você deve ver: "Success. No rows returned"

### 5. Verificar Tabelas

1. No painel, vá em **Table Editor**
2. Você deve ver 3 tabelas:
   - ✅ `products`
   - ✅ `orders`
   - ✅ `admins`

### 6. Configurar Variáveis de Ambiente

No arquivo `backend/.env`:

```env
SUPABASE_URL=https://seu-projeto-id.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (opcional)
```

## 🔒 Segurança (RLS - Row Level Security)

Por padrão, o Supabase tem RLS habilitado. Para este projeto:

### Opção 1: Desabilitar RLS (Desenvolvimento)

No SQL Editor, execute:

```sql
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE admins DISABLE ROW LEVEL SECURITY;
```

### Opção 2: Configurar Políticas (Produção - Recomendado)

```sql
-- Products: Leitura pública, escrita apenas para admins
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

CREATE POLICY "Products are insertable by admins" ON products
  FOR INSERT WITH CHECK (auth.role() = 'admin');

-- Orders: Criar pedidos públicos, ler apenas admins
CREATE POLICY "Orders are insertable by everyone" ON orders
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Orders are viewable by admins" ON orders
  FOR SELECT USING (auth.role() = 'admin');
```

**Nota**: Para este projeto, como usamos autenticação JWT própria, podemos desabilitar RLS ou usar service_role key.

## 📊 Estrutura das Tabelas

### products
- `id` (UUID) - Chave primária
- `name` (VARCHAR) - Nome do produto
- `description` (TEXT) - Descrição
- `price` (DECIMAL) - Preço
- `category` (VARCHAR) - Categoria
- `image` (TEXT) - URL da imagem
- `sizes` (JSONB) - Tamanhos e preços
- `available` (BOOLEAN) - Disponível
- `created_at`, `updated_at` - Timestamps

### orders
- `id` (UUID) - Chave primária
- `order_number` (VARCHAR) - Número do pedido
- `customer_name`, `customer_phone`, `customer_address` - Dados do cliente
- `delivery_type` (VARCHAR) - Tipo de entrega
- `items` (JSONB) - Itens do pedido
- `total` (DECIMAL) - Total
- `payment_method`, `payment_status` - Pagamento
- `order_status` - Status do pedido
- `observations` (TEXT) - Observações
- `payment_id`, `qr_code` - Dados de pagamento
- `created_at`, `updated_at` - Timestamps

### admins
- `id` (UUID) - Chave primária
- `email` (VARCHAR) - Email único
- `password` (VARCHAR) - Senha hasheada
- `created_at`, `updated_at` - Timestamps

## 🧪 Testar Conexão

1. Execute o backend:
```bash
cd backend
npm run dev
```

2. Acesse: `http://localhost:3001/api/health`
3. Deve retornar: `{ "status": "ok", "database": "Supabase conectado" }`

## 📝 Criar Admin

```bash
cd backend
npm run seed:admin
```

Isso criará um admin com:
- Email: `admin@acaidopara.com` (ou o que estiver no .env)
- Senha: `admin123` (ou a que estiver no .env)

## 🔍 Verificar Dados

No painel do Supabase:
1. Vá em **Table Editor**
2. Selecione a tabela (ex: `products`)
3. Veja os dados inseridos
4. Pode editar diretamente pela interface

## 🚨 Troubleshooting

### Erro: "relation does not exist"
- Execute o schema.sql novamente
- Verifique se todas as tabelas foram criadas

### Erro: "permission denied"
- Desabilite RLS ou configure políticas
- Verifique se está usando a chave correta

### Erro: "invalid API key"
- Verifique se copiou a chave completa
- Confirme que está usando `SUPABASE_ANON_KEY` e não `service_role`

### Erro de conexão
- Verifique se o projeto está ativo
- Confirme que a URL está correta
- Teste no painel do Supabase

## 💡 Dicas

1. **Backup**: O Supabase faz backup automático, mas você pode exportar dados manualmente
2. **Monitoramento**: Use o Dashboard para ver queries e performance
3. **Logs**: Veja logs em Settings → Logs
4. **Limites**: Plano gratuito tem limites, monitore o uso

## 📚 Recursos

- [Documentação Supabase](https://supabase.com/docs)
- [Guia de SQL](https://supabase.com/docs/guides/database)
- [API Reference](https://supabase.com/docs/reference/javascript/introduction)

## ✅ Checklist

- [ ] Conta criada no Supabase
- [ ] Projeto criado
- [ ] Credenciais copiadas
- [ ] Schema SQL executado
- [ ] Tabelas criadas e visíveis
- [ ] Variáveis de ambiente configuradas
- [ ] RLS configurado (ou desabilitado)
- [ ] Admin criado
- [ ] Conexão testada

---

**Pronto!** Seu Supabase está configurado e pronto para uso! 🎉

