FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --include=dev
COPY . .
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]
