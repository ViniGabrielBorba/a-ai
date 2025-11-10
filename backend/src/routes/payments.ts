import express, { Request, Response } from 'express';
import axios from 'axios';
import { supabase } from '../lib/supabase';

const router = express.Router();

// Configuração do PagSeguro
const PAGSEGURO_ENV = process.env.PAGSEGURO_ENV || 'sandbox';
const PAGSEGURO_URL = PAGSEGURO_ENV === 'production' 
  ? 'https://api.pagseguro.com' 
  : 'https://sandbox.api.pagseguro.com';

// POST /api/payments/pagseguro/pix - Gerar QR Code Pix
router.post('/pagseguro/pix', async (req: Request, res: Response) => {
  try {
    const { orderId, amount, description, customer } = req.body;

    console.log('Gerando Pix para pedido:', orderId, 'Valor:', amount);

    // Buscar dados do pedido para obter informações do cliente
    // Tentar buscar por 'id' primeiro, depois por 'order_number' se não encontrar
    let { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', orderId)
      .single();
    
    // Se não encontrar por ID, tentar por order_number
    if (orderError || !order) {
      const { data: orderByNumber, error: errorByNumber } = await supabase
        .from('orders')
        .select('*')
        .eq('order_number', orderId)
        .single();
      
      if (!errorByNumber && orderByNumber) {
        order = orderByNumber;
        orderError = null;
      }
    }

    if (orderError || !order) {
      console.error('Erro ao buscar pedido:', orderError);
      return res.status(404).json({ 
        message: 'Pedido não encontrado',
        error: orderError 
      });
    }

    // Preparar dados do cliente
    const customerData = customer || {
      name: order.customer_name || 'Cliente',
      email: `${order.customer_phone}@temp.com`,
      tax_id: '12345678909' // CPF padrão para sandbox
    };

    // Calcular data de expiração (1 hora a partir de agora)
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 1);
    const expirationDateISO = expirationDate.toISOString();

    // Criar a cobrança no PagSeguro
    const chargePayload = {
      reference_id: order.order_number || orderId,
      description: description || 'Pedido Açaí do Pará',
      amount: {
        value: Math.round(amount * 100), // Converter para centavos
        currency: 'BRL'
      },
      payment_method: {
        type: 'PIX',
        pix: {
          expiration_date: expirationDateISO // Data de expiração no formato ISO
        }
      },
      customer: {
        name: customerData.name,
        email: customerData.email,
        tax_id: customerData.tax_id
      }
    };

    console.log('Enviando requisição ao PagSeguro:', JSON.stringify(chargePayload, null, 2));

    const response = await axios.post(
      `${PAGSEGURO_URL}/charges`,
      chargePayload,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAGSEGURO_TOKEN}`,
          'Content-Type': 'application/json',
          'x-api-version': '4.0'
        }
      }
    );

    console.log('Resposta do PagSeguro:', JSON.stringify(response.data, null, 2));

    // Extrair QR Code da resposta
    let qrCodeValue = '';
    
    // Formato correto do PagSeguro: response.data.qr_code.text
    if (response.data.qr_code && response.data.qr_code.text) {
      qrCodeValue = response.data.qr_code.text;
    } else if (response.data.qr_codes && response.data.qr_codes.length > 0) {
      qrCodeValue = response.data.qr_codes[0].text || response.data.qr_codes[0].code || '';
    } else if (response.data.links && response.data.links.length > 0) {
      // Buscar link do QR Code
      const qrCodeLink = response.data.links.find((link: any) => 
        link.rel === 'QRCODE.PNG' || link.rel === 'QRCODE.BASE64' || link.rel === 'QR_CODE'
      );
      if (qrCodeLink) {
        qrCodeValue = qrCodeLink.href;
      }
    } else if (response.data.pix && response.data.pix.qr_code) {
      qrCodeValue = response.data.pix.qr_code;
    } else if (response.data.payment_method?.pix?.qr_code) {
      qrCodeValue = response.data.payment_method.pix.qr_code;
    }

    if (!qrCodeValue) {
      console.error('QR Code não encontrado na resposta:', response.data);
      return res.status(500).json({ 
        message: 'QR Code não foi retornado pelo PagSeguro',
        error: 'Formato de resposta inesperado',
        response: response.data
      });
    }

    // Atualizar pedido com paymentId e qrCode
    const { error: updateError } = await supabase
      .from('orders')
      .update({
        payment_id: response.data.id,
        qr_code: qrCodeValue,
        payment_status: 'pending'
      })
      .eq('id', orderId);

    if (updateError) {
      console.error('Erro ao atualizar pedido:', updateError);
    }

    res.json({
      qrCode: qrCodeValue,
      paymentId: response.data.id,
      expiresAt: response.data.expires_at || response.data.payment_method?.pix?.expiration_date
    });
  } catch (error: any) {
    console.error('Erro ao gerar Pix:', error.response?.data || error.message);
    console.error('Stack trace:', error.stack);
    
    res.status(500).json({ 
      message: 'Erro ao gerar QR Code Pix', 
      error: error.response?.data || error.message,
      details: error.response?.data?.error_messages || error.response?.data
    });
  }
});

// POST /api/payments/pagseguro/credit-card - Processar pagamento com cartão
router.post('/pagseguro/credit-card', async (req: Request, res: Response) => {
  try {
    const { orderId, amount, cardData, customerData } = req.body;

    // Primeiro, criar o cartão de crédito
    const cardResponse = await axios.post(
      `${PAGSEGURO_URL}/cards`,
      {
        number: cardData.number,
        exp_month: cardData.expMonth,
        exp_year: cardData.expYear,
        security_code: cardData.cvv,
        holder: {
          name: cardData.holderName
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAGSEGURO_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const cardId = cardResponse.data.id;

    // Criar a cobrança
    const chargeResponse = await axios.post(
      `${PAGSEGURO_URL}/charges`,
      {
        reference_id: orderId,
        description: 'Pedido Açaí do Pará',
        amount: {
          value: Math.round(amount * 100),
          currency: 'BRL'
        },
        payment_method: {
          type: 'CREDIT_CARD',
          installments: 1,
          capture: true,
          card: {
            id: cardId
          }
        },
        customer: {
          name: customerData.name,
          email: customerData.email,
          tax_id: customerData.cpf
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAGSEGURO_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Buscar dados do pedido
    const { data: order } = await supabase
      .from('orders')
      .select('delivery_type')
      .eq('id', orderId)
      .single();

    // Atualizar pedido
    const paymentStatus = chargeResponse.data.status === 'PAID' ? 'approved' : 'pending';
    
    // Se o pagamento foi aprovado, calcular tempo de entrega e atribuir entregador (apenas para delivery)
    let updateData: any = {
      payment_id: chargeResponse.data.id,
      payment_status: paymentStatus
    };

    if (paymentStatus === 'approved') {
      const now = new Date();
      updateData.payment_approved_at = now.toISOString();
      updateData.order_status = 'preparing';

      // Se for delivery, calcular tempo de entrega e atribuir entregador
      if (order && order.delivery_type === 'delivery') {
        const estimatedDelivery = new Date(now.getTime() + 45 * 60 * 1000); // 45 minutos
        updateData.estimated_delivery_time = estimatedDelivery.toISOString();

        // Atribuir um entregador ativo aleatório
        const { data: activeRiders } = await supabase
          .from('delivery_riders')
          .select('id')
          .eq('active', true)
          .limit(10);
        
        if (activeRiders && activeRiders.length > 0) {
          // Selecionar aleatoriamente um entregador
          const randomIndex = Math.floor(Math.random() * activeRiders.length);
          updateData.delivery_rider_id = activeRiders[randomIndex].id;
        }
      }
    }

    await supabase
      .from('orders')
      .update(updateData)
      .eq('id', orderId);

    res.json({
      paymentId: chargeResponse.data.id,
      status: chargeResponse.data.status,
      paymentStatus
    });
  } catch (error: any) {
    console.error('Erro ao processar cartão:', error.response?.data || error.message);
    res.status(500).json({ 
      message: 'Erro ao processar pagamento com cartão', 
      error: error.response?.data || error.message 
    });
  }
});

// GET /api/payments/pagseguro/public-key - Obter chave pública para criptografia
router.get('/pagseguro/public-key', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${PAGSEGURO_URL}/public-keys`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAGSEGURO_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    res.json({
      publicKey: response.data.public_key || response.data
    });
  } catch (error: any) {
    console.error('Erro ao obter chave pública:', error.response?.data || error.message);
    res.status(500).json({ 
      message: 'Erro ao obter chave pública', 
      error: error.response?.data || error.message 
    });
  }
});

// GET /api/payments/pagseguro/status/:paymentId - Verificar status do pagamento
router.get('/pagseguro/status/:paymentId', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${PAGSEGURO_URL}/charges/${req.params.paymentId}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAGSEGURO_TOKEN}`
        }
      }
    );

    const paymentStatus = response.data.status === 'PAID' ? 'approved' : 
                          response.data.status === 'CANCELLED' ? 'cancelled' : 'pending';

    // Atualizar pedido se o status mudou
    const { data: order } = await supabase
      .from('orders')
      .select('id, payment_status, delivery_type')
      .eq('payment_id', req.params.paymentId)
      .single();

    if (order && order.payment_status !== paymentStatus) {
      let updateData: any = { payment_status: paymentStatus };
      
      // Se o pagamento foi aprovado, calcular tempo de entrega e atribuir entregador (apenas para delivery)
      if (paymentStatus === 'approved' && order.delivery_type === 'delivery') {
        const now = new Date();
        const estimatedDelivery = new Date(now.getTime() + 45 * 60 * 1000); // 45 minutos
        
        updateData.payment_approved_at = now.toISOString();
        updateData.estimated_delivery_time = estimatedDelivery.toISOString();
        updateData.order_status = 'preparing';

        // Atribuir um entregador ativo aleatório
        const { data: activeRiders } = await supabase
          .from('delivery_riders')
          .select('id')
          .eq('active', true)
          .limit(10);
        
        if (activeRiders && activeRiders.length > 0) {
          const randomIndex = Math.floor(Math.random() * activeRiders.length);
          updateData.delivery_rider_id = activeRiders[randomIndex].id;
        }
      } else if (paymentStatus === 'approved') {
        // Para retirada, apenas atualizar status
        updateData.order_status = 'preparing';
        updateData.payment_approved_at = new Date().toISOString();
      }

      const { data: updatedOrder } = await supabase
        .from('orders')
        .update(updateData)
        .eq('id', order.id)
        .select(`
          *,
          delivery_riders (
            id,
            name,
            bike_plate,
            bike_color,
            bike_model
          )
        `)
        .single();

      return res.json({
        status: response.data.status,
        paymentStatus,
        order: updatedOrder
      });
    }

    // Buscar pedido completo com entregador
    const { data: fullOrder } = await supabase
      .from('orders')
      .select(`
        *,
        delivery_riders (
          id,
          name,
          bike_plate,
          bike_color,
          bike_model
        )
      `)
      .eq('payment_id', req.params.paymentId)
      .single();

    res.json({
      status: response.data.status,
      paymentStatus,
      order: fullOrder
    });
  } catch (error: any) {
    console.error('Erro ao verificar status:', error.response?.data || error.message);
    res.status(500).json({ 
      message: 'Erro ao verificar status do pagamento', 
      error: error.response?.data || error.message 
    });
  }
});

// GET /api/payments/order/:orderId/status - Verificar status do pedido por ID
router.get('/order/:orderId/status', async (req: Request, res: Response) => {
  try {
    const { data: order, error } = await supabase
      .from('orders')
      .select(`
        *,
        delivery_riders (
          id,
          name,
          bike_plate,
          bike_color,
          bike_model
        )
      `)
      .eq('id', req.params.orderId)
      .single();

    if (error) throw error;

    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    res.json(order);
  } catch (error: any) {
    console.error('Erro ao buscar status do pedido:', error);
    res.status(500).json({ 
      message: 'Erro ao buscar status do pedido', 
      error: error.message 
    });
  }
});

export default router;
