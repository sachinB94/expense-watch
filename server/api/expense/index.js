'use strict';

var express = require('express');
var router = express.Router();

var controller = require('./expense.controller');
var Middleware = require('../Middleware');

router.post('/create',
  Middleware.isAuthorized,
  controller.create,
  Middleware.sendResponse
);

router.get('/me',
  Middleware.isAuthorized,
  controller.getMyExpenses,
  Middleware.sendResponse
);

router.put('/update/:expenseId',
  Middleware.isAuthorized,
  controller.update,
  Middleware.sendResponse
);

router.delete('/delete/:expenseId',
  Middleware.isAuthorized,
  controller.delete,
  Middleware.sendResponse
);

// router.get('/', controller.index);
// router.get('/:id', controller.show);

// router.post('/', controller.create);

// router.put('/:id', controller.update);

// router.delete('/:id', controller.destroy);

module.exports = router;
