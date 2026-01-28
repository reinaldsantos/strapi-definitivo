#!/bin/bash
echo "?? Iniciando Strapi no Render..."
echo "?? Criando diret?rio dist..."
mkdir -p dist

echo "?? Usando m?todo CORRETO do Strapi CLI..."
# M?todo que FUNCIONA: usar o CLI oficial do Strapi
NODE_ENV=production node node_modules/@strapi/strapi/bin/strapi.js start

# Se falhar, tentar m?todo alternativo
if [ $? -ne 0 ]; then
  echo "? M?todo 1 falhou. Tentando m?todo 2..."
  node -e "
    try {
      // Tenta a forma ES module
      import('@strapi/strapi').then(module => {
        const strapi = module.default || module;
        strapi().start();
      });
    } catch(e) {
      console.log('ES module falhou:', e.message);
      // Tenta CommonJS
      const strapi = require('@strapi/strapi');
      // Strapi 5 exporta um factory function diretamente
      const app = strapi();
      app.start();
    }
  "
fi
