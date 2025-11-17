FROM node:23

WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
