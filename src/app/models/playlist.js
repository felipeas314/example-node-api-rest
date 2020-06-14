const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const musicSchema = require('./music');

const schema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

});

const User = mongoose.model('playlist', schema);

module.exports = User;