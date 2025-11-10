# 🌐 URLs do PagSeguro

## 📍 URLs da API

### Sandbox (Testes)
```
https://sandbox.api.pagseguro.com
```
- ✅ Não cobra dinheiro real
- ✅ Use para desenvolver e testar
- ✅ Cartões de teste disponíveis

### Produção (Dinheiro Real)
```
https://api.pagseguro.com
```
- ⚠️ Cobra dinheiro real
- ⚠️ Use apenas quando estiver pronto
- ⚠️ Requer token de produção

## 🔧 Configuração Atual

O sistema já está configurado para usar a URL correta automaticamente:

- Se `PAGSEGURO_ENV=sandbox` → usa `https://sandbox.api.pagseguro.com`
- Se `PAGSEGURO_ENV=production` → usa `https://api.pagseguro.com`

## 📝 Status Atual

**Ambiente:** Sandbox (testes)
**URL:** https://sandbox.api.pagseguro.com
**Token:** Configurado (sandbox)

## 🔄 Para Mudar para Produção

1. Obter token de produção
2. Alterar `PAGSEGURO_ENV=production` no `.env`
3. Reiniciar backend

A URL mudará automaticamente!

---

**Nota:** A URL que você enviou é do sandbox, que é onde estamos agora.

