'use strict';

const urllib = require('urllib');

module.exports = agent => {
  agent.messenger.on('test', () => {
    urllib.request('http://eggjs.org:8000', function(err, data) {
      if (err) {
        throw err; // you need to handle errors
      }
      agent.messenger.sendToApp('test-res', data.toString());
    });
  });
};
