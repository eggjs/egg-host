'use strict';

module.exports = app => {
  if (app.config.host && (app.config.host.mode === 'both' || app.config
      .host.mode === 'app')) {
    const DNSHijacking = require('dns-hijacking');
    const dNSHijacking = new DNSHijacking(app.config.host.host);
    dNSHijacking.setup();
    app.coreLogger.info(`[egg-host] host is config by : ${JSON.stringify(app.config.host.host)}`);
  }
};
