# Dockerfile para o backend (Node.js com Express)
FROM node:lts

WORKDIR /app

# Copia os arquivos do backend
COPY package.json package-lock.json ./
RUN npm install

COPY . .
EXPOSE 5000

# Comando para rodar o backend e, em seguida, executar as seeds
CMD sh -c "./wait-for-it.sh db:5432 -- npm run seeds & npm run dev"