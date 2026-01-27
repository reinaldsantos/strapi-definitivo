# setup-docker.ps1 - Script de configuração Docker
Write-Host "🐳 CONFIGURAÇÃO DOCKER PARA RENDER" -ForegroundColor Cyan

# Testar Docker localmente
docker --version

# Build da imagem
Write-Host "Build da imagem Docker..." -ForegroundColor Yellow
docker build -t strapi-epf .

# Testar localmente
Write-Host "Testando localmente..." -ForegroundColor Yellow
docker run -p 1337:1337 --name strapi-test --rm strapi-epf

Write-Host "✅ Docker configurado com sucesso!" -ForegroundColor Green
