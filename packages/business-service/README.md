# Business Service

This service handles business logic and domain-specific operations within the monorepo.

## Features

- Express.js API endpoints for business operations
- TypeScript for type safety
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
docker build -t business-service -f Dockerfile .

# Run the container
docker run -p 3002:3002 --env-file ../../.env --name business-service business-service
```

Or use docker-compose from the root directory:

```bash
docker compose up business-service
```

## Project Structure

```
.
├── package.json  # Service-specific dependencies and scripts
├── tsconfig.json # TypeScript configuration extending the root config
└── src/          # Source files
    └── index.ts  # Application entry point
```

## Dependencies

- **express**: Web server framework
- **shared**: Internal shared package with common utilities
