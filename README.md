# documentation 
[![Discord](https://img.shields.io/discord/289587909051416579.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/d4j)
[![Netlify Status](https://api.netlify.com/api/v1/badges/5def01a0-d174-43c2-b6f1-9010dc6c2c8c/deploy-status)](https://app.netlify.com/sites/discord4j-docs/deploys)

This is the repository for all the documentation for Discord4J. Content in this
repository is published to [docs.discord4j.com](https://docs.discord4j.com).

The website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
