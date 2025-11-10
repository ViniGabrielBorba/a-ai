# 💳 Configuração do PagSeguro - Guia Completo

## 🎯 O que é necessário

Para usar o PagSeguro no sistema, você precisa:
1. Conta no PagSeguro
2. Token de autenticação
3. Email cadastrado no PagSeguro
4. Ambiente configurado (sandbox para testes, production para produção)

## 📋 Passo a Passo

### 1. Criar Conta no PagSeguro

1. Acesse: https://pagseguro.uol.com.br
2. Clique em "Cadastre-se"
3. Preencha seus dados
4. Complete o cadastro

### 2. Acessar o Ambiente de Desenvolvimento

1. Acesse: https://dev.pagseguro.uol.com.br
2. Faça login com sua conta
3. Vá em **"Minhas Aplicações"**

### 3. Criar uma Aplicação

1. Clique em **"Criar Aplicação"**
2. Preencha:
   - **Nome:** Açaí do Pará
   - **Descrição:** Sistema de vendas online
   - **Tipo:** Vendas Online
3. Clique em **"Criar"**

### 4. Obter Credenciais

Após criar a aplicação, você verá:

#### Para Sandbox (Testes):
- **Token:** Copie o token gerado
- **Email:** Seu email do PagSeguro
- **Ambiente:** sandbox

#### Para Produção:
- **Token:** Token de produção (gerado após aprovação)
- **Email:** Seu email do PagSeguro
- **Ambiente:** production

### 5. Configurar no Backend

Edite o arquivo `backend/.env` e adicione:

```env
PAGSEGURO_TOKEN=seu_token_aqui
PAGSEGURO_EMAIL=seu_email@pagseguro.com
PAGSEGURO_ENV=sandbox
```

**Exemplo:**
```env
PAGSEGURO_TOKEN=ABC123XYZ789...
PAGSEGURO_EMAIL=seuemail@email.com
PAGSEGURO_ENV=sandbox
```

### 6. Reiniciar o Backend

Após configurar, reinicie o servidor:

```bash
cd backend
# Pare o servidor (Ctrl+C)
npm run dev
```

## 🧪 Testar Pagamento

### Teste com Pix (Sandbox)

1. Faça um pedido no site
2. Escolha "Pix" como forma de pagamento
3. Um QR Code será gerado
4. Use o app do PagSeguro para escanear (ambiente sandbox)

### Teste com Cartão (Sandbox)

Use cartões de teste do PagSeguro:

**Cartão Aprovado:**
- Número: `4111 1111 1111 1111`
- CVV: `123`
- Validade: Qualquer data futura
- Nome: Qualquer nome
- CPF: `12345678909`

**Cartão Negado:**
- Número: `4000 0000 0000 0002`

## 🔄 Mudar para Produção

Quando estiver pronto para vender de verdade:

1. Solicite aprovação no PagSeguro
2. Obtenha token de produção
3. Altere no `.env`:
```env
PAGSEGURO_ENV=production
PAGSEGURO_TOKEN=token_de_producao
```

## ⚠️ Importante

### Sandbox (Testes)
- ✅ Não cobra dinheiro real
- ✅ Use para testar
- ✅ Cartões de teste disponíveis

### Production (Real)
- ⚠️ Cobra dinheiro real
- ⚠️ Use apenas quando estiver pronto
- ⚠️ Requer aprovação do PagSeguro

## 📝 Checklist

- [ ] Conta criada no PagSeguro
- [ ] Aplicação criada no ambiente de desenvolvimento
- [ ] Token copiado
- [ ] Email anotado
- [ ] Variáveis configuradas no `.env`
- [ ] Backend reiniciado
- [ ] Teste de pagamento realizado

## 🆘 Problemas Comuns

### Erro: "Token inválido"
- Verifique se copiou o token completo
- Confirme que está usando o token correto (sandbox ou production)

### Erro: "Email não encontrado"
- Verifique se o email está correto
- Confirme que é o mesmo email da conta PagSeguro

### QR Code não aparece
- Verifique se o backend está rodando
- Confirme as variáveis de ambiente
- Veja os logs do servidor

## 📚 Documentação

- [PagSeguro Developers](https://dev.pagseguro.uol.com.br/docs)
- [API de Pagamentos](https://dev.pagseguro.uol.com.br/docs/api-pagamento)
- [Cartões de Teste](https://dev.pagseguro.uol.com.br/docs/cartoes-de-teste)

---

**Pronto para configurar!** 🚀

