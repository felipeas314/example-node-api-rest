const mongoose = require('mongoose');

const schema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  band: {
    type: String,
    required: true
  },
  album: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  }
  
});

module.exports = schema;