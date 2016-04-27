# google-signin-icon [![Build Status](https://travis-ci.org/ajoslin/google-signin-icon.svg?branch=master)](https://travis-ci.org/ajoslin/google-signin-icon)

> Render a virtual dom google sign in svg icon

![](http://ajoslin.co/19f58/2eOhAJuB+)

## Install

```
$ npm install --save google-signin-icon
```


## Usage

```js
var Icon = require('google-signin-icon')

var vtree = Icon.render()
// Use virtual-dom/create-element to turn it into an element

// also takes height, default 20px
Icon.render({height: '20px')
```

## Development

Run `npm run open` to test in browser

## License

MIT © [Andrew Joslin](http://ajoslin.com)
