# Monorepo

## Getting Started

### Prerequisites

You'll need Node.js 22, Yarn v1, and Cocoapods.

```bash
brew install node yarn cocoapods
```

### You'll need to create an .env file like the .env.example in apps/mobile


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

## Architecture Overview

### Project Structure

The mobile app follows a modular screen-based architecture using a `components/screen` approach, which provides better discoverability and organization compared to inline modifications of `index.tsx` files in Expo routing:

```
src/
└── components/
  └── screen/
    ├── container/     # Data fetching and business logic
    ├── style/         # Component styling (CSS-in-JS)
    ├── view/          # UI rendering components
    ├── props/         # TypeScript interfaces and types
    └── index.ts       # Container exports
```
### Environment
**Environment Configuration**

It's essential to create separate environment files for each deployment target:
- `.env.development` - Local development settings
- `.env.staging` - Staging environment configuration  
- `.env.production` - Production environment variables

This isolation ensures proper environment-specific configurations and prevents configuration leaks between environments.


### State Management

- **Zustand** with persistence for client-side state management
- Provides offline support through local state persistence

### Offline Support

- Zustand persistence maintains app state offline
- Apollo GraphQL configured with `cache-first` fetch policy
- Dual-layer offline capability for enhanced user experience
- AsyncStorage - I choose AsyncStorage here because of its stability, I do have bad experience using mmkv but mmkv should be much more faster but I choose stability for long term

### Development Tools

- **AI Assistant:** Claude Sonnet 4.5
- **Autocomplete:** GitHub Copilot integration
