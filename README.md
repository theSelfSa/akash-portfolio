# Akash Portfolio
Personal portfolio website project with a client app, shared code, and server runtime.

## Tech stack
- React + TypeScript + Vite
- Express (production server bundle)
- pnpm workspace-style dependency management

## Project structure
- `client/` - frontend application
- `server/` - server entry and backend runtime code
- `shared/` - shared types/utilities used across app layers
- `content/` - content and data used by the portfolio
- `patches/` - package patch files used by pnpm

## Prerequisites
- Node.js 20+ (recommended)
- pnpm 10+

## Getting started
1. Install dependencies:
   `pnpm install`
2. Start development server:
   `pnpm dev`

## Available scripts
- `pnpm dev` - run the app in development
- `pnpm build` - build client and server bundle into `dist/`
- `pnpm start` - run the production server from `dist/`
- `pnpm preview` - preview build output
- `pnpm check` - run TypeScript type checks
- `pnpm format` - format code with Prettier

## Notes
- Environment variables should be stored in local `.env*` files (already ignored by Git).
- This repository is structured to be easy to evolve as portfolio sections and features change.
