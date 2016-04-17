'use strict';

var path = require('path');
var _ = require('lodash');

var all = {

  env: process.env.NODE_ENV || 'development',
  root: path.normalize(__dirname + '/../../..'),

  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  jwtSecretKey: 'lF32f1EN59d43rll6S41Rb9QnK25Tsgb',
  cryptoSecretKey: 'wIq5LP82Ns30k439hd0GY17el27v2vD5'
};

module.exports = _.merge(all, require('./' + all.env + '.js'));
