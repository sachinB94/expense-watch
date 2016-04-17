'use strict';

var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');

var config = require('./environment');

module.exports = function (app) {

  var env = config.env;

  // CORS
  app.use(cors());

  app.set('view engine', 'html');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.use(morgan('dev'));
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', 'client');

  // Authorization
  app.use(function(req, res, next) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      var token = jwt.decode(req.headers.authorization.split(' ')[1], config.jwtSecretKey);
      req.tokenId = token ? token._id : null;
    }
    return next();
  });

  if (env === 'development' || env === 'test') {
    app.use(require('errorhandler')());
  }

};
