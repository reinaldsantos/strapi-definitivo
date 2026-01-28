#!/bin/bash
echo "?? Iniciando Strapi no Render..."
mkdir -p dist
NODE_ENV=production node node_modules/.bin/strapi start
