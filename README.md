# mux-arguments
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Function argument multiplexer.

## Installation
```bash
$ npm install mux-arguments
```

## Usage
```js
const mux = require('mux-arguments')

function muxDemux (arg1, arg2, arg3) {
  mux(obj => {
    arguments.length === 1 // true
    demux.apply(null, arguments)
  }).apply(null, arguments)

  function demux () {
    mux((arg1, arg2, arg3) => {
      arguments.length === 3 // true
    }).apply(null, arguments)
  }
}

muxDemux('foo', 'bar', 'baz')
```

## API
### mux(fn(obj)([arg1, arg2, ...])
Multiplex function arguments into an object and pass the object into a
function. Alias: `mux.mux`.

### mux(fn([arg1, arg2, ...])(obj)
Demultiplex a multiplexed object and pass the arguments into a function. Alias:
`mux.demux`.

## FAQ?
### What is muxing / demuxing?
Multiplexing (or muxing) is bundling several things together into one so it can
be transmitted efficiently. Demultiplexing (or demuxing) is unwrapping that
bundle into its original state. In this module we're multiplexing function
arguments.

### Why did you write this module?
When building event emitters it's easier to deal with a single data object than
writing code to apply n arguments. This module makes it easy to wrap and unwrap
function arguments prior to transmission.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/mux-arguments.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mux-arguments
[travis-image]: https://img.shields.io/travis/yoshuawuyts/mux-arguments/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/mux-arguments
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/mux-arguments/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/mux-arguments
[downloads-image]: http://img.shields.io/npm/dm/mux-arguments.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/mux-arguments
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
