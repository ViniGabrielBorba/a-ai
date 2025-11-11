# 📋 Como Criar a Tabela `delivery_riders` no Supabase

## 🎯 Objetivo

Criar a tabela `delivery_riders` no Supabase para armazenar os dados dos entregadores.

---

## 📝 Método 1: Usando SQL Editor (Recomendado)

### Passo 1: Acessar o SQL Editor

1. Acesse o Supabase Dashboard: https://supabase.com/dashboard
2. Selecione seu projeto
3. No menu lateral esquerdo, clique em **"SQL Editor"** (Editor SQL)

### Passo 2: Criar Nova Query

1. Clique no botão **"+ New query"** (Nova consulta)
2. Uma nova aba será aberta

### Passo 3: Copiar e Colar o SQL

Copie todo o código SQL abaixo e cole na área de edição:

```sql
-- Criar tabela delivery_riders
CREATE TABLE IF NOT EXISTS delivery_riders (
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

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_delivery_riders_active ON delivery_riders(active);
CREATE INDEX IF NOT EXISTS idx_delivery_riders_cpf ON delivery_riders(cpf);

-- Comentários para documentação
COMMENT ON TABLE delivery_riders IS 'Tabela para armazenar dados dos entregadores';
COMMENT ON COLUMN delivery_riders.id IS 'ID único do entregador';
COMMENT ON COLUMN delivery_riders.name IS 'Nome completo do entregador';
COMMENT ON COLUMN delivery_riders.gender IS 'Gênero (masculino, feminino, outro)';
COMMENT ON COLUMN delivery_riders.birth_date IS 'Data de nascimento';
COMMENT ON COLUMN delivery_riders.cpf IS 'CPF do entregador (apenas números, único)';
COMMENT ON COLUMN delivery_riders.bike_plate IS 'Placa da moto';
COMMENT ON COLUMN delivery_riders.bike_color IS 'Cor da moto';
COMMENT ON COLUMN delivery_riders.bike_model IS 'Modelo da moto';
COMMENT ON COLUMN delivery_riders.active IS 'Indica se o entregador está ativo';
```

### Passo 4: Executar o SQL

1. Clique no botão **"Run"** (Executar) ou pressione `Ctrl + Enter` (Windows) / `Cmd + Enter` (Mac)
2. Aguarde alguns segundos
3. Você deve ver uma mensagem de sucesso: **"Success. No rows returned"**

### Passo 5: Verificar se a Tabela foi Criada

1. No menu lateral, clique em **"Table Editor"** (Editor de Tabelas)
2. Procure por `delivery_riders` na lista de tabelas
3. Se aparecer, a tabela foi criada com sucesso! ✅

---

## 📝 Método 2: Usando Table Editor (Interface Gráfica)

### Passo 1: Acessar o Table Editor

1. Acesse o Supabase Dashboard: https://supabase.com/dashboard
2. Selecione seu projeto
3. No menu lateral esquerdo, clique em **"Table Editor"** (Editor de Tabelas)

### Passo 2: Criar Nova Tabela

1. Clique no botão **"+ New Table"** (Nova Tabela)
2. Uma janela será aberta

### Passo 3: Configurar a Tabela

1. **Nome da tabela:** Digite `delivery_riders`
2. **Descrição (opcional):** `Tabela para armazenar dados dos entregadores`

### Passo 4: Adicionar Colunas

Clique em **"+ Add Column"** para cada campo abaixo:

#### Coluna 1: `id`
- **Name:** `id`
- **Type:** `uuid`
- **Is Primary Key:** ✅ (marcar)
- **Default Value:** `gen_random_uuid()`

#### Coluna 2: `name`
- **Name:** `name`
- **Type:** `text`
- **Is Nullable:** ❌ (desmarcar)

#### Coluna 3: `gender`
- **Name:** `gender`
- **Type:** `text`
- **Is Nullable:** ❌ (desmarcar)

#### Coluna 4: `birth_date`
- **Name:** `birth_date`
- **Type:** `date`
- **Is Nullable:** ❌ (desmarcar)

#### Coluna 5: `cpf`
- **Name:** `cpf`
- **Type:** `text`
- **Is Nullable:** ❌ (desmarcar)
- **Is Unique:** ✅ (marcar)

#### Coluna 6: `bike_plate`
- **Name:** `bike_plate`
- **Type:** `text`
- **Is Nullable:** ❌ (desmarcar)

#### Coluna 7: `bike_color`
- **Name:** `bike_color`
- **Type:** `text`
- **Is Nullable:** ❌ (desmarcar)

#### Coluna 8: `bike_model`
- **Name:** `bike_model`
- **Type:** `text`
- **Is Nullable:** ❌ (desmarcar)

#### Coluna 9: `active`
- **Name:** `active`
- **Type:** `bool`
- **Is Nullable:** ❌ (desmarcar)
- **Default Value:** `true`

#### Coluna 10: `created_at`
- **Name:** `created_at`
- **Type:** `timestamptz`
- **Is Nullable:** ❌ (desmarcar)
- **Default Value:** `now()`

#### Coluna 11: `updated_at`
- **Name:** `updated_at`
- **Type:** `timestamptz`
- **Is Nullable:** ❌ (desmarcar)
- **Default Value:** `now()`

### Passo 5: Salvar a Tabela

1. Clique no botão **"Save"** (Salvar)
2. Aguarde alguns segundos
3. A tabela será criada!

---

## ✅ Verificação

Após criar a tabela, verifique:

1. ✅ A tabela aparece no **Table Editor**
2. ✅ Todas as colunas estão presentes
3. ✅ A coluna `id` é Primary Key
4. ✅ A coluna `cpf` é Unique
5. ✅ A coluna `active` tem default `true`

---

## 🔧 Configurar Permissões (Opcional)

Se você quiser configurar permissões específicas:

1. No Supabase Dashboard, vá em **Authentication** → **Policies**
2. Selecione a tabela `delivery_riders`
3. Como estamos usando `service_role_key` no backend, as permissões não devem bloquear

**Nota:** O backend usa `supabaseAdmin` (service_role_key), que tem acesso total, então não precisa configurar RLS.

---

## 🆘 Problemas Comuns

### Erro: "relation already exists"

**Causa:** A tabela já existe.

**Solução:**
- Use `CREATE TABLE IF NOT EXISTS` no SQL (já está no código acima)
- Ou delete a tabela existente e crie novamente

### Erro: "permission denied"

**Causa:** Você não tem permissão para criar tabelas.

**Solução:**
- Verifique se está logado com a conta correta
- Verifique se tem permissões de administrador no projeto

### Tabela não aparece no Table Editor

**Solução:**
1. Atualize a página (F5)
2. Verifique se está no projeto correto
3. Verifique se a tabela foi criada com sucesso (veja mensagens de erro)

---

## 📋 Checklist Final

Após criar a tabela, verifique:

- [ ] Tabela `delivery_riders` existe no Supabase
- [ ] Todas as 11 colunas foram criadas
- [ ] Coluna `id` é Primary Key
- [ ] Coluna `cpf` é Unique
- [ ] Variável `SUPABASE_SERVICE_ROLE_KEY` está configurada no Render
- [ ] Backend foi deployado novamente (se necessário)

---

## 🎯 Próximo Passo

Após criar a tabela:

1. ✅ Aguarde alguns segundos para o Supabase processar
2. ✅ Teste acessar a aba "Entregadores" no painel admin
3. ✅ Se ainda houver erro, verifique os logs do Render

---

**Recomendo usar o Método 1 (SQL Editor) pois é mais rápido e garante que tudo será criado corretamente!** 🚀

