-- Script SQL para criar a tabela delivery_riders no Supabase
-- Execute este script no SQL Editor do Supabase Dashboard

-- Criar tabela delivery_riders
CREATE TABLE IF NOT EXISTS delivery_riders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  birth_date DATE NOT NULL,
  cpf TEXT NOT NULL UNIQUE,
  bike_plate TEXT NOT NULL,
  bike_color TEXT NOT NULL,
  bike_model TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_delivery_riders_active ON delivery_riders(active);
CREATE INDEX IF NOT EXISTS idx_delivery_riders_cpf ON delivery_riders(cpf);

-- Comentários para documentação
COMMENT ON TABLE delivery_riders IS 'Tabela para armazenar dados dos entregadores';
COMMENT ON COLUMN delivery_riders.id IS 'ID único do entregador';
COMMENT ON COLUMN delivery_riders.name IS 'Nome completo do entregador';
COMMENT ON COLUMN delivery_riders.gender IS 'Gênero (masculino, feminino, outro)';
COMMENT ON COLUMN delivery_riders.birth_date IS 'Data de nascimento';
COMMENT ON COLUMN delivery_riders.cpf IS 'CPF do entregador (apenas números, único)';
COMMENT ON COLUMN delivery_riders.bike_plate IS 'Placa da moto';
COMMENT ON COLUMN delivery_riders.bike_color IS 'Cor da moto';
COMMENT ON COLUMN delivery_riders.bike_model IS 'Modelo da moto';
COMMENT ON COLUMN delivery_riders.active IS 'Indica se o entregador está ativo';

