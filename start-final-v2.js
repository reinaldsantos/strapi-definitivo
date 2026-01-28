const { createStrapi } = require('@strapi/strapi');

console.log('🚀 Iniciando Strapi (com fallback para upload)...');

async function start() {
  try {
    const strapi = createStrapi({
      distDir: './dist',
      autoReload: false,
      serveAdminPanel: true
    });
    
    console.log('✅ Strapi criado. Iniciando...');
    await strapi.start();
    console.log('🎉 Strapi iniciado com sucesso!');
    
  } catch (error) {
    if (error.message.includes('sharp')) {
      console.log('⚠️ Sharp não instalado. Desabilitando upload plugin...');
      
      // Tenta novamente sem carregar upload
      const strapi = createStrapi({
        distDir: './dist',
        autoReload: false,
        serveAdminPanel: true,
        plugins: {
          upload: false  // Desabilita upload
        }
      });
      
      await strapi.start();
      console.log('🎉 Strapi iniciado (upload desabilitado)!');
      
    } else {
      console.error('❌ Erro desconhecido:', error.message);
      process.exit(1);
    }
  }
}

start();
