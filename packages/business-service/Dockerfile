FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY packages/business-service/package*.json ./packages/business-service/

RUN npm install

COPY . .

RUN npm run build --workspace=packages/business-service

EXPOSE 3002

CMD ["node", "packages/business-service/dist/index.js"]
