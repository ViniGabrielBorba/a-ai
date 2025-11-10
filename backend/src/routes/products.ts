import express, { Request, Response } from 'express';
import { supabase } from '../lib/supabase';

const router = express.Router();

// GET /api/products - Listar todos os produtos
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    
    let query = supabase
      .from('products')
      .select('*')
      .eq('available', true)
      .order('created_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    const { data: products, error } = await query;

    if (error) throw error;

    // Converter campos para formato esperado pelo frontend
    const formattedProducts = products.map(product => ({
      _id: product.id,
      name: product.name,
      description: product.description,
      price: parseFloat(product.price),
      category: product.category,
      image: product.image,
      sizes: product.sizes || undefined,
      available: product.available,
      createdAt: product.created_at,
      updatedAt: product.updated_at
    }));

    res.json(formattedProducts);
  } catch (error: any) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ message: 'Erro ao buscar produtos', error: error.message });
  }
});

// GET /api/products/:id - Buscar produto por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Converter para formato esperado pelo frontend
    const formattedProduct = {
      _id: product.id,
      name: product.name,
      description: product.description,
      price: parseFloat(product.price),
      category: product.category,
      image: product.image,
      sizes: product.sizes || undefined,
      available: product.available,
      createdAt: product.created_at,
      updatedAt: product.updated_at
    };

    res.json(formattedProduct);
  } catch (error: any) {
    console.error('Erro ao buscar produto:', error);
    res.status(500).json({ message: 'Erro ao buscar produto', error: error.message });
  }
});

export default router;
