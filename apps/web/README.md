# Web App - GraphQL API Server

This is a [Next.js](https://nextjs.org) 15 project that serves as the GraphQL API backend for the monorepo.

## Technologies

- Next.js 15 with App Router and Turbopack
- [Grats](https://grats.capt.dev) for code-first GraphQL schema generation
- GraphQL Yoga for the GraphQL server
- TypeScript

## Environment Variables

Create a `.env.local` file in this directory:

```sh
API_KEY=something-cool
```

## Getting Started

Run the development server from the monorepo root:

```bash
yarn workspace @untitled/web dev
```

Or from this directory:

```bash
yarn dev
```

The GraphQL API will be available at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).

## GraphQL Schema

This project uses Grats for code-first GraphQL schema generation. The schema is defined using JSDoc decorators in:

- `src/app/api/graphql/query.ts` - Query resolvers
- `src/app/api/graphql/mutation.ts` - Mutation resolvers

After modifying GraphQL types or resolvers, regenerate the schema:

```bash
yarn grats
```

This will update `schema.ts` which is used by GraphQL Yoga.

## API Endpoints

- **GraphQL**: `/api/graphql` - Main GraphQL endpoint
- **REST**: `/api/site-diary` - Site diary CRUD operations

## Development Workflow

1. Modify query/mutation files with Grats JSDoc decorators
2. Run `yarn grats` to regenerate the schema
3. The mobile app can then run `yarn workspace @untitled/mobile codegen` to update its TypeScript types
