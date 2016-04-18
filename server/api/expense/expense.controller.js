'use strict';

var _ = require('lodash');
var Expense = require('./expense.model');
var Util = require('../Util');

module.exports = {

  create: function(req, res, next) {
    var data = req.body;
    data.user = req.tokenId;

    Expense
      .create(data)
      .then(function(expense) {
        req.data = expense.toObject();
        return next();
      })
      .catch(function(err) {
        return next(Util.getMongoError(err));
      });
  },

  getMyExpenses: function(req, res, next) {

    var userId = req.tokenId;

    Expense
      .find({
        user: userId
      })
      .then(function(expenses) {
        req.data = expenses;
        return next();
      })
      .catch(function(err) {
        return next(Util.getMongoError(err));
      });
  },

  update: function(req, res, next) {
    var expenseId = req.params.expenseId;
    var data = req.body;

    Expense
      .update({
        _id: expenseId
      }, data)
      .then(function(expense) {
        req.data = expense;
        return next();
      })
      .catch(function(err) {
        return next(Util.getMongoError(err));
      });
  },

  delete: function(req, res, next) {
    var expenseId = req.params.expenseId;

    Expense
      .remove({
        _id: expenseId
      })
      .then(function(response) {
        req.data = response.result;
        return next();
      })
      .catch(function(err) {
        return next(Util.getMongoError(err));
      });
  }

};