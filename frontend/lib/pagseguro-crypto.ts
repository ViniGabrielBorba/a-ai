// Criptografia RSA para dados do cartão PagSeguro
import forge from 'node-forge';

export async function encryptCardData(
  publicKey: string,
  cardNumber: string,
  cvv: string,
  expMonth: string,
  expYear: string
): Promise<string> {
  try {
    // Converter a chave pública PEM para formato forge
    const publicKeyObj = forge.pki.publicKeyFromPem(publicKey);
    
    // Preparar dados do cartão
    const cardData = {
      number: cardNumber.replace(/\s/g, ''),
      cvv: cvv,
      exp_month: expMonth,
      exp_year: expYear
    };
    
    // Converter para JSON
    const cardDataJson = JSON.stringify(cardData);
    
    // Criptografar com RSA
    const encrypted = publicKeyObj.encrypt(cardDataJson, 'RSA-OAEP', {
      md: forge.md.sha256.create(),
      mgf1: forge.mgf.mgf1.create(forge.md.sha256.create())
    });
    
    // Converter para base64
    return forge.util.encode64(encrypted);
  } catch (error) {
    console.error('Erro ao criptografar dados do cartão:', error);
    throw error;
  }
}

export async function getPublicKey(apiUrl: string): Promise<string> {
  try {
    const response = await fetch(`${apiUrl}/payments/pagseguro/public-key`);
    const data = await response.json();
    return data.publicKey;
  } catch (error) {
    console.error('Erro ao obter chave pública:', error);
    throw error;
  }
}

