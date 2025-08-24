# Gateway Service

This service acts as an API Gateway for the monorepo microservices architecture.

## Features

- Centralized API Gateway using Express.js
- Route forwarding to appropriate services
- Authentication and authorization
- Request validation
- TypeScript for type safety

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server with hot reloading
npm run dev
```

### Building

```bash
# Build the service
npm run build
```

### Running in Production

```bash
# Start the production server
npm start
```

### Docker Support

```bash
# Build the Docker image
docker build -t gateway-service -f Dockerfile .

# Run the container
docker run -p 3000:3000 --env-file ../../.env --name gateway-service gateway-service
```

Or use docker-compose from the root directory:

```bash
docker compose up gateway-service
```

## Project Structure

```
.
├── package.json  # Service-specific dependencies and scripts
├── tsconfig.json # TypeScript configuration extending the root config
└── src/          # Source files
    └── index.ts  # Application entry point
```

## Gateway Responsibilities

- Route API requests to appropriate services
- Handle authentication and authorization
- Validate incoming requests
- Aggregate responses when needed
- Error handling and logging

## Dependencies

- **express**: Web server framework
- **shared**: Internal shared package with common utilities
