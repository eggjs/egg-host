'use strict';

module.exports = app => {
  app.get('/worker', app.controller.test.worker);
  app.get('/agent', app.controller.test.agent);
};
