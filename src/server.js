const express = require('express');

require('./app/configurations/database')();
const routes = require('./routes');

let server = express();

server.use(express.json());
server.use('/api/v1', routes);


module.exports = server;