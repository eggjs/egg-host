'use strict';

const mm = require('egg-mock');

const server = require('./fixtures/localserver/server');
const request = require('supertest');

describe('test/host.test.js', () => {
  let app;
  before(() => {
    server.listen(8000);
    app = mm.cluster({
      baseDir: 'host-app',
      coverage: false,
    });
    return app.ready();
  });

  after(() => server.close());

  it('should support agent', () => {
    return request(app.callback())
      .get('/agent')
      .expect('local server')
      .expect(200);
  });

  it('should support worker', () => {
    return request(app.callback())
      .get('/worker')
      .expect(200)
      .expect('local server');
  });

  it('should support agent & worker', function* () {
    yield request(app.callback())
      .get('/worker')
      .expect('local server')
      .expect(200);

    yield request(app.callback())
      .get('/agent')
      .expect('local server')
      .expect(200);
  });
});
