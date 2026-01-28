#!/bin/bash
# Script m?gico para fazer Strapi funcionar no Render

echo "?? Iniciando Strapi no Render..."

# Cria estrutura de diret?rios que o Strapi espera
mkdir -p dist
mkdir -p dist/config
mkdir -p dist/src
mkdir -p dist/src/admin

# Cria arquivos de configura??o M?NIMOS
cat > dist/config/server.js << 'EOF'
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    path: '/admin',
  },
});
EOF

cat > dist/config/admin.js << 'EOF'
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
});
EOF

cat > dist/config/database.js << 'EOF'
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: {
      min: 0,
      max: 5,
    },
  },
});
EOF

# Cria routes.json vazio
echo '[]' > dist/config/routes.json

# Cria ssr.json vazio
echo '{"ssr": {}}' > dist/ssr.json

echo "? Estrutura criada. Iniciando Strapi..."

# Inicia o Strapi PULANDO a verifica??o de build
NODE_ENV=production node -e "
  const strapi = require('@strapi/strapi');
  const app = strapi({ distDir: './dist' });
  app.start();
"
