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

// Railway e Render configuram a porta via variável de ambiente
// Se não estiver definida, usa a porta padrão 3001

// Middleware CORS
// Permitir múltiplas origens para desenvolvimento e produção
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'http://localhost:3000',
  // Adicione aqui os domínios do Netlify/Vercel quando fizer deploy
  // Exemplo: 'https://seu-site.netlify.app'
];

// Função para verificar origem permitida
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    // Permitir requisições sem origem (ex: mobile apps, Postman)
    if (!origin) return callback(null, true);
    
    // Permitir se estiver na lista ou for localhost
    if (allowedOrigins.includes(origin) || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      callback(null, true);
    } else if (origin.includes('.netlify.app') || origin.includes('.vercel.app')) {
      // Permitir qualquer subdomínio do Netlify ou Vercel
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
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

