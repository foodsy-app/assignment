# Assignment

<div align="center">
  <a href="https://foodsy.eu/">
    <img
      src="https://uploads-ssl.webflow.com/5953bc2faaef8c203fb570b7/5bd22f5c166db1a4287b55c9_foodsy%20-%20logo%20-%20red.svg"
      height="125"
      alt="Foodsy logo"
    />
  </a>
  <h1>Foodsy</h1>
  <h4>Foodsy assignment.</h4>
</div>

## Intro

To determine whether you’re the person for the job, we’d like you to do this exercise. The goal is to get a sense of your capabilities and thought processes.

The assignment is split into 2 parts:
 * Preparation
 * Live coding session

### Preparation

This repository helps you with the preparation. Please clone this repository and then follow this README to setup a local development environment. Make sure you install the prerequisites and the project dependencies to get the projects to run correctly on your machine. When you can view the website in your browser, your preparation is completed.

### Live coding session

When it's time for the live coding session, we will share the requirements of a new feature we expect you to build and you will build it live with us watching. We have sized the assignment so it is possible to finish it within the duration of the session, but this is not our main priority. We are looking for GOOD progammers more than we are looking for FAST programmers. So take your time.

## Information

We have an existing monorepo using npm workspaces with 3 packages:

**client**: Next.js application which only utilises the framework's client side features, it's using Chakra UI for the styling.

**common**: General package for sharing functions between the client and server.

**server**: Node.js web application built with Fastify, Prisma ORM and a SQLite database.

## Prerequisites

- Node.js v14+.
- NPM v8.1.1+.

It's recommended to use [Visual Studio Code](https://code.visualstudio.com/) as the text editor for this assignment since it has first class support for TypeScript.

### Getting started

Run `npm install` in the root of the project, if everything went well, node modules should be hoisted to the root `node_modules` folder.

```bash
~/assignment
> npm i -g npm # Double check to make sure the right version is installed
> npm install
```

### Scripts

Run these scripts to setup the project for first use.

#### Generate the Prisma client

```bash
~/assignment
> cd packages/server
~/assignment/packages/server
> npx prisma generate
```

#### Apply migrations

```bash
~/assignment/packages/server
> npx prisma migrate dev
```

#### Start the webserver

```bash
~/assignment/packages/server
> npm start
```

#### Start Prisma Studio

```bash
~/assignment/packages/server
> npx prisma studio
```

#### Start the website

```bash
~/assignment/packages/server
> cd ../client
~/assignment/packages/client
> npm run dev
```

### More scripts

When needed later, these scripts also come in handy:

#### Seed the database

```bash
~/assignment/packages/server
> npx prisma db seed
```

### Resources

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Fastify](https://www.fastify.io/) - Fast and low overhead web framework, for Node.js
- [Next.js](https://nextjs.org/) - The React Framework
  for Production
- [Prisma](https://www.prisma.io/) - Next-generation Node.js and TypeScript ORM
- [Chakra UI](https://chakra-ui.com/) - Create accessible React apps with speed
