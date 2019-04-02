const isProd = process.env.NODE_ENV === "production";
const config = require(`./webpack/${isProd ? 'prod' : 'dev'}.config.js`);

module.exports = config;
