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
    ref: 'user',
    required: true
  },
  musics: [
    musicSchema
  ],
  created_at: {
    type: Date,
    required: true
  }
});

const User = mongoose.model('playlist', schema);

module.exports = User;