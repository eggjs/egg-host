'use strict';

const mm = require('egg-mock');

const server = require('./fixtures/localserver/server');
const request = require('supertest');

describe('test/host.test.js', () => {
  let app;
  before(done => {
    server.listen(8000);
    app = mm.cluster({
      baseDir: 'host-app',
      coverage: false,
    });
    app.ready(done);
  });
  after(() => server.close());

  it('should support agent', done => {
    request(app.callback())
      .get('/agent')
      .expect('local server')
      .expect(200, done);
  });

  it('should support worker', done => {
    request(app.callback())
      .get('/worker')
      .expect('local server')
      .expect(200, done);
  });

  it('should support agent & worker', done => {
    request(app.callback())
      .get('/worker')
      .expect('local server')
      .expect(200, () => {
        request(app.callback())
          .get('/agent')
          .expect('local server')
          .expect(200, done);
      });
  });
});
