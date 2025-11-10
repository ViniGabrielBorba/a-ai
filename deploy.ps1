# Script de Deploy para Backend
# Execute este script para fazer deploy no Fly.io

Write-Host "🚀 Iniciando deploy do backend..." -ForegroundColor Green

# Verificar se fly CLI está instalado
$flyInstalled = Get-Command fly -ErrorAction SilentlyContinue

if (-not $flyInstalled) {
    Write-Host "❌ Fly CLI não está instalado!" -ForegroundColor Red
    Write-Host "📖 Instalando Fly CLI..." -ForegroundColor Yellow
    
    # Tentar instalar Fly CLI
    try {
        Invoke-WebRequest -Uri "https://fly.io/install.ps1" -UseBasicParsing | Invoke-Expression
        Write-Host "✅ Fly CLI instalado com sucesso!" -ForegroundColor Green
        Write-Host "⚠️  Por favor, reinicie o PowerShell e execute este script novamente." -ForegroundColor Yellow
        exit
    } catch {
        Write-Host "❌ Erro ao instalar Fly CLI: $_" -ForegroundColor Red
        Write-Host "📖 Por favor, instale manualmente: https://fly.io/docs/getting-started/installing-flyctl/" -ForegroundColor Yellow
        exit
    }
}

# Verificar se está logado
Write-Host "🔐 Verificando login no Fly.io..." -ForegroundColor Yellow
$loginCheck = fly auth whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Não está logado no Fly.io!" -ForegroundColor Red
    Write-Host "🔐 Fazendo login..." -ForegroundColor Yellow
    fly auth login
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erro ao fazer login!" -ForegroundColor Red
        exit
    }
}

# Navegar para pasta do backend
Write-Host "📁 Navegando para pasta do backend..." -ForegroundColor Yellow
Set-Location backend

# Verificar se fly.toml existe
if (-not (Test-Path "fly.toml")) {
    Write-Host "❌ Arquivo fly.toml não encontrado!" -ForegroundColor Red
    Write-Host "📖 Inicializando projeto Fly.io..." -ForegroundColor Yellow
    fly launch
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erro ao inicializar projeto!" -ForegroundColor Red
        exit
    }
}

# Verificar variáveis de ambiente
Write-Host "🔍 Verificando variáveis de ambiente..." -ForegroundColor Yellow
$secrets = fly secrets list 2>&1

if ($secrets -like "*No secrets*" -or $secrets -like "*error*") {
    Write-Host "⚠️  Variáveis de ambiente não configuradas!" -ForegroundColor Yellow
    Write-Host "📖 Configure as variáveis de ambiente manualmente:" -ForegroundColor Yellow
    Write-Host "   fly secrets set SUPABASE_URL=..." -ForegroundColor Cyan
    Write-Host "   fly secrets set SUPABASE_ANON_KEY=..." -ForegroundColor Cyan
    Write-Host "   fly secrets set JWT_SECRET=..." -ForegroundColor Cyan
    Write-Host ""
    $continue = Read-Host "Deseja continuar mesmo assim? (s/n)"
    if ($continue -ne "s") {
        exit
    }
}

# Fazer deploy
Write-Host "🚀 Fazendo deploy..." -ForegroundColor Green
fly deploy

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host "🔗 Verifique a URL da aplicação:" -ForegroundColor Yellow
    fly info
} else {
    Write-Host "❌ Erro ao fazer deploy!" -ForegroundColor Red
    Write-Host "📖 Verifique os logs: fly logs" -ForegroundColor Yellow
}

# Voltar para pasta raiz
Set-Location ..

