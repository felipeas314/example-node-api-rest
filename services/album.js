var mongoose = require('mongoose');

module.exports = app =>{

    var service = {};

    let model = mongoose.model('Album');

    console.log('albuns');

    service.lista = (req,res) => {

        model.find()
            .then( albuns => {
                res.json(albuns);
            }, error => {
                console.log(error);
                res.json(error);
            });

    }

    service.adiciona = (req,res) => {

        console.log('adiicona');

        model.create(req.body)
            .then(album => {
                console.log('entrando');
                res.json(album);;
            }, error => {
                console.log(album);
                res.json(album)
            });

    }

    return service;
}