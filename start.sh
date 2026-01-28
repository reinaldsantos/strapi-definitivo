#!/bin/bash
# Cria diret?rio dist
mkdir -p dist

# Inicia Strapi com op??o --no-build
NODE_ENV=production node node_modules/@strapi/strapi/bin/strapi.js start --no-build
