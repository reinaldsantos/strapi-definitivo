const strapi = require('@strapi/strapi');

async function startStrapi() {
  try {
    const app = strapi({ distDir: './dist' });
    await app.start();
    console.log('🎉 Strapi iniciado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao iniciar Strapi:', error);
    process.exit(1);
  }
}

startStrapi();
