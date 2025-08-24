# Core Service

This service provides core functionality and essential services within the monorepo.

## Features

- Express.js REST API endpoints
- TypeScript implementation
- Shared utilities from common codebase
- PostgreSQL database integration

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
docker build -t core-service -f Dockerfile .

# Run the container
docker run -p 3001:3001 --env-file ../../.env --name core-service core-service
```

Or use docker-compose from the root directory:

```bash
docker compose up core-service
```

## Project Structure

```
.
├── package.json  # Service-specific dependencies and scripts
├── tsconfig.json # TypeScript configuration extending the root config
└── src/          # Source files
    ├── server.ts # Server configuration
    ├── app/      # Application core components
    ├── controllers/ # Request controllers
    └── services/ # Business logic services
```

## Dependencies

- **express**: Web server framework
- **shared**: Internal shared package with common utilities

## API Documentation

API documentation will be available at `/api-docs` when the service is running (if Swagger is implemented).
