console.log('🚨 DESCOBRINDO COMO INICIAR STRAPI 5');
console.log('====================================');

const strapiModule = require('@strapi/strapi');
console.log('Módulo completo:', strapiModule);
console.log('Tipo:', typeof strapiModule);
console.log('É null?', strapiModule === null);
console.log('É undefined?', strapiModule === undefined);

// Lista TODAS as propriedades
console.log('\\n🔍 Todas propriedades:');
for (const key in strapiModule) {
  console.log(`  ${key}:`, typeof strapiModule[key]);
}

// Testa commonjs vs esm
console.log('\\n🔧 Testando exports:');
console.log('module.exports:', module.exports);
console.log('exports:', exports);

// Procura por factory/creator
console.log('\\n🔎 Procurando por createStrapi, factory, etc:');
const searchTerms = ['create', 'factory', 'init', 'build', 'Strapi', 'default'];
searchTerms.forEach(term => {
  const keys = Object.keys(strapiModule).filter(k => 
    k.toLowerCase().includes(term.toLowerCase())
  );
  if (keys.length > 0) {
    console.log(`  ${term}:`, keys);
  }
});

// Tenta require do binário
console.log('\\n📦 Testando binário:');
try {
  const strapiBin = require('@strapi/strapi/bin/strapi');
  console.log('Binário encontrado:', typeof strapiBin);
} catch(e) {
  console.log('Binário erro:', e.message);
}
