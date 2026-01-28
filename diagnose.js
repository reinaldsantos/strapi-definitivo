console.log('🔍 DIAGNÓSTICO DO STRAPI');
console.log('========================');

const strapiModule = require('@strapi/strapi');
console.log('1. Tipo do módulo:', typeof strapiModule);
console.log('2. É função?', typeof strapiModule === 'function');
console.log('3. É objeto?', typeof strapiModule === 'object');
console.log('4. Tem default?', 'default' in strapiModule);
console.log('5. Keys:', Object.keys(strapiModule));

if (typeof strapiModule === 'function') {
  console.log('✅ strapi é uma função!');
  try {
    const app = strapiModule();
    console.log('✅ strapi() funciona!');
    console.log('Tipo do app:', typeof app);
  } catch (e) {
    console.log('❌ strapi() erro:', e.message);
  }
}

if (strapiModule.default) {
  console.log('✅ Tem default export');
  if (typeof strapiModule.default === 'function') {
    console.log('✅ strapi.default é função!');
    try {
      const app = strapiModule.default();
      console.log('✅ strapi.default() funciona!');
    } catch (e) {
      console.log('❌ strapi.default() erro:', e.message);
    }
  }
}

// Testa construção manual
console.log('\\n🔧 Testando construção manual...');
try {
  const Strapi = require('@strapi/strapi').default || require('@strapi/strapi');
  const app = new Strapi();
  console.log('✅ new Strapi() funciona!');
} catch (e) {
  console.log('❌ new Strapi() erro:', e.message);
}
