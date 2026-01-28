const { createStrapi } = require('@strapi/strapi');

console.log('🚀 Iniciando Strapi via createStrapi()...');

async function start() {
  try {
    // Desativa verificação TLS (warning comum)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    
    // Ignora erro do sharp
    process.env.STRAPI_DISABLE_SHARP = 'true';
    
    const strapi = await createStrapi();
    console.log('✅ Instância criada. Iniciando...');
    
    await strapi.start();
    console.log('🎉 Strapi iniciado com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro ao iniciar:', error.message);
    
    // Se for erro do sharp, tenta continuar
    if (error.message.includes('sharp')) {
      console.log('⚠️ Erro do sharp ignorado. Continuando...');
      // Tenta iniciar mesmo com erro
      process.env.STRAPI_DISABLE_SHARP = 'true';
      const strapi2 = await createStrapi();
      await strapi2.start();
    } else {
      process.exit(1);
    }
  }
}

start();
