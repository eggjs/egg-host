'use strict';

const http = require('http');
const server = http.createServer((req, res) => res.end('local server'));

module.exports = server;
