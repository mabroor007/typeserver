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
