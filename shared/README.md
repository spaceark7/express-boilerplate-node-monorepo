# Shared Package

This package contains shared code, utilities, and types used across all services in the monorepo.

## Features

- Common utilities and helper functions
- Shared TypeScript interfaces and types
- Reusable middleware and error handlers

## Usage

Import shared functionality in any service:

```typescript
// ESM import
import { testFn } from 'shared';

// Use the function
testFn();
```

## Development

### Building

```bash
# Build the shared package
npm run build
```

### Watching for Changes

```bash
# Watch for changes during development
npm run dev
```

## Project Structure

```
.
├── package.json  # Package-specific dependencies and scripts
├── tsconfig.json # TypeScript configuration extending the root config
└── src/          # Source files
    ├── index.ts  # Main entry point that exports all shared functionality
    └── test.ts   # Example utility functions
```

## Adding New Shared Functionality

1. Create a new file in the `src` directory
2. Export your functionality
3. Re-export from `index.ts`
4. Build the package

Remember to build the shared package when making changes before using in other services.
