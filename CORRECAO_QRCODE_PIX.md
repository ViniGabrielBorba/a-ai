# 🔧 Correção: Erro ao Gerar QR Code Pix

## 🐛 Problema Identificado

O erro ao gerar QR Code Pix pode ser causado por:
1. Formato incorreto da requisição ao PagSeguro
2. Falta de dados do cliente na requisição
3. Campo `_id` vs `id` (Supabase usa `id`)
4. Formato de resposta do PagSeguro diferente do esperado

## ✅ Correções Aplicadas

### 1. Melhorias no Backend

- ✅ Busca do pedido no banco antes de gerar Pix
- ✅ Inclusão de dados do cliente na requisição
- ✅ Múltiplas tentativas de extrair QR Code da resposta
- ✅ Logs detalhados para debug
- ✅ Header `x-api-version: 4.0` para garantir compatibilidade
- ✅ Melhor tratamento de erros

### 2. Melhorias no Frontend

- ✅ Envio de dados do cliente na requisição
- ✅ Verificação se QR Code foi retornado
- ✅ Mensagens de erro mais detalhadas
- ✅ Não limpa carrinho em caso de erro (permite tentar novamente)
- ✅ Suporte para `order.id` e `order._id`

### 3. Estrutura da Requisição

```json
{
  "reference_id": "PED-123456",
  "description": "Pedido Açaí do Pará",
  "amount": {
    "value": 1250,
    "currency": "BRL"
  },
  "payment_method": {
    "type": "PIX",
    "pix": {
      "expires_in": 3600
    }
  },
  "customer": {
    "name": "Nome do Cliente",
    "email": "telefone@temp.com",
    "tax_id": "12345678909"
  }
}
```

## 🔍 Como Debugar

### 1. Verificar Logs do Backend

```bash
# No terminal onde o backend está rodando
# Você verá logs detalhados:
- "Gerando Pix para pedido: ..."
- "Enviando requisição ao PagSeguro: ..."
- "Resposta do PagSeguro: ..."
```

### 2. Verificar Console do Navegador

```javascript
// Abra o console do navegador (F12)
// Você verá:
- Erros detalhados
- Resposta do servidor
- Detalhes do erro
```

### 3. Testar Endpoint Diretamente

```bash
# Teste o endpoint manualmente
curl -X POST http://localhost:3001/api/payments/pagseguro/pix \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "id-do-pedido",
    "amount": 12.50,
    "description": "Teste",
    "customer": {
      "name": "Teste",
      "email": "teste@teste.com",
      "tax_id": "12345678909"
    }
  }'
```

## ⚠️ Possíveis Erros

### Erro: "Pedido não encontrado"
- Verifique se o pedido foi criado corretamente
- Confirme que está usando o `id` correto

### Erro: "QR Code não foi retornado pelo PagSeguro"
- Verifique o token do PagSeguro
- Confirme que está no ambiente correto (sandbox/production)
- Veja os logs do backend para a resposta completa

### Erro: "Token inválido"
- Verifique se o token está correto no `.env`
- Confirme que o token é do ambiente correto

## ✅ Próximos Passos

1. **Reinicie o backend** para aplicar as mudanças
2. **Teste novamente** o fluxo de pagamento Pix
3. **Verifique os logs** se ainda houver erro
4. **Compartilhe os logs** para análise mais detalhada

## 📝 Notas

- O CPF `12345678909` é um CPF de teste para sandbox
- Em produção, use o CPF real do cliente
- O email pode ser temporário (`telefone@temp.com`)
- Em produção, use o email real do cliente

---

**Status:** ✅ Correções aplicadas - Reinicie o backend e teste novamente!

