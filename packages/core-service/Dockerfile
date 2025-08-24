FROM node:20-alpine

WORKDIR /usr/src/app

# Copy package.json for workspace installs
COPY package*.json ./
COPY packages/core-service/package*.json ./packages/core-service/

# Install dependencies
RUN npm install

# Copy full monorepo
COPY . .

# Build TypeScript
RUN npm run build --workspace=packages/core-service

EXPOSE 3001

CMD ["node", "packages/core-service/dist/index.js"]
