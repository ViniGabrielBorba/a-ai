# 💰 Mudar para Produção - Pagamentos Reais

## ⚠️ ATENÇÃO: Dinheiro Real!

Quando mudar para produção, o sistema **COBRARÁ DINHEIRO REAL** dos clientes.

## 📋 Passo a Passo para Produção

### 1. Obter Token de Produção

1. Acesse: https://pagseguro.uol.com.br
2. Faça login na sua conta
3. Vá em **"Integrações"** ou **"Minhas Aplicações"**
4. Selecione sua aplicação
5. Gere o **Token de Produção**
6. **COPIE O TOKEN** (você só verá uma vez!)

### 2. Solicitar Aprovação (se necessário)

Algumas contas precisam de aprovação do PagSeguro:
- Complete seu cadastro
- Envie documentos necessários
- Aguarde aprovação (pode levar alguns dias)

### 3. Configurar no Backend

Edite o arquivo `backend/.env`:

```env
PAGSEGURO_TOKEN=seu_token_de_producao_aqui
PAGSEGURO_EMAIL=vinigabriellborba@gmail.com
PAGSEGURO_ENV=production
```

**IMPORTANTE:** Mude de `sandbox`` para `production`

### 4. Reiniciar Backend

```bash
cd backend
# Pare o servidor (Ctrl+C)
npm run dev
```

### 5. Testar em Produção

⚠️ **CUIDADO:** Agora cobrará dinheiro real!

Teste com valores pequenos primeiro:
- R$ 1,00
- R$ 5,00

## ✅ Checklist Antes de Produção

- [ ] Conta PagSeguro aprovada
- [ ] Token de produção obtido
- [ ] Dados bancários configurados no PagSeguro
- [ ] Testes em sandbox funcionando
- [ ] Variável `PAGSEGURO_ENV=production` configurada
- [ ] Token de produção no `.env`
- [ ] Backend reiniciado
- [ ] Teste com valor pequeno realizado

## 🔄 Voltar para Sandbox (Testes)

Se quiser voltar a testar sem cobrar dinheiro:

```env
PAGSEGURO_ENV=sandbox
PAGSEGURO_TOKEN=seu_token_sandbox
```

## 💡 Dicas Importantes

1. **Sempre teste no sandbox primeiro**
2. **Use valores pequenos** nos primeiros testes em produção
3. **Monitore as transações** no painel do PagSeguro
4. **Guarde o token** em local seguro
5. **Não compartilhe** seu token de produção

## 📊 Taxas do PagSeguro

O PagSeguro cobra taxas sobre cada transação:
- **Pix:** ~1,99% + R$ 0,40
- **Cartão de Crédito:** ~3,99% + R$ 0,40
- **Débito:** ~1,99% + R$ 0,40

Consulte o site oficial para valores atualizados.

## 🆘 Problemas Comuns

### Erro: "Token inválido"
- Verifique se está usando token de produção
- Confirme que o token está completo

### Erro: "Conta não aprovada"
- Complete o cadastro no PagSeguro
- Envie documentos necessários
- Aguarde aprovação

### Pagamentos não processam
- Verifique se `PAGSEGURO_ENV=production`
- Confirme que o token está correto
- Veja os logs do backend

## 🔐 Segurança

- ✅ Nunca commite o `.env` no git
- ✅ Use variáveis de ambiente
- ✅ Mantenha o token seguro
- ✅ Monitore transações regularmente

---

**⚠️ Lembre-se:** Em produção, você está lidando com dinheiro real!

