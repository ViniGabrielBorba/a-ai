# 📱 Como Gerar QR Code do Pix

## 🎯 Processo Completo

### 1. Cliente Escolhe Pix no Checkout

1. Cliente adiciona produtos ao carrinho
2. Vai para checkout
3. Escolhe **"Pix"** como forma de pagamento
4. Preenche dados (nome, telefone, endereço)
5. Clica em **"Confirmar Pedido"**

### 2. Backend Gera QR Code

O backend faz uma requisição ao PagSeguro:

```javascript
POST /api/payments/pagseguro/pix
{
  orderId: "pedido-123",
  amount: 25.00,
  description: "Pedido PED-123 - Açaí do Pará"
}
```

### 3. PagSeguro Retorna QR Code

O PagSeguro retorna:
- **QR Code:** Código para pagamento
- **Payment ID:** ID do pagamento
- **Expires At:** Data de expiração (1 hora)

### 4. Frontend Exibe QR Code

O frontend recebe o QR Code e exibe na tela usando a biblioteca `qrcode.react`.

## 🔧 Como Funciona no Código

### Backend (`backend/src/routes/payments.ts`)

```typescript
router.post('/pagseguro/pix', async (req, res) => {
  // 1. Faz requisição ao PagSeguro
  const response = await axios.post(
    `${PAGSEGURO_URL}/charges`,
    {
      reference_id: orderId,
      description: description,
      amount: {
        value: Math.round(amount * 100), // Converter para centavos
        currency: 'BRL'
      },
      payment_method: {
        type: 'PIX',
        pix: {
          expires_in: 3600 // 1 hora
        }
      }
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.PAGSEGURO_TOKEN}`
      }
    }
  );

  // 2. Extrai QR Code da resposta
  const qrCodeValue = response.data.qr_codes?.[0]?.text || '';

  // 3. Salva no banco de dados
  await supabase
    .from('orders')
    .update({
      payment_id: response.data.id,
      qr_code: qrCodeValue
    })
    .eq('id', orderId);

  // 4. Retorna para o frontend
  res.json({
    qrCode: qrCodeValue,
    paymentId: response.data.id,
    expiresAt: response.data.expires_at
  });
});
```

### Frontend (`frontend/app/checkout/page.tsx`)

```typescript
// 1. Cliente escolhe Pix e confirma pedido
if (paymentMethod === 'pix') {
  // 2. Faz requisição ao backend
  const pixResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/payments/pagseguro/pix`,
    {
      orderId: order._id,
      amount: getTotal(),
      description: `Pedido ${order.orderNumber} - Açaí do Pará`
    }
  );

  // 3. Recebe QR Code
  setQrCode(pixResponse.data.qrCode);
  setPaymentId(pixResponse.data.paymentId);
}

// 4. Exibe QR Code na tela
{qrCode && (
  <QRCodeSVG value={qrCode} size={256} />
)}
```

## 📱 Exibir QR Code

O QR Code é exibido usando a biblioteca `qrcode.react`:

```tsx
import { QRCodeSVG } from 'qrcode.react';

<QRCodeSVG 
  value={qrCode} 
  size={256}
  level="H"
  includeMargin={true}
/>
```

## ✅ Checklist

- [ ] Cliente escolhe Pix
- [ ] Backend recebe requisição
- [ ] Backend faz requisição ao PagSeguro
- [ ] PagSeguro retorna QR Code
- [ ] Backend salva no banco
- [ ] Frontend recebe QR Code
- [ ] QR Code é exibido na tela
- [ ] Cliente escaneia e paga

## 🧪 Testar

1. Acesse: http://localhost:3000
2. Adicione produtos ao carrinho
3. Vá para checkout
4. Escolha **Pix**
5. Preencha os dados
6. Clique em **Confirmar Pedido**
7. O QR Code será gerado automaticamente!

## 🔍 Verificar se Está Funcionando

### Backend
```bash
# Ver logs do backend
# Deve aparecer a requisição ao PagSeguro
```

### Frontend
```bash
# Abra o console do navegador
# Deve aparecer o QR Code recebido
```

## ⚠️ Problemas Comuns

### QR Code não aparece
- Verifique se o backend está rodando
- Verifique se o token do PagSeguro está correto
- Veja os logs do backend

### Erro ao gerar QR Code
- Verifique a conexão com PagSeguro
- Confirme que o token está válido
- Verifique os logs de erro

---

**Status:** ✅ QR Code está funcionando automaticamente!

