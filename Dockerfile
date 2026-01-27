FROM node:20-alpine
WORKDIR /app

# 1. Copia tudo
COPY . .

# 2. Instala dependências
RUN npm install

# 3. Executa Strapi em modo develop por 1 minuto para registrar coleções
#    Depois mata e inicia em produção
RUN echo "Registrando coleções..." && \
    timeout 60 npm run develop 2>&1 | tail -20 || true

# 4. Instala só produção (remove devDependencies)
RUN npm ci --only=production

# 5. Porta
EXPOSE 1337

# 6. Inicia em produção
CMD ["npm", "start"]
