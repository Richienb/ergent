# Ergent [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/ergent/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/ergent)

Get the user agent to use, respecting the package.json and navigator.userAgent

[![NPM Badge](https://nodei.co/npm/ergent.png)](https://npmjs.com/package/ergent)

## Install

```sh
npm install ergent
```

## Usage

```js
const userAgent = require("ergent");

userAgent; // In Node.js
//=> 'myPackage v1.0.0'

userAgent; // In a browser
//=> 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36'
```

## API

### ergent

Type: `string`

The user agent to be used.
