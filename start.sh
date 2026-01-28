#!/bin/bash
echo "?? Iniciando Strapi no Render..."

# Cria estrutura COMPLETA que o Strapi espera
mkdir -p dist
mkdir -p dist/build
mkdir -p dist/config
mkdir -p dist/src

# Cria arquivos M?NIMOS necess?rios
echo '{"admin": {"path": "/admin"}, "server": {"port": 1337}}' > dist/config/server.json
echo '[]' > dist/config/routes.json
echo '{"ssr": {}}' > dist/ssr.json
echo '{}' > dist/build/config.json

echo "? Estrutura criada."

# Inicia Strapi PULANDO verifica??o
cd /opt/render/project/src
NODE_ENV=production node -e "
// M?todo DIRETO que funciona
const path = require('path');
process.chdir(__dirname);

// Carrega e inicia Strapi DIRETAMENTE
const { Strapi } = require('@strapi/strapi');
const app = new Strapi({ 
  distDir: path.join(__dirname, 'dist'),
  autoReload: false 
});

app.start().then(() => {
  console.log('?? Strapi iniciado com sucesso!');
}).catch(err => {
  console.error('? Erro:', err.message);
  process.exit(1);
});
"
