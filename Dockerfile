FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm ci --only=production
COPY build/ ./build/
COPY config/ ./config/
COPY public/ ./public/
COPY src/ ./src/
EXPOSE 1337
CMD ["npm", "start"]
