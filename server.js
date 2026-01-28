const strapi = require('@strapi/strapi');

console.log('🚀 Iniciando Strapi no Render...');
console.log('📁 Diretório atual:', process.cwd());
console.log('🔧 NODE_ENV:', process.env.NODE_ENV);
console.log('🔍 Tipo do strapi:', typeof strapi);
console.log('🔍 strapi keys:', Object.keys(strapi));

async function startStrapi() {
  try {
    console.log('1. Tentando strapi()...');
    // Tenta como função direta
    const app = strapi();
    await app.start();
    console.log('✅ Sucesso com strapi()!');
    
  } catch (error1) {
    console.log('❌ strapi() falhou:', error1.message);
    
    try {
      console.log('2. Tentando strapi.default()...');
      // Tenta como default export
      const app = strapi.default();
      await app.start();
      console.log('✅ Sucesso com strapi.default()!');
      
    } catch (error2) {
      console.log('❌ strapi.default() falhou:', error2.message);
      
      try {
        console.log('3. Tentando strapi.default({})...');
        // Tenta com configuração
        const app = strapi.default({ distDir: './dist' });
        await app.start();
        console.log('✅ Sucesso com strapi.default({})!');
        
      } catch (error3) {
        console.log('❌ Todas as tentativas falharam!');
        console.log('Último erro:', error3.message);
        process.exit(1);
      }
    }
  }
}

startStrapi();
