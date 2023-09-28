# BWS-BaaS

![Node Version](https://img.shields.io/badge/node-16.x-green)

bws-baas is a TypeScript abstraction of the [BaaS REST API](https://docs.blockchainasaservice.com.br/).

To learn more about the BaaS product, visit [our website](https://blockchainasaservice.com.br/).

## Installation

You can install the package either using [NPM](https://www.npmjs.com/package/@bws-baas/client).

> If you wanna checkout latest bugfix or feature, use `npm install @sdk-baas/client@dev`

### Using NPM

```bash
npm install @bws-baas/client
```

## Getting Started
```ts
// Basic usage
import { Client } from '@bws-baas/client'

// Instanciate object and set authentication credentials.
const client = new Client({
    environment: 'sandbox',
    auth: {
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        clientId: process.env.AUTH_CLIENT_ID,
        applicationName: process.env.AUTH_APPLICATION_NAME,
    }
})

// Create a new wallet in CELO network
const wallet = client.walletManager.createWallet({
    networkId: 148 //Identificador de rede fornecido pelo BaaS
})

console.log(wallet);
//{
//  id: 135,
//  isExternal: false,
//  precision: 18,
//  nativeTokenSymbol: "CELO",
//  network: {
//    id: 148,
//    name: "celo"
//  },
//  tokens: [
//    {
//      name: "Celo",
//      symbol: "CELO",
//      symbolFee: "CELO",
//      precision: 18
//    }
//  ],
//  addresses: [
//    "0x9BF18fd7F841f1da2ABA31b8066387f4d20eBE18"
//  ],
//  walletIdentifier: null,
//  description: "CELO",
//  notificationEnabled: false,
//  createdAt: "2023-09-28T17:21:08.322Z",
//  updatedAt: null
//}
```


> :writing_hand: If you have questions [submit an issue](https://github.com/bitfyapp/sdk/issues/new/choose)

## Prerequisites

-   :gear: [NodeJS](https://nodejs.org/) (LTS/Fermium)
-   :toolbox: [Npm](https://npmjs.com/)/[Lerna](https://lerna.js.org/)

## Useful links

- [BaaS Website](https://blockchainasaservice.com.br/)
- [BaaS API Documentation](https://docs.blockchainasaservice.com.br/)
- [Class Reference Documentation](https://docs-sdk.blockchainasaservice.com.br/)

## Architecture Overview

| Package                                                             | Version                                                                                                                                                            | License                                                                                                          | Docs                                                                                                           | Description                                                     |
|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------| -------------------------------------------------------------------------------------------------------------- |-----------------------------------------------------------------|
| [client](https://github.com/bitfyapp/sdk/tree/main/packages/client) | [![npm](https://img.shields.io/github/package-json/v/bitfyapp/sdk/main?filename=packages%2Fclient%2Fpackage.json)](https://www.npmjs.com/package/@bws-baas/client) | [![License: MIT](https://img.shields.io/badge/License-MIT%202023-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) | [![documentation](https://img.shields.io/badge/typedoc-blue)](https://docs-sdk.blockchainasaservice.org/)                | :rotating_light: Entire API Client offering (includes all apis) |
| [common](https://github.com/bitfyapp/sdk/tree/main/packages/common) | [![npm](https://img.shields.io/github/package-json/v/bitfyapp/sdk/main?filename=packages%2Fcommon%2Fpackage.json)](https://www.npmjs.com/package/@bws-baas/common) | [![License: MIT](https://img.shields.io/badge/License-MIT%202023-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) | [![documentation](https://img.shields.io/badge/typedoc-blue)](https://docs-sdk.blockchainasaservice.org/)           | Common code for reuse                                           |

# For developers

## Package.json Scripts

| Script           | Description                                            |
| ---------------- |--------------------------------------------------------|
| commit            | Uses `conventional-commits` to create a new commit     |
| docfy            | Uses `typedoc` to build repo documents                 |
| test | Uses `jest` to run tests under `/test` in each package |

[npm-url]: https://www.npmjs.com/package/@bws-baas/client
