<p>
    <h1>nonci</h1>
    <b>nonci wrapper sdk is a nonce account nft mint tool!</b>
    <br />
</p>

[![NPM Package](https://badgen.net/npm/v/nonci)](https://npmjs.com/nonci)
[![NPM Downloads](https://badgen.net/npm/dt/nonci)](https://npmjs.com/nonci)
[![Stars](https://badgen.net/github/stars/nonci-xyz/sdk)](https://github.com/nonci-xyz/sdk)
[![License](https://badgen.net/github/license/nonci-xyz/sdk)](LICENSE)

Table of Contents:
- [Getting Started](#📦-getting-started)
  - [Installation](#installation)
    - [NPM](#npm)
    - [Yarn](#yarn)
    - [PNPM](#pnpm)
  - [Usage](#usage)
- [Contributing](#-contributing)
- [Builders](#-builders)
- [License](#-license)

## 📦 Getting Started
### Installation

#### NPM
```bash
npm install nonci
```
#### Yarn
```bash
yarn add nonci
```
#### PNPM
```bash
pnpm install nonci
```

### Usage

```js
// src/index.ts

import { Nonci } from 'nonci';

const nonci = new Nonci({
  secret: 'YOUR-SECRET-KEY',
  hostUri: 'http://localhost:3000'
});

nonci.createNonce().then((response) => {
  console.log(response);
});

// access more sdk functions

```

## ✅ Contributing

All code contributions, including those of people having commit access, must go through a pull request and be approved by a core developer before being merged. This is to ensure a proper review of all the code.

We truly ❤️ pull requests! If you wish to help, we will soon be making our sdk ready to be contribute post hackathon, and we'll do a proper announcement for everyone to contribute.

## 👨🏻‍💻 Builders

[![Twitter](https://badgen.net/twitter/follow/sahilpabale)](https://twitter.com/SahilPabale)
[![Twitter](https://badgen.net/twitter/follow/AnishDe12020)](https://twitter.com/AnishDe12020)

## 📄 License

This repository is available under the [MIT License](./LICENSE).