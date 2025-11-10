import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './lib/supabase';
import productRoutes from './routes/products';
import orderRoutes from './routes/orders';
import adminRoutes from './routes/admin';
import paymentRoutes from './routes/payments';
import deliveryRiderRoutes from './routes/delivery-riders';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/delivery-riders', deliveryRiderRoutes);

// Health check
app.get('/api/health', async (req, res) => {
  try {
    // Testar conexão com Supabase
    const { error } = await supabase.from('products').select('id').limit(1);
    if (error) throw error;
    
    res.json({ status: 'ok', message: 'API está funcionando!', database: 'Supabase conectado' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Erro ao conectar com Supabase', error });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`✅ Conectado ao Supabase`);
});

export default app;

