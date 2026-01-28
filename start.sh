#!/bin/bash
# Script para iniciar Strapi no Render

# Cria estrutura fake que Strapi espera
mkdir -p dist
mkdir -p dist/config
mkdir -p dist/src

# Cria arquivos m?nimos
echo 'export default {
  admin: { path: "/admin" },
  server: { port: process.env.PORT || 1337 }
};' > dist/config/server.js

echo '[]' > dist/config/routes.json

# Inicia Strapi
NODE_ENV=production node node_modules/@strapi/strapi/bin/strapi.js start
