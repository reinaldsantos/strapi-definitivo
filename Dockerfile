FROM node:18-alpine
WORKDIR /app

# Instalar dependências para PostgreSQL
RUN apk add --no-cache python3 make g++

# Copiar package.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar tudo
COPY . .

# Build do Strapi
RUN npm run build

# Porta correta do Strapi
EXPOSE 1337

# Comando de inicialização
CMD ["npm", "start"]
