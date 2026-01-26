// src/auto-import.js - Executa import automaticamente
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🚀 Verificando se precisa importar coleções...');

const exportFile = 'colecoes-completas.tar.gz';
if (fs.existsSync(exportFile)) {
  console.log('📦 Encontrado export. Importando coleções...');
  try {
    execSync(`npx strapi import --file ${exportFile} --force`, { stdio: 'inherit' });
    console.log('✅ Importação concluída!');
    
    // Remover após import
    fs.unlinkSync(exportFile);
  } catch (error) {
    console.error('❌ Erro na importação:', error.message);
  }
} else {
  console.log('✅ Nenhum export para importar.');
}
