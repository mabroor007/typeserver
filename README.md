# typeserver

This project demonstrates the use of Typescript, Express, Typeorm and JWT auth.

## Step 1

Initialize the project with `yarn init`

## Step 2

Install dev-dep `yarn add -D typescript ts-node ts-node-dev @types/node @types/express`

## Step 3

Create tsconfig.json by `npx tsc --init`

## Step 4

Setup outDir,rootDir,baseUrl and also relative paths as below

```json
    "baseUrl": "./src"
    "paths": {
      "@services/*": ["app/path/to/services/*"],
      "@components/*": ["app/somewhere/deeply/nested/*"],
      "@environments/*": ["environments/*"]
    }
```

## Step 5

Change main file in package.json to `src/index.ts`

## Step 6

Setup scripts in package.json

```json
  "scripts": {
    "start": "node dist/index.js",
    "_run": "ts-node src/index.ts",
    "dev": "ts-node-dev src/index.ts",
    "build":"tsc"
  },
```

## Step 7

Create src/index.ts and run `yarn start`

Note! This should run successfully.

## Step 8

add dep `yarn add express`

## Step 9

setup the server

## Step 10
