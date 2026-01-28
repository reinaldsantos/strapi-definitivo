#!/bin/bash
echo "?? IN?CIO ULTIMATE - $(date)"

# 1. Cria estrutura COMPLETA do build
echo "?? Criando estrutura build completa..."
mkdir -p build
mkdir -p build/config
mkdir -p build/admin
mkdir -p build/api
mkdir -p build/src

# 2. Cria arquivos ESSENCIAIS
echo "?? Criando arquivos de configura??o..."
cat > build/config/server.js << 'EOF'
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

cat > build/config/admin.js << 'EOF'
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
});
EOF

cat > build/config/database.js << 'EOF'
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
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
  },
});
EOF

# 3. Cria routes.json vazio
echo '[]' > build/config/routes.json

# 4. Inicia Strapi COM a estrutura
echo "?? Iniciando Strapi..."
cd /opt/render/project/src
NODE_ENV=production node node_modules/.bin/strapi start

echo "? Script ultimate conclu?do!"
