'use strict';

module.exports = {
  * worker() {
    const res = yield this.curl('http://eggjs.org:8000');
    this.body = res.data.toString();
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
