import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { supabase } from '../lib/supabase';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();

// POST /api/admin/login - Login do administrador
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { data: admin, error } = await supabase
      .from('admins')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !admin) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign(
      { adminId: admin.id },
      process.env.JWT_SECRET || '',
      { expiresIn: '24h' }
    );

    res.json({ token, admin: { id: admin.id, email: admin.email } });
  } catch (error: any) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
});

// POST /api/admin/products - Criar produto (protegido)
router.post('/products', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const productData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      sizes: req.body.sizes || null,
      available: req.body.available !== undefined ? req.body.available : true
    };

    const { data: product, error } = await supabase
      .from('products')
      .insert(productData)
      .select()
      .single();

    if (error) throw error;

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

    res.status(201).json(formattedProduct);
  } catch (error: any) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
  }
});

// PUT /api/admin/products/:id - Atualizar produto (protegido)
router.put('/products/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const updateData: any = {};
    if (req.body.name) updateData.name = req.body.name;
    if (req.body.description) updateData.description = req.body.description;
    if (req.body.price !== undefined) updateData.price = req.body.price;
    if (req.body.category) updateData.category = req.body.category;
    if (req.body.image) updateData.image = req.body.image;
    if (req.body.sizes !== undefined) updateData.sizes = req.body.sizes;
    if (req.body.available !== undefined) updateData.available = req.body.available;

    const { data: product, error } = await supabase
      .from('products')
      .update(updateData)
      .eq('id', req.params.id)
      .select()
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
    console.error('Erro ao atualizar produto:', error);
    res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
  }
});

// DELETE /api/admin/products/:id - Deletar produto (protegido)
router.delete('/products/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;

    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error: any) {
    console.error('Erro ao deletar produto:', error);
    res.status(500).json({ message: 'Erro ao deletar produto', error: error.message });
  }
});

export default router;
