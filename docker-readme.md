# Express Boilerplate Monorepo - Docker Setup

This document provides information about the Docker setup for this monorepo.

## Docker Services

The Docker Compose configuration includes the following services:

### Application Services
- **gateway-service** - API Gateway running on port 3000
- **core-service** - Core functionality service running on port 3001
- **business-service** - Business logic service running on port 3002

### Database Services
- **core-db** - PostgreSQL database for the core service (port 5432)
- **business-db** - PostgreSQL database for the business service (port 5433)

## Getting Started with Docker

### Prerequisites
- Docker and Docker Compose installed on your machine

### Starting the Environment

```bash
# Start all services
docker compose up

# Start in detached mode
docker compose up -d

# Start specific services
# Start specific services
docker compose up gateway-service core-service

# Start all databases only
docker compose up core-db business-db
```

### Building Images

```bash
# Build all images
docker compose build

# Build specific service
docker compose build core-service
```

### Stopping Services

```bash
# Stop all services
docker compose down

# Stop and remove volumes
docker compose down -v
```

## Environment Variables

The services use environment variables that can be configured using a `.env` file:

- Environment variables for all services are loaded from a shared `.env` file
- Database connection details are hardcoded in the docker-compose.yml file
- Each service exposes different ports:
  - Gateway: 3000
  - Core: 3001
  - Business: 3002

Example `.env` file:
```
# Gateway Service
NODE_ENV=development
GATEWAY_PORT=3000
CORE_SERVICE_URL=http://core-service:3001
BUSINESS_SERVICE_URL=http://business-service:3002

# Core Service
CORE_PORT=3001
CORE_DB_HOST=core-db
CORE_DB_PORT=5432
CORE_DB_USER=core
CORE_DB_PASSWORD=secret
CORE_DB_NAME=core_db

# Business Service
BUSINESS_PORT=3002
BUSINESS_DB_HOST=business-db
BUSINESS_DB_PORT=5432
BUSINESS_DB_USER=business
BUSINESS_DB_PASSWORD=secret
BUSINESS_DB_NAME=business_db
```

## Development with Docker

For development with Docker:

1. The docker-compose.yml uses container names for easy service discovery
2. Each service builds from a simplified Dockerfile
3. Changes require rebuilding the images

```bash
# Watch logs for a specific service
docker compose logs -f core-service
```
