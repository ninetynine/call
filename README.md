<h1 align="center">
  <br />
  <br />
  Call
  <br />
  <br />
  <br />
</h1>

<h5 align="center">A small package containing a helper function to call single or multiple functions.</h5>
<p align="center">
  <a href="https://www.npmjs.com/package/@ninetynine/call">
    <img src="https://badgen.net/npm/v/@ninetynine/call" />
  </a>
  <a href="https://www.npmjs.com/package/@ninetynine/call">
    <img src="https://badgen.net/npm/dt/@ninetynine/call" />
  </a>
  <a href="https://www.npmjs.com/package/@ninetynine/call">
    <img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/@ninetynine/call@latest/" />
  </a>
</p>

<br />
<br />

### Installation

`call` can be installed with NPM or Yarn.

```
# Installing with NPM
npm i --save @ninetynine/call
```

```
# Installing with Yarn
yarn add @ninetynine/call
```

<hr />

### Usage

`call` provides a helper that makes it easy to call single or multiple functions.

```js
const call = require('@ninetynine/call')

function one (text) {
  console.log('1. %s', text)
}

function two (text) {
  console.log('2. %s', text)
}

const three = null

call(one, 'Hello, world')
// > 1. Hello, world

call([one, two], 'Hello, world')
// > 1. Hello, world
// > 2. Hello, world

call(three, 'Hello, world')
// > Ignored

call([one, two, three], 'Hello, world')
// > 1. Hello, world
// > 2. Hello, world
// > Ignored
```