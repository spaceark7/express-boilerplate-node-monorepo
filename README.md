# Express Boilerplate Monorepo

A modern TypeScript-based Express.js monorepo boilerplate for building scalable microservices.

## Project Structure

```
.
├── package.json          # Root package.json with workspaces configuration
├── tsconfig.json         # Base TypeScript configuration
├── docker-compose.yml    # Docker Compose configuration
├── packages/             # Services directory
│   ├── business-service/ # Business logic service with PostgreSQL
│   ├── core-service/     # Core functionality service with PostgreSQL
│   └── gateway-service/  # API gateway service
└── shared/               # Shared code and utilities
```

## Features

- **TypeScript**: Fully typed codebase for better developer experience
- **ES Modules**: Modern JavaScript module system
- **Monorepo Structure**: Using npm/yarn workspaces
- **Shared Code**: Common utilities and types in a shared package
- **Express.js**: Fast, unopinionated web framework for Node.js
- **Docker Support**: Containerized services with Docker and Docker Compose
- **PostgreSQL Databases**: Separate databases for different services

## Getting Started

### Prerequisites

- Node.js LTS version
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/spaceark7/express-boilerplate-node-monorepo.git
cd express-boilerplate-monorepo

# Install dependencies
npm install
```

### Development

```bash
# Build shared package
npm run build -w shared

# Start development server for a specific service
npm run dev -w packages/core-service
```

### Building

```bash
# Build all packages
npm run build --workspaces

# Build a specific service
npm run build -w packages/business-service
```

### Running

```bash
# Run a specific service
npm start -w packages/gateway-service
```

## Workspace Configuration

This project uses npm/yarn workspaces to manage the monorepo:

- **packages/***: Contains all service applications
- **shared**: Contains shared code used across services

## License

ISC

## Author

Hasbi Assidiq
