'use strict';

module.exports = agent => {
  if (agent.config.host && (agent.config.host.mode === 'both' || agent.config
      .host.mode === 'agent')) {
    const DNSHijacking = require('dns-hijacking');
    const dNSHijacking = new DNSHijacking(agent.config.host.host);
    dNSHijacking.setup();
    agent.coreLogger.info(`[egg-host] host is config by : ${JSON.stringify(agent.config.host.host)}`);
  }
};
