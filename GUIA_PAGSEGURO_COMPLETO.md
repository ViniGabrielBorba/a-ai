# 💳 Guia Completo: Configurar PagSeguro

## 🎯 O que você precisa

1. Conta no PagSeguro
2. Aplicação criada no ambiente de desenvolvimento
3. Token de autenticação
4. Email cadastrado

## 📋 Passo a Passo Detalhado

### 1️⃣ Criar Conta no PagSeguro

1. Acesse: https://pagseguro.uol.com.br
2. Clique em **"Cadastre-se"**
3. Preencha todos os dados
4. Complete a verificação de email
5. Faça login

### 2️⃣ Acessar Ambiente de Desenvolvimento

1. Acesse: https://dev.pagseguro.uol.com.br
2. Faça login com sua conta
3. Vá em **"Minhas Aplicações"** (menu lateral)

### 3️⃣ Criar Nova Aplicação

1. Clique em **"Criar Aplicação"**
2. Preencha:
   - **Nome:** Açaí do Pará
   - **Descrição:** Sistema de vendas online de açaí
   - **Tipo:** Vendas Online / E-commerce
3. Clique em **"Criar"**

### 4️⃣ Obter Credenciais

Após criar, você verá:

#### 🔑 Token de Autenticação
- Copie o **Token** (é uma string longa)
- Exemplo: `ABC123XYZ789...`

#### 📧 Email
- Use o mesmo email da sua conta PagSeguro

#### 🌐 Ambiente
- **Sandbox:** Para testes (não cobra dinheiro real)
- **Production:** Para vendas reais (requer aprovação)

### 5️⃣ Configurar no Backend

Edite o arquivo `backend/.env`:

```env
PAGSEGURO_TOKEN=seu_token_aqui
PAGSEGURO_EMAIL=seu_email@email.com
PAGSEGURO_ENV=sandbox
```

**Exemplo real:**
```env
PAGSEGURO_TOKEN=ABC123XYZ789DEF456GHI012JKL345MNO678PQR901STU234VWX567YZA890BCD123EFG456HIJ789KLM012NOP345QRS678TUV901WXY234ZAB567CDE890FGH123IJK456LMN789OPQ012RST345UVW678XYZ901ABC234DEF567GHI890JKL123MNO456PQR789STU012VWX345YZA678BCD901EFG234HIJ567KLM890NOP123QRS456TUV789WXY012ZAB345CDE678FGH901IJK234LMN567OPQ890RST123UVW456XYZ789
PAGSEGURO_EMAIL=seuemail@email.com
PAGSEGURO_ENV=sandbox
```

### 6️⃣ Reiniciar Backend

Após configurar:

```bash
cd backend
# Pare o servidor (Ctrl+C)
npm run dev
```

## 🧪 Testar Pagamentos

### Teste 1: Pix (Sandbox)

1. Acesse: http://localhost:3000
2. Adicione produtos ao carrinho
3. Vá para checkout
4. Escolha **"Pix"**
5. Preencha os dados
6. Clique em **"Confirmar Pedido"**
7. Um QR Code será gerado
8. Use o app PagSeguro para escanear (ambiente sandbox)

### Teste 2: Cartão de Crédito (Sandbox)

**Cartão de Teste Aprovado:**
```
Número: 4111 1111 1111 1111
CVV: 123
Validade: Qualquer data futura (ex: 12/25)
Nome: Qualquer nome
CPF: 12345678909
```

**Cartão de Teste Negado:**
```
Número: 4000 0000 0000 0002
CVV: 123
Validade: Qualquer data futura
```

## 🔄 Mudar para Produção

Quando estiver pronto para vender:

1. **Solicite aprovação** no PagSeguro
2. **Aguarde aprovação** (pode levar alguns dias)
3. **Obtenha token de produção**
4. **Altere no `.env`:**
```env
PAGSEGURO_ENV=production
PAGSEGURO_TOKEN=token_de_producao_aqui
```

## ⚠️ Importante

### Sandbox (Testes)
- ✅ Não cobra dinheiro real
- ✅ Use para desenvolver e testar
- ✅ Cartões de teste disponíveis
- ✅ Pix de teste disponível

### Production (Real)
- ⚠️ **COBRA DINHEIRO REAL**
- ⚠️ Use apenas quando estiver 100% pronto
- ⚠️ Requer aprovação do PagSeguro
- ⚠️ Taxas aplicadas

## 📝 Checklist de Configuração

- [ ] Conta criada no PagSeguro
- [ ] Aplicação criada no ambiente dev
- [ ] Token copiado
- [ ] Email anotado
- [ ] Variáveis adicionadas no `backend/.env`
- [ ] Backend reiniciado
- [ ] Teste de Pix realizado
- [ ] Teste de Cartão realizado

## 🆘 Problemas e Soluções

### Erro: "Token inválido"
**Solução:**
- Verifique se copiou o token completo
- Confirme que não há espaços extras
- Use o token correto (sandbox ou production)

### Erro: "Email não encontrado"
**Solução:**
- Use o mesmo email da conta PagSeguro
- Verifique se o email está correto

### QR Code não aparece
**Solução:**
- Verifique se o backend está rodando
- Confirme as variáveis de ambiente
- Veja os logs do servidor (terminal)
- Teste a API diretamente

### Pagamento não processa
**Solução:**
- Verifique os logs do backend
- Confirme que o token está correto
- Teste com cartão de teste do sandbox

## 📚 Links Úteis

- [PagSeguro Developers](https://dev.pagseguro.uol.com.br)
- [Documentação API](https://dev.pagseguro.uol.com.br/docs)
- [Cartões de Teste](https://dev.pagseguro.uol.com.br/docs/cartoes-de-teste)
- [Webhooks](https://dev.pagseguro.uol.com.br/docs/webhooks)

## 💡 Dicas

1. **Sempre teste no sandbox primeiro**
2. **Guarde o token em local seguro**
3. **Não compartilhe seu token**
4. **Use variáveis de ambiente** (não commite no git)
5. **Monitore os logs** durante testes

---

**Pronto para configurar!** 🚀

