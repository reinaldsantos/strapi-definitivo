const { createStrapi } = require('@strapi/strapi');

console.log('🚀 Iniciando Strapi via createStrapi()...');

async function start() {
  try {
    // Cria a instância do Strapi
    const strapi = createStrapi({
      // Configurações
      distDir: './dist',
      autoReload: false,
      serveAdminPanel: true
    });
    
    console.log('✅ Instância criada. Iniciando...');
    
    // Inicia
    await strapi.start();
    
    console.log('🎉 Strapi iniciado com sucesso!');
    console.log('🌐 URL:', strapi.server?.url || 'http://localhost:1337');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
    console.error('📋 Stack:', error.stack);
    process.exit(1);
  }
}

start();
