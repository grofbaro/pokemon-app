# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` - Install dependencies
- `npx expo start` - Start the development server
- `npm run ios` - Start on iOS simulator
- `npm run android` - Start on Android emulator
- `npm run web` - Start web version
- `npm run lint` - Run ESLint

## Architecture

This is an Expo React Native app using file-based routing via expo-router.

### Routing Structure

- `app/_layout.tsx` - Root layout with Stack navigator and theme provider
- `app/(tabs)/_layout.tsx` - Tab navigation layout (Home and Explore tabs)
- `app/(tabs)/index.tsx` - Home screen
- `app/(tabs)/explore.tsx` - Explore screen
- `app/modal.tsx` - Modal screen

### Path Aliases

Use `@/*` to import from the project root (configured in tsconfig.json).

### Platform-Specific Files

Use `.ios.tsx`, `.android.tsx`, or `.web.ts` suffixes for platform-specific implementations (e.g., `icon-symbol.ios.tsx` vs `icon-symbol.tsx`).

### Theming

Colors and fonts are defined in `constants/theme.ts`. Use `useColorScheme` hook for dark/light mode support.