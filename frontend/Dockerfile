# Dockerfile para o frontend (React.js)
FROM node:23.1.0

WORKDIR /app

# Copia os arquivos do frontend
COPY package.json package-lock.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm", "start"]