'use strict';

module.exports = {
  port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 9000,
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '127.0.0.1',
  mongo: {
    uri: 'mongodb://expense-watch:expense-watch@ds011281.mlab.com:11281/expense-watch'
  }
};
