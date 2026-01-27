FROM node:20-alpine
WORKDIR /app

# Instala esbuild de TODO JEITO POSSÍVEL
RUN npm install -g esbuild@0.24.2
RUN npm install esbuild@0.24.2

# Instala o resto
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copia e build
COPY . .
RUN npm run build

EXPOSE 1337
CMD ["npm", "start"]
