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

        model.findById(req.params.id)
            .then(album => {
                res.json(album);
            }, error => {
                res.json(error);
            });
    }

    service.deleta = (req, res) => {

        model.remove({'_id' : req.params.id})
            .then( () => {
                res.sendStatus(200);
            }, error => {
                res.json(error);
            });
    }

    service.atualiza = (req, res) => {

        model.findByIdAndUpdate(req.params.id,req.body)
            .then( album => {
                console.log(album);
            }, error => {
                console.log(error);
                res.sendStatus(500);
            });
    }
    return service;
}