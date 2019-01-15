// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli', 'pact'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('@pact-foundation/karma-pact')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    files: [
      'node_modules/@pact-foundation/pact-web/pact-web.js',
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    pact: [{
      cors: true,
      port: 1234,
      consumer: "ui",
      provider: "beer-api",
      dir: "pacts",
      spec: 2,
      logLevel: 'DEBUG',
      log: 'logs/pact.log'
    }],
    proxies: {
      '/beers/': 'http://127.0.0.1:1234/beers/'
    }
 
  },
);
};
