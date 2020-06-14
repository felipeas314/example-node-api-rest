const { Router } = require('express');

let routes = new Router();

const userService = require('../src/app/services/user');


routes.get('/health', (req,res) => {
  res.status(200).json({
    date: new Date(),
    message: 'Server UP!!!',
    status: "OK"
  })
});

const SERVICE_USERS = '/users';

routes.get(SERVICE_USERS, userService.lista);


module.exports = routes;