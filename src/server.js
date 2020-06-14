const express = require('express');

require('./app/databases/database')();
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use('/api/v1', routes);

module.exports = server;