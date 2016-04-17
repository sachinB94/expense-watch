'use strict';

var validate = require('mongoose-validate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name cannot be empty']
  },
  email: {
    type: String,
    trim: true,
    unique: [true, 'Email already exists'],
    required: [true, 'Email address cannot be empty'],
    validate: [validate.email, 'Invalid email address']
  },
  password: {
    type: String,
    required: [true, 'Password cannot be empty']
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

var User = mongoose.model('User', UserSchema);

module.exports = {

  create: function(data) {
    var user = new User(data);
    return user.save();
  },

  findOne: function(condition) {
    return User.findOne(condition).lean();
  }

};