import express, { Request, Response } from 'express';
import { supabaseAdmin } from '../lib/supabase';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = express.Router();

// GET /api/delivery-riders - Listar todos os entregadores
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    console.log('Buscando entregadores...');
    
    const { data: riders, error } = await supabaseAdmin
      .from('delivery_riders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Erro do Supabase ao buscar entregadores:', error);
      console.error('Detalhes do erro:', JSON.stringify(error, null, 2));
      throw error;
    }

    console.log(`Encontrados ${riders?.length || 0} entregadores`);
    res.json(riders || []);
  } catch (error: any) {
    console.error('Erro completo ao buscar entregadores:', error);
    console.error('Stack trace:', error.stack);
    
    // Retornar mais detalhes do erro para debug
    res.status(500).json({ 
      message: 'Erro ao buscar entregadores', 
      error: error.message,
      details: error.details || error.hint || 'Verifique os logs do servidor',
      code: error.code
    });
  }
});

// GET /api/delivery-riders/active - Listar entregadores ativos
router.get('/active', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { data: riders, error } = await supabaseAdmin
      .from('delivery_riders')
      .select('*')
      .eq('active', true)
      .order('name', { ascending: true });

    if (error) throw error;

    res.json(riders);
  } catch (error: any) {
    console.error('Erro ao buscar entregadores ativos:', error);
    res.status(500).json({ message: 'Erro ao buscar entregadores ativos', error: error.message });
  }
});

// POST /api/delivery-riders - Criar novo entregador
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const riderData = {
      name: req.body.name,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
      cpf: req.body.cpf.replace(/\D/g, ''), // Remove caracteres não numéricos
      bike_plate: req.body.bike_plate.toUpperCase().replace(/\s/g, ''),
      bike_color: req.body.bike_color,
      bike_model: req.body.bike_model,
      active: req.body.active !== undefined ? req.body.active : true
    };

    const { data: rider, error } = await supabaseAdmin
      .from('delivery_riders')
      .insert(riderData)
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(rider);
  } catch (error: any) {
    console.error('Erro ao criar entregador:', error);
    res.status(500).json({ message: 'Erro ao criar entregador', error: error.message });
  }
});

// PUT /api/delivery-riders/:id - Atualizar entregador
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const updateData: any = {};
    if (req.body.name) updateData.name = req.body.name;
    if (req.body.gender) updateData.gender = req.body.gender;
    if (req.body.birth_date) updateData.birth_date = req.body.birth_date;
    if (req.body.cpf) updateData.cpf = req.body.cpf.replace(/\D/g, '');
    if (req.body.bike_plate) updateData.bike_plate = req.body.bike_plate.toUpperCase().replace(/\s/g, '');
    if (req.body.bike_color) updateData.bike_color = req.body.bike_color;
    if (req.body.bike_model) updateData.bike_model = req.body.bike_model;
    if (req.body.active !== undefined) updateData.active = req.body.active;

    const { data: rider, error } = await supabaseAdmin
      .from('delivery_riders')
      .update(updateData)
      .eq('id', req.params.id)
      .select()
      .single();

    if (error) throw error;

    if (!rider) {
      return res.status(404).json({ message: 'Entregador não encontrado' });
    }

    res.json(rider);
  } catch (error: any) {
    console.error('Erro ao atualizar entregador:', error);
    res.status(500).json({ message: 'Erro ao atualizar entregador', error: error.message });
  }
});

// DELETE /api/delivery-riders/:id - Deletar entregador
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const { error } = await supabaseAdmin
      .from('delivery_riders')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;

    res.json({ message: 'Entregador deletado com sucesso' });
  } catch (error: any) {
    console.error('Erro ao deletar entregador:', error);
    res.status(500).json({ message: 'Erro ao deletar entregador', error: error.message });
  }
});

export default router;

