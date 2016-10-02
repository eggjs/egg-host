'use strict';

const urllib = require('urllib');

module.exports = {
  * worker() {
    this.body = (yield urllib.requestThunk('http://eggjs.org:8000')).data;
  },
  * agent() {
    this.body = yield callAgent(this);
  },
};

function callAgent(ctx) {
  return callback => {
    ctx.app.messenger.on('test-res', data => callback(undefined, data));
    ctx.app.messenger.sendToAgent('test');
  };
}
