# CONFIGURAÇÃO DE PERMISSÕES APÓS DEPLOY
Write-Host "🎯 CONFIGURANDO PERMISSÕES NO STRAPI" -ForegroundColor Cyan
Write-Host "=======================================" -ForegroundColor Cyan

$baseUrl = "https://strapi-definitivo.onrender.com"

Write-Host "`n1. Aguardando Strapi iniciar completamente..." -ForegroundColor Yellow
Start-Sleep -Seconds 10

Write-Host "`n2. Testando conexão..." -ForegroundColor Yellow
try {
    $test = Invoke-RestMethod -Uri "$baseUrl/api" -Method Get -TimeoutSec 30
    Write-Host "✅ Strapi está respondendo!" -ForegroundColor Green
} catch {
    Write-Host "❌ Strapi não responde ainda: $_" -ForegroundColor Red
    Write-Host "   Aguarde mais 30 segundos e tente novamente." -ForegroundColor Yellow
    exit
}

Write-Host "`n3. AÇÃO MANUAL NECESSÁRIA:" -ForegroundColor Magenta
Write-Host "   --------------------------" -ForegroundColor Magenta

Write-Host "`n📱 PASSO A PASSO:" -ForegroundColor White
Write-Host "   1. Acesse: $baseUrl/admin" -ForegroundColor Cyan
Write-Host "   2. Faça login com suas credenciais" -ForegroundColor Cyan
Write-Host "   3. Vá em: Settings → Users & Permissions Plugin → Roles" -ForegroundColor Cyan
Write-Host "   4. Clique em: Public" -ForegroundColor Cyan

Write-Host "`n🎯 NA PÁGINA DE PERMISSÕES:" -ForegroundColor Yellow
Write-Host "   Você verá inicialmente apenas 3 coleções:" -ForegroundColor White
Write-Host "   - Curso (aparece como 'Carss')" -ForegroundColor Gray
Write-Host "   - Evento" -ForegroundColor Gray
Write-Host "   - Noticia" -ForegroundColor Gray

Write-Host "`n🔧 CONFIGURE ESTAS 3 PRIMEIRO:" -ForegroundColor Green
Write-Host "   Para CADA uma das 3 acima:" -ForegroundColor White
Write-Host "   1. Expanda a seção" -ForegroundColor Gray
Write-Host "   2. Marque ✅ 'find'" -ForegroundColor Gray
Write-Host "   3. Marque ✅ 'findOne'" -ForegroundColor Gray

Write-Host "`n💾 DEPOIS:" -ForegroundColor Yellow
Write-Host "   1. Clique no botão azul 'Save' no topo direito" -ForegroundColor White
Write-Host "   2. AGUARDE a confirmação (toast verde)" -ForegroundColor White
Write-Host "   3. RECARREGUE a página (F5)" -ForegroundColor Red

Write-Host "`n🎉 RESULTADO ESPERADO:" -ForegroundColor Green
Write-Host "   Após recarregar, TODAS as 23 coleções aparecerão!" -ForegroundColor White
Write-Host "   (Isso acontece porque o Strapi sincroniza automaticamente)" -ForegroundColor Gray

Write-Host "`n⚠️  SE NÃO APARECEREM:" -ForegroundColor Red
Write-Host "   Verifique no Render se tem estas variáveis:" -ForegroundColor Yellow
Write-Host "   - DATABASE_AUTO_MIGRATION = true" -ForegroundColor White
Write-Host "   - DATABASE_FORCE_MIGRATION = true" -ForegroundColor White

Write-Host "`n🔗 TESTE AS APIS:" -ForegroundColor Cyan
Write-Host "   Após configurar, teste:" -ForegroundColor White
Write-Host "   - $baseUrl/api/relatorio-progresso-anual-eqavets" -ForegroundColor Gray
Write-Host "   - $baseUrl/api/autorizacoes-funcionamento" -ForegroundColor Gray
Write-Host "   - $baseUrl/api/estatutos" -ForegroundColor Gray
