const publisher = require('@pact-foundation/pact-node');
const path = require('path');

const opts = {
  providerBaseUrl: 'http://localhost:9999',
  pactFilesOrDirs: [path.resolve(process.cwd(), 'pacts')],
  pactBroker: 'http://localhost:5000',
  pactBrokerUsername: process.env.PACT_USERNAME,
  pactBrokerPassword: process.env.PACT_PASSWORD,
  consumerVersion: '2.0.0'
};

async function publish() {
   await publisher.publishPacts(opts);
}

publish();