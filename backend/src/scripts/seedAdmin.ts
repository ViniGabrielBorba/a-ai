import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import { supabase } from '../lib/supabase';

dotenv.config();

const seedAdmin = async () => {
  try {
    const email = process.env.ADMIN_EMAIL || 'admin@acaidopara.com';
    const password = process.env.ADMIN_PASSWORD || 'admin123';

    // Verificar se admin já existe
    const { data: existingAdmin } = await supabase
      .from('admins')
      .select('id')
      .eq('email', email)
      .single();

    if (existingAdmin) {
      console.log('⚠️ Admin já existe');
      process.exit(0);
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar admin
    const { data: admin, error } = await supabase
      .from('admins')
      .insert({
        email,
        password: hashedPassword
      })
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Admin criado com sucesso!');
    console.log(`Email: ${admin.email}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao criar admin:', error);
    process.exit(1);
  }
};

seedAdmin();
