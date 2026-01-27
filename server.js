// server.js - Específico para Render
const strapi = require('@strapi/strapi');

// Log para debug
console.log('🚀 Iniciando Strapi no Render...');
console.log('📁 Diretório:', __dirname);
console.log('🌍 Ambiente:', process.env.NODE_ENV);

// Verificar se dist existe
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
console.log('🔍 Verificando dist em:', distPath);

if (!fs.existsSync(distPath)) {
  console.error('❌ ERRO CRÍTICO: dist não encontrado!');
  console.log('Conteúdo do diretório:');
  fs.readdirSync(__dirname).forEach(file => {
    console.log('  -', file);
  });
  process.exit(1);
}

console.log('✅ dist encontrado. Conteúdo:');
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
