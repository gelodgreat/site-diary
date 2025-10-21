# Expo App

## Technologies

- Expo 54 & React Native 0.81 with the New Architecture.
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Nativewind 5](https://www.nativewind.dev/) & [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org)
- [React Compiler](https://react.dev/learn/react-compiler)

## Getting Started

### Prerequisites

You'll need Node.js 22, Yarn v1, and Cocoapods.

```bash
brew install node yarn cocoapods
```

### Environment Variables

Create a `.env` file in this directory:

```sh
EXPO_PUBLIC_API_GRAPHQL_URL=http://localhost:3000/api/graphql
```

For building and running apps locally, follow the [Expo setup guides](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated).

### Installing Dependencies

From the monorepo root:

```bash
yarn install
```

### Running the App

**First time setup** (iOS/Android):

```bash
yarn prebuild
yarn ios
# or
yarn android
```

**After initial setup**, start the dev server:

```bash
yarn dev
```

Or from the monorepo root:

```bash
yarn dev:mobile
```

### Generating GraphQL Types

After making changes to the GraphQL schema in the web app, regenerate TypeScript types:

```bash
yarn codegen
```

Or from the monorepo root:

```bash
yarn workspace @untitled/mobile codegen
```

**Note**: The web dev server must be running at `http://localhost:3000` for codegen to work if using local api setup.
