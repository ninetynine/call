<h1 align="center">
  <br />
  <br />
  Call
  <br />
  <br />
  <br />
</h1>

<h5 align="center">A small package containing helper functions to call single or multiple functions.</h5>
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

## Contents

* [Installation](#installtion)
* [Usage](#usage)
  * [`call`](#call)
  * [`chain`](#chain)
  * [Utility](#utility)
    * [`argsToArray`](#argstoarray)
    * [`isCallable`](#iscallable)

<hr />
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
<br />

### Usage

#### `call`

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
// > 1. 'Hello, world'

call([one, two], 'Hello, world')
// > 1. 'Hello, world'
// > 2. 'Hello, world'

call(three, 'Hello, world')
// > Ignored

call([one, two, three], 'Hello, world')
// > 1. 'Hello, world'
// > 2. 'Hello, world'
// > Ignored
```

<hr />

#### `chain`

`call` also provides a helper that makes it easy to chain functions together while transforming the database from each different function, this is called `chain`.

The first function in a chain gets passed the arguments given to `chain`. Then each function after that gets giving the returned variable from the previous function and the arguments given to `chain`.

```js
const { chain } = require('@ninetynine/call')

function one (text) {
  return `${text}, `
}

function two (text, original) {
  // text: 'Hello, '
  // original: 'Hello'

  return `${text}World`
}

chain(one, 'Hello')
// > 'Hello, '

chain([one, two], 'Hello')
// > 'Hello, World'
```

<hr />

#### Utility

`call` uses some internal functions in [`call`](#call) and [`chain`](#chain). They can be accessed externally as well.

##### `argsToArray`

`argsToArray` simply wraps a non-array variable in an `array`. This helps to standardize variables to allow for the spread operator.

```js
const { argsToArray } = require('@ninetynine/call')

const var = 'Hello, World'

argsToArray(var)
// > ['Hello, World']
```

#### `isCallable`

`isCallable` checks that a variable is either an `array` or `function`. This is used to filter out invalid _functions_ in `call` and `chain`.

```js
const { isCallable } = require('@ninetynine/call')
const noop = require('@ninetynine/noop')

const fn1 = noop
const fn2 = undefined

isCallable(fn1)
// > true

isCallable(fn2)
// > false
```

<hr />
<br />

##### Also check out
* [`noop`][noop]

[noop]: https://github.com/ninetynine/noop