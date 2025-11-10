# 🛠️ Como Instalar Fly CLI no Windows

## 📋 Pré-requisitos:

- Windows 10/11
- PowerShell (já incluído no Windows)
- Acesso à internet

## 🚀 Método 1: Instalação Automática (Recomendado)

### 1. Abra PowerShell como Administrador:

1. Pressione `Win + X`
2. Clique em "Windows PowerShell (Admin)" ou "Terminal (Admin)"

### 2. Execute o comando de instalação:

```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

### 3. Adicione ao PATH (se necessário):

O instalador geralmente adiciona automaticamente, mas se não funcionar:

1. Adicione `%USERPROFILE%\.fly\bin` ao PATH do sistema
2. Reinicie o PowerShell

### 4. Verificar instalação:

```powershell
fly version
```

## 🚀 Método 2: Instalação Manual

### 1. Baixar Fly CLI:

1. Acesse: [https://fly.io/docs/getting-started/installing-flyctl/](https://fly.io/docs/getting-started/installing-flyctl/)
2. Baixe a versão para Windows
3. Extraia o arquivo ZIP

### 2. Adicionar ao PATH:

1. Copie o arquivo `fly.exe` para uma pasta (ex: `C:\fly\`)
2. Adicione essa pasta ao PATH do sistema:
   - Pressione `Win + R`
   - Digite: `sysdm.cpl`
   - Clique em "Avançado" → "Variáveis de Ambiente"
   - Em "Variáveis do sistema", encontre "Path"
   - Clique em "Editar" → "Novo"
   - Adicione: `C:\fly\`
   - Clique em "OK" em todas as janelas

### 3. Reiniciar PowerShell:

Feche e abra o PowerShell novamente.

### 4. Verificar instalação:

```powershell
fly version
```

## 🔐 Login no Fly.io

Após instalar, faça login:

```powershell
fly auth login
```

Isso vai abrir o navegador para fazer login.

## ✅ Verificar se está funcionando:

```powershell
fly version
fly auth whoami
```

## 🚀 Após instalar, fazer deploy:

```powershell
cd backend
fly deploy
```

## 🆘 Problemas Comuns:

### Erro: "fly não é reconhecido"
**Solução:** Verifique se o Fly CLI está no PATH. Reinicie o PowerShell.

### Erro: "execution policy"
**Solução:** Execute no PowerShell como Admin:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Erro: "Não é possível conectar"
**Solução:** Verifique sua conexão com a internet e firewall.

## 📝 Próximos Passos:

1. ✅ Instalar Fly CLI
2. ✅ Fazer login: `fly auth login`
3. ✅ Navegar para pasta: `cd backend`
4. ✅ Fazer deploy: `fly deploy`

---

**Após instalar o Fly CLI, execute novamente o deploy!** 🚀

