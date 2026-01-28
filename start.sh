#!/bin/bash
echo "?? Iniciando Strapi no Render..."

# Cria diret?rio dist m?nimo
mkdir -p dist
echo "{\"server\":{\"port\":1337}}" > dist/server.config.js

# Usa m?todo DIRETO do strapi CLI
node node_modules/@strapi/strapi/bin/strapi.js start --no-build
