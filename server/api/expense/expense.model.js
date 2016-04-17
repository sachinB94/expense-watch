'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty']
  },
  category: {
    type: String,
    required: [true, 'Category cannot be empty']
  },
  type: {
    type: String,
    enum:  {
      values: ['cash', 'credit'],
      message: 'Expense type must be either cash or credit'
    },
    required: [true, 'Expense type is required']
  },
  amount: {
    type: Number,
    min: [0, 'Amount cannot be less than 0'],
    required: [true, 'Amount is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Unauthorized']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

var Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = {

  create: function(data) {
    var expense = new Expense(data);
    return expense.save();
  },

  find: function(condition) {
    return Expense.find(condition).lean();
  },

  update: function(condition, data) {
    return Expense.findOneAndUpdate(condition, data, {
      new: true
    }).lean();
  },

  remove: function(condition) {
    return Expense.remove(condition).lean();
  }

};
