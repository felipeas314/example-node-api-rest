const { Router } = require('express');
const asyncHandler = require('express-async-handler')

//Middlewares
const handleValidation = require('./app/middlewares/validation-errors');
const verifyToken = require('./app/middlewares/verify-token');
const routes = new Router();

const userService = require('../src/app/controllers/user');
const playlistService = require('./app/controllers/playlist');
const authController = require('./app/controllers/auth');

routes.get('/health', (req, res) => {
  res.status(200).json({
    date: new Date(),
    message: 'Server UP!!!',
    status: 'OK',
  });
});

const SERVICE_USERS = '/users';
const SERVIVCE_PLAYLISTS = '/playlists';
const SERVICE_AUTH = '/auth'

routes.get(SERVICE_USERS, userService.list);
routes.get(SERVIVCE_PLAYLISTS, playlistService.list);


routes.get(`${SERVICE_USERS}/:id`, asyncHandler(userService.findById));

routes.post(`${SERVICE_AUTH}/login`,authController.login);

routes.use(verifyToken);

routes.put(`${SERVICE_USERS}/:id`, asyncHandler(userService.delete));

routes.post(SERVICE_USERS, asyncHandler(userService.create));
routes.post(SERVIVCE_PLAYLISTS, asyncHandler(playlistService.create));

routes.use(handleValidation);

module.exports = routes;