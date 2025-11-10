export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'acai-tradicional' | 'copos-tigelas' | 'sorvetes' | 'adicionais';
  image: string;
  sizes?: Array<{ size: string; price: number }>;
  available: boolean;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  customer_address?: string;
  delivery_type: 'delivery' | 'pickup';
  items: OrderItem[];
  total: number;
  payment_method: 'pix' | 'credit-card' | 'cash';
  payment_status: 'pending' | 'approved' | 'cancelled';
  order_status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  observations?: string;
  payment_id?: string;
  qr_code?: string;
  created_at: string;
  updated_at: string;
}

export interface Admin {
  id: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
}

