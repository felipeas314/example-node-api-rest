var mongoose = require('mongoose');

module.exports = app => {

    var service = {};

    let model = mongoose.model('Album');

    service.lista = (req, res) => {

        model.find()
            .then(albuns => {
                res.json(albuns);
            }, error => {
                console.log(error);
                res.json(error);
            });

    }

    service.adiciona = (req, res) => {

        model.create(req.body)
            .then(album => {
                console.log('entrando');
                res.json(album);;
            }, error => {
                console.log(album);
                res.json(album)
            });

    }

    service.buscaPorId = (req, res) => {

    }

    service.deleta = (req, res) => {

    }

    service.atualiza = (req, res) => {

    }
    return service;
}