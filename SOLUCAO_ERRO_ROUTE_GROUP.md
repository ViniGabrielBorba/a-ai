# 🔧 Solução: Erro de Route Group no Next.js

## ❌ Erro:

```
nenhum arquivo ou diretório encontrado, lstat '/vercel/path0/frontend/.next/server/app/(admin)/page_client-reference-manifest.js'
```

## 🔍 Causa:

Havia **rotas duplicadas** para `/admin`:

1. `frontend/app/(admin)/page.tsx` - Route group (não aparece na URL)
2. `frontend/app/admin/page.tsx` - Rota normal

Isso causava conflito no build do Next.js, pois o framework não sabia qual rota usar.

## ✅ Solução Aplicada:

**Removida a pasta `(admin)`** - mantendo apenas a rota `/admin` normal.

### Estrutura Correta:

```
frontend/app/
├── admin/
│   ├── layout.tsx  ✅ (Layout específico do admin)
│   └── page.tsx     ✅ (Página do admin)
├── cardapio/
├── carrinho/
└── ...
```

### Como Funciona Agora:

- **Rota `/admin`:** Usa `frontend/app/admin/page.tsx` e `frontend/app/admin/layout.tsx`
- **Layout Condicional:** O `ConditionalLayout` detecta rotas que começam com `/admin` e não mostra Navbar/Footer
- **AdminNavbar:** Aparece apenas nas rotas `/admin` através do `layout.tsx` do admin

## 📝 O que foi feito:

1. ✅ Removido `frontend/app/(admin)/page.tsx`
2. ✅ Removido `frontend/app/(admin)/layout.tsx`
3. ✅ Mantido `frontend/app/admin/page.tsx`
4. ✅ Mantido `frontend/app/admin/layout.tsx`
5. ✅ `ConditionalLayout` continua funcionando corretamente

## ✅ Resultado:

- ✅ Build do Next.js funciona corretamente
- ✅ Rota `/admin` funciona normalmente
- ✅ Layout separado do admin funciona
- ✅ Sem conflitos de rotas

---

**O erro foi corrigido removendo a rota duplicada!** ✅

