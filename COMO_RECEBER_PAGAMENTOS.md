# 💰 Como Receber Pagamentos - PagSeguro

## ✅ Sim! O dinheiro vai para sua conta PagSeguro

Quando um cliente paga através do QR Code Pix gerado pelo sistema, o dinheiro vai direto para sua conta PagSeguro.

## 🔄 Como Funciona

### 1. Cliente faz o pedido
- Cliente adiciona produtos ao carrinho
- Escolhe Pix como forma de pagamento
- Sistema gera QR Code via PagSeguro

### 2. Cliente paga
- Cliente escaneia o QR Code
- Faz o pagamento Pix no app do banco
- PagSeguro detecta o pagamento

### 3. Dinheiro na sua conta
- ✅ Dinheiro vai para sua conta PagSeguro
- ✅ Você recebe uma notificação
- ✅ Status do pedido é atualizado

## 💳 Como Receber o Dinheiro

### Opção 1: Deixar no PagSeguro
- Dinheiro fica na sua conta PagSeguro
- Você pode usar para compras online
- Pode transferir quando quiser

### Opção 2: Transferir para sua conta bancária
1. Acesse: https://pagseguro.uol.com.br
2. Faça login
3. Vá em **"Saldo"** ou **"Extrato"**
4. Clique em **"Transferir"**
5. Escolha sua conta bancária
6. Confirme a transferência

## 📅 Prazos de Recebimento

### Sandbox (Testes)
- ⚠️ **Não recebe dinheiro real**
- É apenas para testes
- Use para desenvolver

### Produção (Real)
- **Pix:** Imediato (alguns segundos)
- **Cartão de Crédito:** 1-2 dias úteis
- **Cartão de Débito:** Imediato

## 💰 Taxas do PagSeguro

### Pix
- Taxa: ~1,99% + R$ 0,40 por transação
- Exemplo: R$ 100,00 = R$ 1,99 + R$ 0,40 = R$ 2,39 de taxa
- Você recebe: R$ 97,61

### Cartão de Crédito
- Taxa: ~3,99% + R$ 0,40 por transação
- Exemplo: R$ 100,00 = R$ 3,99 + R$ 0,40 = R$ 4,39 de taxa
- Você recebe: R$ 95,61

### Cartão de Débito
- Taxa: ~1,99% + R$ 0,40 por transação
- Exemplo: R$ 100,00 = R$ 1,99 + R$ 0,40 = R$ 2,39 de taxa
- Você recebe: R$ 97,61

**Nota:** Taxas podem variar. Consulte o site do PagSeguro para valores atualizados.

## 🏦 Configurar Conta Bancária

Para receber o dinheiro na sua conta:

1. **Acesse:** https://pagseguro.uol.com.br
2. **Faça login**
3. **Vá em:** Configurações → Dados Bancários
4. **Adicione sua conta:**
   - Banco
   - Agência
   - Conta
   - Tipo de conta (Corrente/Poupança)
   - CPF/CNPJ do titular
5. **Confirme os dados**
6. **Aguarde validação** (pode levar alguns dias)

## 📊 Acompanhar Pagamentos

### No PagSeguro
1. Acesse: https://pagseguro.uol.com.br
2. Faça login
3. Vá em **"Vendas"** ou **"Extrato"**
4. Veja todos os pagamentos recebidos

### No Sistema (Painel Admin)
1. Acesse: http://localhost:3000/admin
2. Faça login
3. Vá em **"Pedidos"**
4. Veja o status de cada pedido:
   - Pendente
   - Aprovado
   - Cancelado

## 🔔 Notificações

O PagSeguro envia notificações quando:
- ✅ Pagamento recebido
- ✅ Pagamento aprovado
- ✅ Pagamento cancelado
- ✅ Transferência realizada

## ⚠️ Importante

### Sandbox vs Produção

**Sandbox (Testes):**
- ❌ Não recebe dinheiro real
- ❌ Não precisa configurar conta bancária
- ✅ Use para testar

**Produção (Real):**
- ✅ Recebe dinheiro real
- ✅ Precisa configurar conta bancária
- ✅ Precisa estar aprovado no PagSeguro
- ⚠️ Use apenas quando estiver pronto

## 📝 Checklist para Receber Pagamentos

- [ ] Conta PagSeguro criada
- [ ] Conta aprovada no PagSeguro
- [ ] Conta bancária configurada
- [ ] Token de produção obtido
- [ ] Sistema configurado para produção
- [ ] Testes realizados
- [ ] Pronto para receber pagamentos reais!

## 💡 Dicas

1. **Configure a conta bancária** antes de ir para produção
2. **Teste tudo no sandbox** primeiro
3. **Monitore os pagamentos** regularmente
4. **Verifique as taxas** antes de definir preços
5. **Mantenha dados atualizados** no PagSeguro

## 🆘 Problemas

### Dinheiro não chegou
- Verifique se o pagamento foi aprovado
- Confirme que a conta bancária está configurada
- Aguarde o prazo de transferência
- Entre em contato com o PagSeguro

### Conta não aprovada
- Complete o cadastro
- Envie documentos necessários
- Aguarde aprovação (pode levar dias)

---

**Resumo:** Sim, o dinheiro vai para sua conta PagSeguro! Configure sua conta bancária para transferir quando quiser. 💰

