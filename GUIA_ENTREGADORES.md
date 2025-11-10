# 🏍️ Guia de Entregadores - Sistema de Cadastro

## 📋 Funcionalidades Implementadas

### 1. **Cadastro de Entregadores no Painel Admin**
- ✅ Interface completa para cadastrar, editar e excluir entregadores
- ✅ Campos obrigatórios:
  - Nome completo
  - Sexo (Masculino, Feminino, Outro)
  - Data de nascimento
  - CPF (único, validado)
  - Placa da moto
  - Cor da moto
  - Modelo da moto
  - Status (Ativo/Inativo)

### 2. **Atribuição Automática de Entregadores**
- ✅ Quando o pagamento é aprovado (Pix ou Cartão), um entregador ativo é atribuído automaticamente ao pedido
- ✅ Apenas para pedidos de **delivery** (não para retirada)
- ✅ Seleção aleatória entre entregadores ativos

### 3. **Tempo de Entrega**
- ✅ Após pagamento aprovado, o sistema calcula automaticamente:
  - **Horário de aprovação do pagamento** (`payment_approved_at`)
  - **Tempo estimado de entrega**: 45 minutos após aprovação (`estimated_delivery_time`)

### 4. **Exibição de Informações de Segurança**
- ✅ Quando o pagamento é aprovado, o cliente vê:
  - Nome do entregador
  - Placa da moto
  - Cor da moto
  - Modelo da moto
  - Tempo estimado de entrega (45 minutos)

## 🔧 Como Usar

### 1. **Cadastrar Entregador**
1. Acesse o painel admin: `http://localhost:3000/admin`
2. Faça login com suas credenciais
3. Clique na aba **"🏍️ Entregadores"**
4. Clique em **"Adicionar Entregador"**
5. Preencha todos os campos obrigatórios
6. Clique em **"Salvar"**

### 2. **Gerenciar Entregadores**
- **Editar**: Clique no botão "Editar" no card do entregador
- **Excluir**: Clique no botão "Excluir" no card do entregador
- **Ativar/Desativar**: Edite o entregador e altere o status "Ativo"

### 3. **Ver Entregadores Atribuídos aos Pedidos**
1. Acesse a aba **"📦 Pedidos"** no painel admin
2. Os pedidos com entregador atribuído mostrarão as informações do entregador
3. O entregador é atribuído automaticamente quando o pagamento é aprovado

## 📊 Estrutura do Banco de Dados

### Tabela `delivery_riders`
```sql
- id (UUID)
- name (VARCHAR)
- gender (VARCHAR) - 'masculino', 'feminino', 'outro'
- birth_date (DATE)
- cpf (VARCHAR) - ÚNICO
- bike_plate (VARCHAR)
- bike_color (VARCHAR)
- bike_model (VARCHAR)
- active (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Tabela `orders` (Campos Adicionados)
```sql
- delivery_rider_id (UUID) - Referência ao entregador
- payment_approved_at (TIMESTAMP) - Horário de aprovação do pagamento
- estimated_delivery_time (TIMESTAMP) - Tempo estimado de entrega (45 minutos)
```

## 🔄 Fluxo de Atribuição

1. **Cliente faz pedido** com pagamento Pix ou Cartão
2. **Pagamento é processado** pelo PagSeguro
3. **Quando pagamento é aprovado**:
   - Sistema busca entregadores ativos
   - Seleciona um entregador aleatoriamente
   - Atribui ao pedido
   - Calcula tempo de entrega (45 minutos)
   - Atualiza status do pedido para "preparando"
4. **Cliente recebe informações**:
   - Nome do entregador
   - Dados da moto (placa, cor, modelo)
   - Tempo estimado de entrega

## 🔐 Segurança

- ✅ CPF único por entregador (validação no banco)
- ✅ Apenas entregadores ativos podem ser atribuídos
- ✅ Autenticação obrigatória para gerenciar entregadores
- ✅ Validação de dados no frontend e backend

## 📱 Endpoints da API

### GET `/api/delivery-riders`
Lista todos os entregadores (requer autenticação)

### GET `/api/delivery-riders/active`
Lista apenas entregadores ativos (requer autenticação)

### POST `/api/delivery-riders`
Cria novo entregador (requer autenticação)

### PUT `/api/delivery-riders/:id`
Atualiza entregador (requer autenticação)

### DELETE `/api/delivery-riders/:id`
Deleta entregador (requer autenticação)

## 🚀 Próximos Passos

1. **Atualizar página de checkout** para mostrar informações de entrega em tempo real
2. **Adicionar notificação** quando pagamento for aprovado
3. **Criar página de acompanhamento** de pedido para o cliente
4. **Adicionar geolocalização** do entregador (opcional)
5. **Criar dashboard** para entregadores visualizarem seus pedidos

## 📝 Notas Importantes

- ⚠️ **Execute o SQL schema** no Supabase para criar as tabelas
- ⚠️ **Cadastre pelo menos um entregador ativo** antes de processar pedidos
- ⚠️ **O tempo de entrega é fixo em 45 minutos** após aprovação do pagamento
- ⚠️ **Apenas pedidos de delivery** recebem entregador atribuído

## 🆘 Troubleshooting

### Problema: Entregador não está sendo atribuído
- Verifique se há entregadores cadastrados e ativos
- Verifique se o pedido é do tipo "delivery"
- Verifique se o pagamento foi aprovado

### Problema: Erro ao cadastrar entregador
- Verifique se o CPF já não está cadastrado
- Verifique se todos os campos obrigatórios foram preenchidos
- Verifique se o backend está rodando

### Problema: Entregador não aparece no pedido
- Verifique se o pagamento foi aprovado
- Verifique se o pedido é do tipo "delivery"
- Verifique se há entregadores ativos cadastrados

