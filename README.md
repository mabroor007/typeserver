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
    "baseUrl": "./src",
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

Setup the server

At this point you should have a basic server continue next for typeorm setup

# Typeorm Setup

## Step 1

Install typeorm reflect-metadata and driver `yarn add typeorm reflect-metadata pg`

## Step 2

Enable options in tsconfig

```json
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true,
```

## Step 3

Add path to entities and migration in tsconfig path object

```json
      "@entity/*": ["DB/entity/*"],
      "@migration/*": ["DB/migration/*"],
```

## Step 4

Add es6 in lib in tsconfig

```json
    "lib": [
      "es6"
    ]
```

Disable strict property initialization in tsconfig

```json
    "strictPropertyInitialization": false
```

## Step 5

Create ormconfig.json

```json
{
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "pwd",
  "database": "test",
  "synchronize": true,
  "logging": false,
  "entities": ["src/DB/entity/**/*.ts"],
  "migrations": ["src/DB/migration/**/*.ts"],
  "subscribers": ["src/DB/subscriber/**/*.ts"]
}
```

## Step 6

NOW Application dir looks like this

```
APPLICATION----
    |
    |- src/
        |- DB/
           |-entity/
                |-photo.ts
           |-migration/
           |-subscriber/
        |
        |-index.ts
```

tsconfig.json will look like this

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es6", "es5"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "strictPropertyInitialization": false,
    "baseUrl": "./src",
    "paths": {
      "@services/*": ["services/*"],
      "@entity/*": ["DB/entity/*"],
      "@migration/*": ["DB/migration/*"],
      "@components/*": ["components/*"],
      "@environments/*": ["environments/*"]
    },
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
