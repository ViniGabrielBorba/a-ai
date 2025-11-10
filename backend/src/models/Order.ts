import mongoose, { Schema, Document } from 'mongoose';

export interface IOrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

export interface IOrder extends Document {
  orderNumber: string;
  customer: {
    name: string;
    phone: string;
    address?: string;
    deliveryType: 'delivery' | 'pickup';
  };
  items: IOrderItem[];
  total: number;
  paymentMethod: 'pix' | 'credit-card' | 'cash';
  paymentStatus: 'pending' | 'approved' | 'cancelled';
  orderStatus: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  observations?: string;
  paymentId?: string;
  qrCode?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>({
  orderNumber: { type: String, required: true, unique: true },
  customer: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: String,
    deliveryType: { type: String, enum: ['delivery', 'pickup'], required: true }
  },
  items: [{
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    size: String
  }],
  total: { type: Number, required: true },
  paymentMethod: {
    type: String,
    enum: ['pix', 'credit-card', 'cash'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'approved', 'cancelled'],
    default: 'pending'
  },
  orderStatus: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'delivered', 'cancelled'],
    default: 'pending'
  },
  observations: String,
  paymentId: String,
  qrCode: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IOrder>('Order', OrderSchema);

