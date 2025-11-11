# 🔧 Solução: Erro 500 ao Buscar Entregadores

## ❌ Problema

Ao tentar buscar entregadores, o backend retorna erro **500 (Internal Server Error)**:

```
GET https://a-ai-2.onrender.com/api/delivery-riders 500 (Internal Server Error)
```

---

## 🔍 Causas Possíveis

### 1️⃣ Tabela `delivery_riders` não existe no Supabase

**Solução:** Criar a tabela no Supabase.

**Como criar:**

1. Acesse o Supabase Dashboard: https://supabase.com/dashboard
2. Vá em **Table Editor** → **New Table**
3. Nome da tabela: `delivery_riders`
4. Adicione os seguintes campos:

| Nome | Tipo | Opções |
|------|------|--------|
| `id` | uuid | Primary Key, Default: `gen_random_uuid()` |
| `name` | text | Not Null |
| `gender` | text | Not Null |
| `birth_date` | date | Not Null |
| `cpf` | text | Not Null, Unique |
| `bike_plate` | text | Not Null |
| `bike_color` | text | Not Null |
| `bike_model` | text | Not Null |
| `active` | boolean | Default: `true` |
| `created_at` | timestamptz | Default: `now()` |
| `updated_at` | timestamptz | Default: `now()` |

**Ou execute este SQL no SQL Editor:**

```sql
CREATE TABLE delivery_riders (
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

-- Criar índice para melhor performance
CREATE INDEX idx_delivery_riders_active ON delivery_riders(active);
CREATE INDEX idx_delivery_riders_cpf ON delivery_riders(cpf);
```

---

### 2️⃣ Permissões (RLS) bloqueando acesso

**Solução:** Configurar Row Level Security (RLS) no Supabase.

**Como configurar:**

1. No Supabase Dashboard, vá em **Authentication** → **Policies**
2. Selecione a tabela `delivery_riders`
3. **Opção A: Desabilitar RLS (para desenvolvimento)**
   - Clique em **Disable RLS** (não recomendado para produção)

4. **Opção B: Criar política para permitir acesso (recomendado)**
   - Clique em **New Policy**
   - Nome: `Allow service role full access`
   - Policy definition:
   ```sql
   CREATE POLICY "Allow service role full access"
   ON delivery_riders
   FOR ALL
   USING (true)
   WITH CHECK (true);
   ```

**⚠️ IMPORTANTE:** O código foi atualizado para usar `supabaseAdmin` (service_role_key) que tem acesso total, então o RLS não deve bloquear. Mas se ainda houver problemas, verifique as políticas.

---

### 3️⃣ Variáveis de ambiente incorretas

**Solução:** Verificar variáveis de ambiente no Render.

**Verificar no Render:**

1. Acesse: https://dashboard.render.com
2. Vá no seu serviço → **Environment**
3. Verifique se estas variáveis estão configuradas:
   - `SUPABASE_URL` ✅
   - `SUPABASE_SERVICE_ROLE_KEY` ✅ (importante para operações admin)
   - `SUPABASE_ANON_KEY` ✅

**⚠️ IMPORTANTE:** A rota de entregadores agora usa `SUPABASE_SERVICE_ROLE_KEY` para ter acesso total à tabela.

---

### 4️⃣ Verificar logs do Render

**Como verificar:**

1. No Render, vá em **Logs**
2. Procure por:
   - `Erro ao buscar entregadores:`
   - `Erro do Supabase:`
   - Mensagens de erro relacionadas

**Exemplos de erros comuns:**

```
relation "delivery_riders" does not exist
permission denied for table "delivery_riders"
```

---

## ✅ Solução Rápida

### Passo 1: Verificar se a tabela existe

1. Acesse o Supabase Dashboard
2. Vá em **Table Editor**
3. Procure por `delivery_riders`
4. Se não existir, crie usando o SQL acima

### Passo 2: Verificar variáveis de ambiente

1. No Render, verifique se `SUPABASE_SERVICE_ROLE_KEY` está configurada
2. Se não estiver, adicione:
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: (sua chave service_role do Supabase)

### Passo 3: Verificar logs

1. No Render, vá em **Logs**
2. Tente acessar a aba "Entregadores" novamente
3. Veja os logs para identificar o erro específico

---

## 🔧 Melhorias Implementadas

O código foi atualizado para:

1. ✅ Usar `supabaseAdmin` (service_role_key) em vez de `supabase` (anon_key)
2. ✅ Adicionar logs detalhados para facilitar debug
3. ✅ Retornar mais informações sobre o erro (message, details, code)
4. ✅ Tratar casos onde a tabela pode estar vazia

---

## 📝 Checklist de Verificação

Antes de reportar o problema, verifique:

- [ ] Tabela `delivery_riders` existe no Supabase
- [ ] Variável `SUPABASE_SERVICE_ROLE_KEY` está configurada no Render
- [ ] Variável `SUPABASE_URL` está configurada no Render
- [ ] Logs do Render não mostram erros de conexão
- [ ] Backend está rodando (status "Live" no Render)

---

## 🆘 Se Ainda Não Funcionar

1. **Verifique os logs do Render:**
   - Copie a mensagem de erro completa
   - Procure por erros relacionados ao Supabase

2. **Teste a conexão com o Supabase:**
   - No Supabase Dashboard, vá em **Settings** → **API**
   - Verifique se as chaves estão corretas

3. **Teste criar um entregador manualmente:**
   - No Supabase Dashboard, vá em **Table Editor** → **delivery_riders**
   - Tente inserir um registro manualmente
   - Se funcionar, o problema é na API
   - Se não funcionar, o problema é na tabela/permissões

---

## 🎯 Próximos Passos

Após fazer o deploy das correções:

1. ✅ Aguarde o deploy no Render terminar
2. ✅ Verifique os logs do Render
3. ✅ Tente acessar a aba "Entregadores" novamente
4. ✅ Se ainda houver erro, verifique os logs detalhados

---

**O código foi atualizado para usar `supabaseAdmin` e adicionar logs detalhados. Faça o deploy e verifique os logs!** 🚀

