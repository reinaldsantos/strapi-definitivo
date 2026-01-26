# Script para testar após deploy no Render
Write-Host "🧪 TESTANDO DEPLOY NO RENDER" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Defina a URL do seu Strapi no Render
$strapiUrl = "https://seu-strapi.onrender.com"

Write-Host "1. Testando endpoint raiz..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$strapiUrl/api" -Method Get
    Write-Host "✅ API raiz respondeu:" -ForegroundColor Green
    $response.PSObject.Properties.Name | ForEach-Object {
        Write-Host "   - $_" -ForegroundColor Gray
    }
} catch {
    Write-Host "❌ Falha ao acessar API: $_" -ForegroundColor Red
}

Write-Host "`n2. Testando algumas coleções..." -ForegroundColor Yellow

$colecoesParaTestar = @(
    "relatorio-progresso-anual-eqavets",
    "autorizacoes-funcionamento",
    "estatutos",
    "regulamentos-internos",
    "projetos-educativos"
)

foreach ($colecao in $colecoesParaTestar) {
    try {
        $url = "$strapiUrl/api/$colecao?populate=*"
        Write-Host "   Testando $colecao..." -NoNewline
        $response = Invoke-RestMethod -Uri $url -Method Get
        Write-Host " ✅" -ForegroundColor Green
    } catch {
        Write-Host " ❌ ($_)" -ForegroundColor Red
    }
}

Write-Host "`n3. Verificando admin..." -ForegroundColor Yellow
Write-Host "   Acesse: $strapiUrl/admin" -ForegroundColor Cyan

Write-Host "`n👉 PRÓXIMOS PASSOS:" -ForegroundColor Magenta
Write-Host "   1. Acesse $strapiUrl/admin" -ForegroundColor White
Write-Host "   2. Configure permissões públicas" -ForegroundColor White
Write-Host "   3. Adicione seus documentos" -ForegroundColor White
