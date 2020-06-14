var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    gravadora: {
        type: String,
        required: true
    },
    dataDeLancamento: {
        type: String,
        required: true
    }
});

mongoose.model('Album', schema);