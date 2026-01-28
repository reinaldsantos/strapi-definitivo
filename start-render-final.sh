#!/bin/bash
echo "?? Iniciando Strapi no Render - SOLU??O FINAL"

# Cria estrutura build completa
mkdir -p build
mkdir -p build/config
mkdir -p build/admin

# Arquivos m?nimos que o Strapi espera
echo '{"admin":{"path":"/admin"},"server":{"port":1337}}' > build/config/server.json
echo '[]' > build/config/routes.json
echo '{}' > build/ssr.json

# Cria package.json dentro de build (?s vezes necess?rio)
echo '{"name":"strapi-build","version":"1.0.0"}' > build/package.json

echo "? Estrutura build criada"

# Inicia Strapi
NODE_ENV=production node node_modules/@strapi/strapi/bin/strapi.js start
