'use strict';

var _ = require('lodash');
var User = require('./user.model');
var Util = require('../Util');

module.exports = {

  create: function(req, res, next) {
    var data = req.body;

    User
      .create(data)
      .then(function(user) {
        req.data = user.toObject();
        return next();
      })
      .catch(function(err) {
        return next(Util.getMongoError(err));
      });
  },

  findUserByEmail: function(req, res, next) {
    var data = req.body;

    User
      .findOne({
        email: data.email
      })
      .then(function(user) {
        if (!user) {
          return next({
            status: 404,
            message: 'Email not found'
          });
        }
        req.data = user;
        return next();
      })
      .catch(function(err) {
        return next(Util.getMongoError(err));
      });
  }
};