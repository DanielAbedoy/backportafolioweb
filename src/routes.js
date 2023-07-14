const routesApi = require('./api');
const dbMongo = require('./db/db_config');
const {router} = require('./auth');

module.exports = { routesApi, dbMongo, router };
