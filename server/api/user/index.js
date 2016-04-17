'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./user.controller');
var Middleware = require('../Middleware');

router.post('/create',
  Middleware.sanitizeRequest,
  Middleware.encryptPassword,
  controller.create,
  Middleware.generateToken,
  Middleware.sanitizeResponse,
  Middleware.sendResponse
);

router.post('/login',
  Middleware.sanitizeRequest,
  controller.findUserByEmail,
  Middleware.comparePassword,
  Middleware.generateToken,
  Middleware.sanitizeResponse,
  Middleware.sendResponse
);

// router.put('/:id', controller.update);

// router.delete('/:id', controller.destroy);

module.exports = router;
