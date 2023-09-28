# BWS-BaaS

![Node Version](https://img.shields.io/badge/node-16.x-green)

bws-baas is a TypeScript abstraction of the BaaS REST API

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/web3) or using [Yarn](https://yarnpkg.com/package/web3)

> If you wanna checkout latest bugfix or feature, use `npm install @sdk-baas/client@dev`

### Using NPM

```bash
npm install @bws-baas/client
```

### Using Yarn

```bash
yarn add @bws-baas/client
```

## Getting Started

-   :writing_hand: If you have questions [submit an issue](https://github.com/bitfyapp/sdk/issues/new/choose)

## Prerequisites

-   :gear: [NodeJS](https://nodejs.org/) (LTS/Fermium)
-   :toolbox: [Npm](https://npmjs.com/)/[Lerna](https://lerna.js.org/)

## Useful links

- BaaS API Documentation
- Class References

## Architecture Overview

| Package                                                             | Version                                                                                                                                                            | License                                                                                                          | Docs                                                                                                           | Description                                                     |
|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------| -------------------------------------------------------------------------------------------------------------- |-----------------------------------------------------------------|
| [client](https://github.com/bitfyapp/sdk/tree/main/packages/client) | [![npm](https://img.shields.io/github/package-json/v/bitfyapp/sdk/main?filename=packages%2Fclient%2Fpackage.json)](https://www.npmjs.com/package/@bws-baas/client) | [![License: MIT](https://img.shields.io/badge/License-MIT%202023-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) | [![documentation](https://img.shields.io/badge/typedoc-blue)](https://docs.web3js.org/api/web3)                | :rotating_light: Entire API Client offering (includes all apis) |
| [common](https://github.com/bitfyapp/sdk/tree/main/packages/common) | [![npm](https://img.shields.io/github/package-json/v/bitfyapp/sdk/main?filename=packages%2Fcommon%2Fpackage.json)](https://www.npmjs.com/package/@bws-baas/common) | [![License: MIT](https://img.shields.io/badge/License-MIT%202023-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) | [![documentation](https://img.shields.io/badge/typedoc-blue)](https://docs.web3js.org/api/web3-core)           | Common code for reuse                                           |
## Package.json Scripts

| Script           | Description                                            |
| ---------------- |--------------------------------------------------------|
| commit            | Uses `conventional-commits` to create a new commit     |
| docfy            | Uses `typedoc` to build repo documents                 |
| test | Uses `jest` to run tests under `/test` in each package |

[npm-url]: https://www.npmjs.com/package/@bws-baas/client
