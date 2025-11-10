// Script para testar conexão com PagSeguro
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const PAGSEGURO_ENV = process.env.PAGSEGURO_ENV || 'sandbox';
const PAGSEGURO_URL = PAGSEGURO_ENV === 'production' 
  ? 'https://api.pagseguro.com' 
  : 'https://sandbox.api.pagseguro.com';

const PAGSEGURO_TOKEN = process.env.PAGSEGURO_TOKEN;

async function testPagSeguro() {
  console.log('🔍 Testando conexão com PagSeguro...\n');
  console.log('Ambiente:', PAGSEGURO_ENV);
  console.log('URL:', PAGSEGURO_URL);
  console.log('Token:', PAGSEGURO_TOKEN ? `${PAGSEGURO_TOKEN.substring(0, 20)}...` : 'NÃO CONFIGURADO');
  console.log('\n');

  try {
    // Teste 1: Verificar chave pública
    console.log('1️⃣ Testando endpoint de public-keys...');
    try {
      const publicKeyResponse = await axios.get(
        `${PAGSEGURO_URL}/public-keys`,
        {
          headers: {
            'Authorization': `Bearer ${PAGSEGURO_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('✅ Public key obtida com sucesso!');
      console.log('Resposta:', JSON.stringify(publicKeyResponse.data, null, 2));
    } catch (error: any) {
      console.error('❌ Erro ao obter public key:', error.response?.data || error.message);
    }

    console.log('\n');

    // Teste 2: Criar uma cobrança Pix de teste
    console.log('2️⃣ Testando criação de cobrança Pix...');
    try {
      // Calcular data de expiração (1 hora a partir de agora)
      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 1);
      const expirationDateISO = expirationDate.toISOString();

      const chargePayload = {
        reference_id: `test-${Date.now()}`,
        description: 'Teste de Pix - Açaí do Pará',
        amount: {
          value: 1250, // R$ 12,50 em centavos
          currency: 'BRL'
        },
        payment_method: {
          type: 'PIX',
          pix: {
            expiration_date: expirationDateISO // Data de expiração no formato ISO
          }
        },
        customer: {
          name: 'Cliente Teste',
          email: 'teste@teste.com',
          tax_id: '12345678909'
        }
      };

      console.log('Payload:', JSON.stringify(chargePayload, null, 2));

      const chargeResponse = await axios.post(
        `${PAGSEGURO_URL}/charges`,
        chargePayload,
        {
          headers: {
            'Authorization': `Bearer ${PAGSEGURO_TOKEN}`,
            'Content-Type': 'application/json',
            'x-api-version': '4.0'
          }
        }
      );

      console.log('✅ Cobrança criada com sucesso!');
      console.log('Resposta completa:', JSON.stringify(chargeResponse.data, null, 2));
      
      // Tentar extrair QR Code
      let qrCode = '';
      if (chargeResponse.data.qr_codes && chargeResponse.data.qr_codes.length > 0) {
        qrCode = chargeResponse.data.qr_codes[0].text || chargeResponse.data.qr_codes[0].code || '';
      } else if (chargeResponse.data.links && chargeResponse.data.links.length > 0) {
        qrCode = chargeResponse.data.links.find((link: any) => link.rel === 'QR_CODE')?.href || '';
      } else if (chargeResponse.data.pix && chargeResponse.data.pix.qr_code) {
        qrCode = chargeResponse.data.pix.qr_code;
      } else if (chargeResponse.data.payment_method?.pix?.qr_code) {
        qrCode = chargeResponse.data.payment_method.pix.qr_code;
      }

      if (qrCode) {
        console.log('✅ QR Code encontrado:', qrCode.substring(0, 50) + '...');
      } else {
        console.log('⚠️ QR Code não encontrado na resposta');
        console.log('Estrutura da resposta:', Object.keys(chargeResponse.data));
      }

    } catch (error: any) {
      console.error('❌ Erro ao criar cobrança:', error.response?.data || error.message);
      if (error.response?.data) {
        console.error('Detalhes do erro:', JSON.stringify(error.response.data, null, 2));
      }
    }

  } catch (error: any) {
    console.error('❌ Erro geral:', error.message);
  }
}

testPagSeguro();

