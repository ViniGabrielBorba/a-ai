import express, { Request, Response } from 'express';
import { supabase } from '../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// POST /api/orders - Criar novo pedido
router.post('/', async (req: Request, res: Response) => {
  try {
    const orderNumber = `PED-${Date.now()}-${uuidv4().substring(0, 8).toUpperCase()}`;
    
    const orderData = {
      order_number: orderNumber,
      customer_name: req.body.customer.name,
      customer_phone: req.body.customer.phone,
      customer_address: req.body.customer.address || null,
      delivery_type: req.body.customer.deliveryType,
      items: req.body.items,
      total: req.body.total,
      payment_method: req.body.paymentMethod,
      payment_status: 'pending',
      order_status: 'pending',
      observations: req.body.observations || null,
      payment_id: null,
      qr_code: null
    };

    const { data: order, error } = await supabase
      .from('orders')
      .insert(orderData)
      .select()
      .single();

    if (error) throw error;

    // Converter para formato esperado pelo frontend
    const formattedOrder = {
      _id: order.id,
      orderNumber: order.order_number,
      customer: {
        name: order.customer_name,
        phone: order.customer_phone,
        address: order.customer_address,
        deliveryType: order.delivery_type
      },
      items: order.items,
      total: parseFloat(order.total),
      paymentMethod: order.payment_method,
      paymentStatus: order.payment_status,
      orderStatus: order.order_status,
      observations: order.observations,
      paymentId: order.payment_id,
      qrCode: order.qr_code,
      createdAt: order.created_at,
      updatedAt: order.updated_at
    };

    res.status(201).json(formattedOrder);
  } catch (error: any) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ message: 'Erro ao criar pedido', error: error.message });
  }
});

// GET /api/orders - Listar todos os pedidos (para admin)
router.get('/', async (req: Request, res: Response) => {
  try {
    const { data: orders, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Buscar entregadores para os pedidos
    const ordersWithRiders = await Promise.all(orders.map(async (order) => {
      let rider = null;
      if (order.delivery_rider_id) {
        const { data: riderData } = await supabase
          .from('delivery_riders')
          .select('id, name, bike_plate, bike_color, bike_model')
          .eq('id', order.delivery_rider_id)
          .single();
        rider = riderData;
      }
      return { ...order, rider };
    }));

    // Converter para formato esperado pelo frontend
    const formattedOrders = ordersWithRiders.map(order => ({
      _id: order.id,
      orderNumber: order.order_number,
      customer: {
        name: order.customer_name,
        phone: order.customer_phone,
        address: order.customer_address,
        deliveryType: order.delivery_type
      },
      items: order.items,
      total: parseFloat(order.total),
      paymentMethod: order.payment_method,
      paymentStatus: order.payment_status,
      orderStatus: order.order_status,
      observations: order.observations,
      paymentId: order.payment_id,
      qrCode: order.qr_code,
      deliveryRider: order.rider,
      paymentApprovedAt: order.payment_approved_at,
      estimatedDeliveryTime: order.estimated_delivery_time,
      createdAt: order.created_at,
      updatedAt: order.updated_at
    }));

    res.json(formattedOrders);
  } catch (error: any) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ message: 'Erro ao buscar pedidos', error: error.message });
  }
});

// GET /api/orders/:id - Buscar pedido por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { data: order, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;

    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    // Converter para formato esperado pelo frontend
    const formattedOrder = {
      _id: order.id,
      orderNumber: order.order_number,
      customer: {
        name: order.customer_name,
        phone: order.customer_phone,
        address: order.customer_address,
        deliveryType: order.delivery_type
      },
      items: order.items,
      total: parseFloat(order.total),
      paymentMethod: order.payment_method,
      paymentStatus: order.payment_status,
      orderStatus: order.order_status,
      observations: order.observations,
      paymentId: order.payment_id,
      qrCode: order.qr_code,
      createdAt: order.created_at,
      updatedAt: order.updated_at
    };

    res.json(formattedOrder);
  } catch (error: any) {
    console.error('Erro ao buscar pedido:', error);
    res.status(500).json({ message: 'Erro ao buscar pedido', error: error.message });
  }
});

// PATCH /api/orders/:id - Atualizar status do pedido
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const { orderStatus, paymentStatus } = req.body;
    
    const updateData: any = {};
    if (orderStatus) updateData.order_status = orderStatus;
    if (paymentStatus) updateData.payment_status = paymentStatus;

    const { data: order, error } = await supabase
      .from('orders')
      .update(updateData)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;

    if (!order) {
      return res.status(404).json({ message: 'Pedido não encontrado' });
    }

    // Converter para formato esperado pelo frontend
    const formattedOrder = {
      _id: order.id,
      orderNumber: order.order_number,
      customer: {
        name: order.customer_name,
        phone: order.customer_phone,
        address: order.customer_address,
        deliveryType: order.delivery_type
      },
      items: order.items,
      total: parseFloat(order.total),
      paymentMethod: order.payment_method,
      paymentStatus: order.payment_status,
      orderStatus: order.order_status,
      observations: order.observations,
      paymentId: order.payment_id,
      qrCode: order.qr_code,
      createdAt: order.created_at,
      updatedAt: order.updated_at
    };

    res.json(formattedOrder);
  } catch (error: any) {
    console.error('Erro ao atualizar pedido:', error);
    res.status(500).json({ message: 'Erro ao atualizar pedido', error: error.message });
  }
});

export default router;
