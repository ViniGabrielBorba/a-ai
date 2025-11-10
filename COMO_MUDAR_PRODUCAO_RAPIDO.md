# 🚀 Mudar para Produção - Guia Rápido

## ⚠️ ATENÇÃO: Isso cobrará dinheiro real!

## 📝 Passos Rápidos

### 1. Obter Token de Produção

1. Acesse: https://pagseguro.uol.com.br
2. Login → Integrações → Minha Aplicação
3. Gere **Token de Produção**
4. Copie o token

### 2. Editar `backend/.env`

Altere estas linhas:

```env
PAGSEGURO_TOKEN=seu_token_de_producao
PAGSEGURO_EMAIL=vinigabriellborba@gmail.com
PAGSEGURO_ENV=production
```

**Mude:** `sandbox` → `production`

### 3. Reiniciar Backend

```bash
cd backend
# Ctrl+C para parar
npm run dev
```

## ✅ Pronto!

Agora os pagamentos cobrarão dinheiro real.

## 🧪 Teste Primeiro

Teste com valores pequenos:
- R$ 1,00
- R$ 5,00

## 🔄 Voltar para Testes

Se quiser voltar:

```env
PAGSEGURO_ENV=sandbox
```

---

**⚠️ Cuidado:** Em produção = dinheiro real!

