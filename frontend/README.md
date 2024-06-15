# React + TypeScript + Vite + Chakra UI

This project is a modern web application built using React, TypeScript, Vite, and Chakra UI. It provides a minimal setup to get React working in Vite with HMR, some ESLint rules, and a simple, modular component library.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A fast build tool for modern web projects.
- **Chakra UI**: A simple, modular, and accessible component library.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:isaacknjama/ello-books.git
   cd ello-books
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

## Running the App

1. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

2. **Open your browser:**

   Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

## Running the Backend

1. **Navigate to the backend directory:**

  ```bash
  cd ..
  cd backend
  ```

2. **Start the development server:**

   Using npm:

   ```bash
   npm start
   ```

   Using yarn:

   ```bash
   yarn dev
   ```

3. **Open your browser:**

   Open [http://localhost:4000](http://localhost:4000) to view the app in the browser.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. **Configure the top-level `parserOptions` property:**

   ```js
   export default {
     // other rules...
     parserOptions: {
       ecmaVersion: 'latest',
       sourceType: 'module',
       project: ['./tsconfig.json', './tsconfig.node.json'],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. **Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.**

3. **Optionally add `plugin:@typescript-eslint/stylistic-type-checked`.**

4. **Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list.**

## Folder Structure

```plaintext
your-repo-name/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   ├── theme.tsx           # Chakra UI theme configuration
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Application entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project configuration and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more information.
