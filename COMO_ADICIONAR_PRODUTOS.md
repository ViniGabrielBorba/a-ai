# 📦 Como Adicionar Produtos no Cardápio

## 🎯 Passo a Passo Completo

### 1. Acessar o Painel Admin

1. Abra o navegador e acesse: **http://localhost:3000/admin**
2. Faça login com:
   - **Email:** `admin@acaidopara.com`
   - **Senha:** `admin123`

### 2. Adicionar um Produto

1. No painel admin, você verá duas abas:
   - **Pedidos** (já aberta)
   - **Produtos** (clique aqui)

2. Clique no botão **"Adicionar Produto"** (canto superior direito)

3. Preencha o formulário:

   **Nome do Produto:**
   - Exemplo: "Açaí Tradicional 500ml"
   - Exemplo: "Tigela Completa com Granola"
   - Exemplo: "Sorvete de Açaí"

   **Descrição:**
   - Exemplo: "Açaí puro e gelado, perfeito para refrescar"
   - Exemplo: "Açaí com granola, banana e leite condensado"
   - Exemplo: "Sorvete cremoso de açaí"

   **Preço:**
   - Digite apenas o número (ex: 12.50)
   - O sistema adiciona "R$" automaticamente

   **Categoria:**
   - Selecione uma das opções:
     - **Açaí Tradicional**
     - **Copos e Tigelas**
     - **Sorvetes**
     - **Adicionais**

   **URL da Imagem:**
   - Você pode usar:
     - Links do Unsplash (ex: `https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500`)
     - Links de outras imagens na internet
     - Ou mais tarde configurar upload de imagens

   **Disponível:**
   - Marque a caixa se o produto está disponível
   - Desmarque para ocultar temporariamente

4. Clique em **"Salvar"**

### 3. Ver o Produto no Cardápio

1. Acesse: **http://localhost:3000/cardapio**
2. Seu produto aparecerá na categoria selecionada
3. Clientes podem adicionar ao carrinho

## 📝 Exemplos de Produtos

### Açaí Tradicional
```
Nome: Açaí Tradicional 300ml
Descrição: Açaí puro e gelado, perfeito para refrescar
Preço: 10.00
Categoria: Açaí Tradicional
Imagem: https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500
```

### Copos e Tigelas
```
Nome: Tigela Completa
Descrição: Açaí com granola, banana, leite condensado e mel
Preço: 18.00
Categoria: Copos e Tigelas
Imagem: https://images.unsplash.com/photo-1609501676725-7186f1f4b32e?w=500
```

### Sorvetes
```
Nome: Sorvete de Açaí
Descrição: Sorvete cremoso de açaí, super gelado
Preço: 8.00
Categoria: Sorvetes
Imagem: https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500
```

### Adicionais
```
Nome: Granola
Descrição: Granola crocante para acompanhar
Preço: 3.00
Categoria: Adicionais
Imagem: https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500
```

## 🖼️ Onde Encontrar Imagens

### Opção 1: Unsplash (Gratuito)
1. Acesse: https://unsplash.com
2. Busque por "acai" ou "açaí"
3. Clique na imagem
4. Clique em "Download" ou copie o link
5. Use o link no campo "URL da Imagem"

### Opção 2: Usar Links Diretos
```
https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500
https://images.unsplash.com/photo-1609501676725-7186f1f4b32e?w=500
https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500
```

### Opção 3: Suas Próprias Imagens
- Faça upload para um serviço como:
  - Imgur
  - Cloudinary
  - Google Drive (compartilhar como link público)
- Cole o link no campo "URL da Imagem"

## ✏️ Editar Produto

1. No painel admin → aba **Produtos**
2. Encontre o produto que deseja editar
3. Clique em **"Editar"**
4. Altere os dados necessários
5. Clique em **"Salvar"**

## 🗑️ Excluir Produto

1. No painel admin → aba **Produtos**
2. Encontre o produto que deseja excluir
3. Clique em **"Excluir"**
4. Confirme a exclusão

## 💡 Dicas

1. **Nomes claros:** Use nomes descritivos e atrativos
2. **Descrições atrativas:** Descreva o produto de forma apetitosa
3. **Preços corretos:** Verifique os valores antes de salvar
4. **Imagens de qualidade:** Use imagens nítidas e apetitosas
5. **Categorias corretas:** Organize bem os produtos por categoria

## 🎨 Estrutura Recomendada

### Açaí Tradicional
- Açaí Tradicional 300ml - R$ 10,00
- Açaí Tradicional 500ml - R$ 12,00
- Açaí Tradicional 700ml - R$ 15,00
- Açaí Tradicional 1L - R$ 20,00

### Copos e Tigelas
- Tigela Pequena - R$ 15,00
- Tigela Média - R$ 18,00
- Tigela Grande - R$ 22,00
- Tigela Completa - R$ 25,00

### Sorvetes
- Sorvete de Açaí - R$ 8,00
- Sorvete de Açaí com Cobertura - R$ 10,00
- Picolé de Açaí - R$ 5,00

### Adicionais
- Granola - R$ 3,00
- Banana - R$ 2,00
- Leite Condensado - R$ 2,00
- Mel - R$ 2,00
- Morango - R$ 3,00

## ✅ Checklist

- [ ] Acessei o painel admin
- [ ] Fiz login
- [ ] Cliquei na aba "Produtos"
- [ ] Cliquei em "Adicionar Produto"
- [ ] Preenchi todos os campos
- [ ] Adicionei uma imagem
- [ ] Salvei o produto
- [ ] Verifiquei no cardápio

---

**Pronto!** Agora você sabe como adicionar produtos! 🎉

