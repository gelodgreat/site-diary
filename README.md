# Monorepo

## Getting Started

### Prerequisites

You'll need Node.js 22, Yarn v1, and Cocoapods.

```bash
brew install node yarn cocoapods
```

### Installing Dependencies

Run:

```bash
yarn install
```

For building and running apps locally, follow the [Expo setup guides](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated).

### Running the iOS/Android App in a simulator

```bash
yarn workspace @untitled/mobile prebuild
yarn workspace @untitled/mobile ios
yarn workspace @untitled/mobile android
```

If you already have the app installed on your simulator, you can skip the above steps and simply run `yarn dev:mobile` to start the development server.

### Running the GraphQL API

```bash
yarn workspace @untitled/web dev
```

## More info

For a comprehensive reference including architecture details, development workflows, and all available commands, see [CLAUDE.md](./CLAUDE.md).

For app-specific documentation:

- [Mobile App README](./apps/mobile/README.md)
- [Web App README](./apps/web/README.md)
