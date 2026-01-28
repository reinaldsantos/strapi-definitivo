#!/bin/bash
echo "?? Iniciando Strapi no Render..."

# Cria estrutura fake do build
mkdir -p dist
mkdir -p dist/admin
mkdir -p dist/config

# Cria arquivos de configura??o m?nimos
echo '{"admin": {"path": "/admin"}, "server": {"port": 1337}}' > dist/config/server.json
echo '[]' > dist/config/routes.json
echo '{"ssr": {}}' > dist/ssr.json

echo "? Estrutura criada. Iniciando Strapi..."

# Inicia Strapi com a estrutura fake
NODE_ENV=production node -e "
const strapi = require('@strapi/strapi');
const app = strapi.default({ distDir: './dist' });
app.start().then(() => {
  console.log('?? Strapi iniciado com sucesso!');
});
"
