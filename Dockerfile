FROM node:23

WORKDIR /app

COPY package*.json ./

COPY . .

CMD ["npm", "run", "dev"]
