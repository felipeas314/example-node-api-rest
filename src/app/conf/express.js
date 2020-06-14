let express = require('express');
let consign = require('../configurations/node_modules/consign');
let bodyParser = require('body-parser');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get()

    return app;
}