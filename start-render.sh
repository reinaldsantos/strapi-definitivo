#!/bin/bash
echo "?? Script de inicializa??o para Render"
echo "?? Criando estrutura dist..."
mkdir -p dist

echo "?? Verificando depend?ncias..."
node -e "console.log('Strapi dispon?vel:', !!require('@strapi/strapi'))"

echo "?? Tentando iniciar Strapi..."
# M?todo 1: Com distDir
node -e "
try {
  const strapi = require('@strapi/strapi');
  const app = strapi({ distDir: './dist' });
  app.start().then(() => {
    console.log('? Strapi iniciado (m?todo 1)');
  });
} catch(e) {
  console.log('? M?todo 1 falhou:', e.message);
  // M?todo 2: Sem distDir
  try {
    const strapi = require('@strapi/strapi');
    const app = strapi();
    app.start().then(() => {
      console.log('? Strapi iniciado (m?todo 2)');
    });
  } catch(e2) {
    console.log('? M?todo 2 falhou:', e2.message);
    process.exit(1);
  }
}
"
