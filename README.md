# Babel Transpilation Project

## Objective

This assignment will solidify your understanding of Babel and its role in JavaScript transpilation. You'll configure Babel in a project, use ES6+ features in your JavaScript code, and transpile it for broader browser compatibility.

## Project Overview

This project demonstrates how to configure Babel to transpile modern JavaScript code to ensure compatibility with older browsers.

## Installation

### Installing Babel

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

### Configuring Babel

1. Create a `babel.config.json` file. Refer to <a href="https://babeljs.io/docs/usage">Docs</a> for instructions.

#### babel.config.json

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

#### package.json

- Removed targets from `babel.config.json` and replaced with `browserslist` in `package.json`.
- Added `babel` to scripts, so I can run the `npm run babel` command.

```json
"browserslist": [
    ">0.25%",
    "not dead"
]
"scripts": {
    "babel": "npx babel src --out-dir lib"
  },
```

## How Babel Works

Babel transforms or transpiles modern JavaScript features into an older version that's widely supported by browsers. This ensures that your code can run on browsers that do not support the latest ECMAScript features.

## Transpilation

To transpile the code from the `src` directory to the `lib` directory, run:

```bash
./node_modules/.bin/babel src --out-dir lib
#or
npx babel src --out-dir lib
#or
npm run babel
```

I used the latter, `npm run babel` because I setup a script in my `package.json`.
