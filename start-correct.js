const strapi = require('@strapi/strapi');

console.log('🔍 Iniciando Strapi corretamente...');

// Strapi 5 é uma CLASSE/construtor
async function start() {
  try {
    console.log('1. Criando instância do Strapi...');
    
    // Método correto para Strapi 5
    const app = strapi({
      // Configurações opcionais
      distDir: './dist',
      autoReload: false,
      serveAdminPanel: true
    });
    
    console.log('2. Iniciando...');
    await app.start();
    
    console.log('🎉 Strapi iniciado com sucesso!');
    console.log('📢 URL:', app.server?.url || 'http://localhost:1337');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
    console.error('📋 Stack:', error.stack);
    process.exit(1);
  }
}

start();
