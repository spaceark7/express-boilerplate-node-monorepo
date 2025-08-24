FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY packages/gateway-service/package*.json ./packages/gateway-service/

RUN npm install

COPY . .

RUN npm run build --workspace=packages/gateway-service

EXPOSE 3000

CMD ["node", "packages/gateway-service/dist/index.js"]
