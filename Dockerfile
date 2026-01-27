FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
# Instala produção + esbuild especificamente
RUN npm ci --only=production && npm install esbuild
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]
