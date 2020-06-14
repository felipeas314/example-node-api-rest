const mongoose = require('mongoose');

const schema = mongoose.Schema({

    login: {
        type: String, 
        required: true
    },
    senha: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', schema);

module.exports = User;