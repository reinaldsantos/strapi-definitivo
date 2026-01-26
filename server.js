// server.js - Script de startup específico para Render
const strapi = require('@strapi/strapi');

// Verificar se a pasta dist existe
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error('❌ ERRO: Pasta dist não encontrada em:', distPath);
  console.log('Conteúdo do diretório atual:');
  fs.readdirSync(__dirname).forEach(file => {
    console.log('  -', file);
  });
  process.exit(1);
}

console.log('✅ Pasta dist encontrada:', distPath);

// Iniciar Strapi
strapi({
  appDir: __dirname,
  distDir: distPath
}).start();
