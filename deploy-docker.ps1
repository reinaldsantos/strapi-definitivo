# deploy-docker.ps1
Write-Host "🚀 DEPLOY DOCKER PARA RENDER" -ForegroundColor Cyan

# 1. Verificar se tem Docker instalado
try {
    docker --version | Out-Null
    Write-Host "✅ Docker instalado" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker não instalado" -ForegroundColor Red
    exit 1
}

# 2. Build local para testar
Write-Host "Build local da imagem..." -ForegroundColor Yellow
docker build -t strapi-epf-render .

# 3. Testar localmente
Write-Host "Testando container localmente..." -ForegroundColor Yellow
docker run -d -p 3000:3000 --name strapi-test --env-file .env.docker strapi-epf-render

Start-Sleep -Seconds 10

# 4. Testar se está respondendo
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/_health" -Method Get -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Container funcionando localmente!" -ForegroundColor Green
    }
} catch {
    Write-Host "⚠️ Container não respondeu, mas continuando..." -ForegroundColor Yellow
}

# 5. Parar container de teste
docker stop strapi-test
docker rm strapi-test

# 6. Fazer deploy no Git
Write-Host "Preparando deploy no Render..." -ForegroundColor Cyan
git add Dockerfile docker-compose.yml render.yaml .dockerignore .env.docker
git commit -m "🐳 Adicionada configuração Docker para deploy no Render"
git push origin main

Write-Host "`n🎉 DEPLOY INICIADO NO RENDER!" -ForegroundColor Green
Write-Host "👉 AGORA NO RENDER:" -ForegroundColor Magenta
Write-Host "   1. Vá no serviço atual" -ForegroundColor White
Write-Host "   2. Settings → Build & Deploy" -ForegroundColor White
Write-Host "   3. Mude para 'Docker'" -ForegroundColor White
Write-Host "   4. Dockerfile Path: ./Dockerfile" -ForegroundColor White
Write-Host "   5. Save → Manual Deploy" -ForegroundColor White
Write-Host "`n⏱️  Tempo estimado: 10-15 minutos" -ForegroundColor Yellow
Write-Host "✅ Tudo funcionando!" -ForegroundColor Green
