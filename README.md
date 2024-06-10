<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
 -->

# React Phone Catalog Documentation

## Overview

This project, `react_phone-catalog`, is a React-based web application designed to showcase a catalog of phones. The project is built using modern frontend technologies and tools to ensure a robust, maintainable, and scalable codebase.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Tools](#development-tools)
- [Linting and Formatting](#linting-and-formatting)
- [Building and Previewing](#building-and-previewing)
- [Pre-commit Hooks](#pre-commit-hooks)
- [TypeScript Support](#typescript-support)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. The recommended versions are:

- **Node.js**: ^14.0.0
- **npm**: ^6.0.0

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/react_phone-catalog.git
cd react_phone-catalog
```

Install dependencies:

```bash
npm install
```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will launch the application using Vite, a fast build tool and development server.

## Scripts

The project includes several npm scripts to streamline development and build processes:

- `start`: Starts the Vite development server.
- `lint`: Runs ESLint on all JavaScript and TypeScript files in the `src` directory and automatically fixes issues.
- `format`: Formats all relevant files using Prettier.
- `build`: Compiles the TypeScript code and builds the application using Vite.
- `preview`: Previews the production build locally.
- `prepare`: Sets up Husky for managing Git hooks.

## Dependencies

### Core Dependencies

- `react`: ^18.2.0 - A JavaScript library for building user interfaces.
- `react-dom`: ^18.2.0 - React package for working with the DOM.
- `react-redux`: ^9.1.2 - Official React bindings for Redux.
- `react-router-dom`: ^6.23.1 - DOM bindings for React Router.
- `styled-components`: ^6.1.11 - Library for writing CSS-in-JS.
- `vite-plugin-svgr`: ^4.2.0 - Vite plugin to import SVG as React components.
- `react-toastify`: ^10.0.5 - Library for adding notifications to your React app.

### Development Tools

#### Dev Dependencies

- `@types/react`: ^18.2.66 - TypeScript type definitions for React.
- `@types/react-dom`: ^18.2.22 - TypeScript type definitions for React DOM.
- `@typescript-eslint/eslint-plugin`: ^7.12.0 - ESLint plugin for TypeScript.
- `@typescript-eslint/parser`: ^7.12.0 - ESLint parser for TypeScript.
- `@vitejs/plugin-react`: ^4.2.1 - Vite plugin to support React.
- `eslint`: ^8.57.0 - Pluggable JavaScript linter.
- `eslint-config-airbnb`: ^19.0.4 - Airbnb's ESLint config.
- `eslint-config-prettier`: ^9.1.0 - Disables ESLint rules that conflict with Prettier.
- `eslint-plugin-import`: ^2.29.1 - ESLint plugin for import/export syntax.
- `eslint-plugin-jsx-a11y`: ^6.8.0 - ESLint plugin for accessibility rules on JSX elements.
- `eslint-plugin-prettier`: ^5.1.3 - Runs Prettier as an ESLint rule.
- `eslint-plugin-react`: ^7.34.2 - ESLint plugin for React.
- `eslint-plugin-react-hooks`: ^4.6.2 - ESLint plugin for React hooks.
- `globals`: ^15.3.0 - Global variables for ESLint config.
- `husky`: ^9.0.11 - Git hooks manager.
- `lint-staged`: ^15.2.5 - Run linters on git staged files.
- `plop`: ^4.0.1 - Micro-generator framework.
- `prettier`: ^3.3.0 - Code formatter.
- `typescript`: ^5.4.5 - TypeScript language.
- `typescript-eslint`: ^7.12.0 - Monorepo for all the tooling which enables ESLint to support TypeScript.
- `vite`: ^5.2.0 - Next generation frontend tooling.

## Linting and Formatting

The project uses ESLint and Prettier to ensure code quality and consistency.

### Linting

To lint the code, run:

```bash
npm run lint
```

### Formatting

To format the code, run:

```bash
npm run format
```

### Lint-Staged

Lint-staged is configured to automatically lint and format staged files before committing. The configuration is as follows:

```json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

## Building and Previewing

### Building

To build the project for production, run:

```bash
npm run build
```

This will compile the TypeScript code and bundle the application using Vite.

### Previewing

To preview the production build locally, run:

```bash
npm run preview
```

## Pre-commit Hooks

The project uses Husky to manage pre-commit hooks. Husky is configured to run lint-staged before every commit to ensure that code quality is maintained. The prepare script sets up Husky.

### Setting Up Husky

To install Husky, run:

```bash
npm run prepare
```

## TypeScript Support

The project is built with TypeScript to provide type safety and enhance developer experience. TypeScript configurations and dependencies are already set up in the project.

## Conclusion

This documentation provides an overview of the `react_phone-catalog` project structure, dependencies, and development workflows. By following the guidelines and using the provided scripts, you can effectively develop and maintain this React application.
