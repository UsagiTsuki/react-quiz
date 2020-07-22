const path = require('path');
const environment = process.env.NODE_ENV || 'development';
const env = require(`./env/${environment}.js`);

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  env: {
    QUIZ_API_URL: env.QUIZ_API_URL,
    API_URL: env.API_URL,
    API_KEY: env.API_KEY
  },
  serverRuntimeConfig: {},
  publicRuntimeConfig: {}
};
