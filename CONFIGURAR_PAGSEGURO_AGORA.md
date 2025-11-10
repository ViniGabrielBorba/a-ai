# 💳 Configurar PagSeguro - Passo a Passo Rápido

## 🚀 Configuração Rápida

### 1. Obter Credenciais do PagSeguro

1. Acesse: https://dev.pagseguro.uol.com.br
2. Faça login
3. Vá em **"Minhas Aplicações"**
4. Clique em **"Criar Aplicação"**
5. Preencha:
   - Nome: Açaí do Pará
   - Tipo: Vendas Online
6. Copie o **Token** gerado

### 2. Configurar no Backend

Edite o arquivo `backend/.env` e adicione:

```env
PAGSEGURO_TOKEN=cole_seu_token_aqui
PAGSEGURO_EMAIL=seu_email@email.com
PAGSEGURO_ENV=sandbox
```

### 3. Reiniciar Backend

```bash
cd backend
# Pare o servidor (Ctrl+C)
npm run dev
```

## ✅ Pronto!

Agora você pode testar pagamentos:
- **Pix:** Gera QR Code automaticamente
- **Cartão:** Processa pagamento via PagSeguro

## 🧪 Testar

1. Acesse: http://localhost:3000
2. Adicione produtos ao carrinho
3. Vá para checkout
4. Escolha Pix ou Cartão
5. Preencha os dados
6. Confirme o pedido

## 📝 Cartões de Teste (Sandbox)

**Aprovado:**
- Número: `4111 1111 1111 1111`
- CVV: `123`
- Validade: Qualquer data futura

**Negado:**
- Número: `4000 0000 0000 0002`

---

**Veja o guia completo em:** `GUIA_PAGSEGURO_COMPLETO.md`

