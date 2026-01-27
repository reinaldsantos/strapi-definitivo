// server.js - Específico para Render
const strapi = require('@strapi/strapi');
const path = require('path');
const fs = require('fs');

console.log('🚀 Iniciando Strapi no Render...');
console.log('📁 Diretório atual:', __dirname);

// Verificar diferentes possíveis locais do dist
const possibleDistPaths = [
  path.join(__dirname, 'dist'),
  path.join(__dirname, '..', 'dist'),
  path.join(__dirname, '..', '..', 'dist'),
  '/opt/render/project/src/dist',
  '/opt/render/project/dist'
];

let distPath = null;
for (const possiblePath of possibleDistPaths) {
  console.log(`🔍 Verificando: ${possiblePath}`);
  if (fs.existsSync(possiblePath)) {
    distPath = possiblePath;
    console.log(`✅ dist encontrado em: ${distPath}`);
    break;
  }
}

if (!distPath) {
  console.error('❌ ERRO: dist não encontrado em nenhum local!');
  console.log('📋 Conteúdo do diretório atual:');
  fs.readdirSync(__dirname).forEach(file => {
    console.log('  -', file);
  });
  
  // Tentar encontrar qualquer pasta dist
  const findDist = require('child_process').execSync('find /opt/render/project -name "dist" -type d 2>/dev/null || echo "Nenhum dist encontrado"').toString();
  console.log('🔎 Resultado do find:', findDist);
  
  process.exit(1);
}

// Listar conteúdo do dist
console.log('📦 Conteúdo do dist:');
fs.readdirSync(distPath).forEach(file => {
  console.log('  -', file);
});

// Iniciar Strapi
console.log('⚡ Iniciando Strapi...');
strapi({
  appDir: __dirname,
  distDir: distPath
}).start().then(() => {
  console.log('🎉 Strapi iniciado com sucesso!');
}).catch(error => {
  console.error('❌ Erro ao iniciar Strapi:', error);
  process.exit(1);
});
