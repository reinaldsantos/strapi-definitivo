const strapi = require('@strapi/strapi');

console.log('🚀 Iniciando Strapi no Render...');
console.log('📁 Diretório atual:', process.cwd());
console.log('🔧 NODE_ENV:', process.env.NODE_ENV);

async function startStrapi() {
  try {
    console.log('1. Carregando Strapi...');
    const app = strapi({ 
      distDir: './dist',
      autoReload: false,
      serveAdminPanel: true
    });
    
    console.log('2. Iniciando Strapi...');
    await app.start();
    
    console.log('🎉 Strapi iniciado com sucesso!');
    console.log('🌐 Admin panel disponível em:', app.server.url + '/admin');
    
  } catch (error) {
    console.error('❌ ERRO CRÍTICO ao iniciar Strapi:');
    console.error('Mensagem:', error.message);
    console.error('Stack:', error.stack);
    
    // Tenta método alternativo
    console.log('🔄 Tentando método alternativo...');
    try {
      const strapi2 = require('@strapi/strapi');
      const app2 = strapi2();
      await app2.start();
    } catch (error2) {
      console.error('❌ Método alternativo também falhou:', error2.message);
      process.exit(1);
    }
  }
}

startStrapi();
