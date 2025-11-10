import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: 'acai-tradicional' | 'copos-tigelas' | 'sorvetes' | 'adicionais';
  image: string;
  sizes?: Array<{ size: string; price: number }>;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['acai-tradicional', 'copos-tigelas', 'sorvetes', 'adicionais'],
    required: true
  },
  image: { type: String, required: true },
  sizes: [{
    size: String,
    price: Number
  }],
  available: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IProduct>('Product', ProductSchema);

