var _ = require('lodash');
var CryptoJS = require('crypto-js');
var jwt = require('jsonwebtoken');

var config = require('../config/environment');

var Middleware = {
  isAuthorized: function(req, res, next) {
    if (!req.tokenId) {
      return next({
        status: 401,
        message: 'Unauthorized'
      });
    }
    return next();
  },

  sanitizeRequest: function(req, res, next) {
    if (req.body.email) {
      req.body.email = req.body.email.trim().toLowerCase();
    }
    return next();
  },

  encryptPassword: function(req, res, next) {
    var password = req.body.password;
    if (password) {
      req.body.password = CryptoJS.AES.encrypt(password, config.cryptoSecretKey).toString();
    }
    return next();
  },

  comparePassword: function(req, res, next) {
    var inputPassword = req.body.password;
    var encryptedPassword = req.data.password;
    var realPassword = CryptoJS.AES.decrypt(encryptedPassword, config.cryptoSecretKey).toString(CryptoJS.enc.Utf8);
    if (inputPassword !== realPassword) {
      return next({
        status: 400,
        message: 'Invalid password'
      });
    }
    return next();
  },

  generateToken: function(req, res, next) {
    if (req.data._id) {
      var token = jwt.sign({
        _id: req.data._id
      }, config.jwtSecretKey);
      req.data.token = token;
    }
    return next();
  },

  sanitizeResponse: function(req, res, next) {
    if (req.data.password) {
      req.data = _.omit(req.data, 'password');
    }
    return next();
  },

  sendResponse: function(req, res) {
    return res.send(req.data);
  }
};

module.exports = Middleware;