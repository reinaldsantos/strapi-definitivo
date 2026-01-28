// start.js - Inicia Strapi sem verifica??o de build
const strapi = require('@strapi/strapi');

async function start() {
  console.log('?? Iniciando Strapi no Render...');
  
  // Cria diret?rios se n?o existirem
  const fs = require('fs');
  const dirs = ['dist', 'dist/config', 'dist/src', 'dist/src/admin'];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Inicia Strapi com distDir customizado
  const app = strapi({ 
    distDir: './dist',
    autoReload: false,
    serveAdminPanel: true
  });
  
  await app.start();
  console.log('? Strapi iniciado com sucesso!');
}

start().catch(error => {
  console.error('? Erro ao iniciar Strapi:', error);
  process.exit(1);
});
