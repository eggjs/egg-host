# egg-host

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-host.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-host
[travis-image]: https://img.shields.io/travis/eggjs/egg-host.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-host
[codecov-image]: https://codecov.io/github/eggjs/egg-host/coverage.svg?branch=master
[codecov-url]: https://codecov.io/github/eggjs/egg-host?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-host.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-host
[snyk-image]: https://snyk.io/test/npm/egg-host/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-host
[download-image]: https://img.shields.io/npm/dm/egg-host.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-host

A host plugin for egg. It supports modify the host config, just like edit the `/etc/hosts`.

## Installation

```bash
$ npm i egg-host --save
```

## Usage

Enable this plugin

```javascript
// {app_root}/config/plugin.js
exports.host = {
  enable: true,
  package: 'egg-host',
};

// config/config.default.js
exports.host = {
  host: {
    'eggjs.org': '127.0.0.1',
  },
  mode: 'both', // `agent`,`worker`,`both`
};
```

## Overview

`egg-host` supports both `worker` and `agent` host config.

Once this plugin enabled, all network request will be mock by the host config.

## config

mode
- `agent`: only effect the agent procee.
- `worker`:  only effect the worker procee.
- `both`: effect both the worker & agent procee.**Default is both.**

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
