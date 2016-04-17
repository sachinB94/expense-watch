'use strict';

module.exports = {
  port: process.env.PORT || 9000,
  ip: process.env.IP || '127.0.0.1',
  mongo: {
    uri: 'mongodb://localhost/expense-watch-test'
  }
};
