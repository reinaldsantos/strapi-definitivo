# Dockerfile para Strapi no Render
FROM node:18-alpine

WORKDIR /app

# Instalar dependências necessárias para SQLite
RUN apk add --no-cache python3 make g++ sqlite

# Copiar package.json primeiro (cache otimizado)
COPY package*.json ./

# Instalar dependências de produção
RUN npm ci --only=production

# Copiar o resto do código
COPY . .

# Build do Strapi
RUN npm run build

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/_health || exit 1

# Comando de inicialização
CMD ["npm", "start"]
