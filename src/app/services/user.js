let mongoose = require('mongoose');

module.exports = app => {

    let service = {};

    let model = mongoose.model('User');

    service.adiciona = (req, res) => {
        
        model.create(req.body)
            .then( user => {
                res.json(user);
            }, error => {
                res.json(error);
            });
    }

    service.buscaPorId = (req, res) => {

        model.findById(req.params.id)
            .then(user => {
                res.json(user);
            },error => {
                res.json(error);
            }); 
    }

    service.lista = (req, res) => {

        model.find()
            .then(albuns => {
                res.json(albuns);
            }, error => {
                res.json(error);
            });
    }

    service.deleta = (req, res) => {

        model.remove({'_id':req.params.id})
            .then( () => {
                res.sendStatus(200);
            }, error => {
                res.json(error);
            });
    }

    service.atualiza = (req, res) => {

        model.finndByIdAndUpdate(req.params.id,req.body)
            .then( user => {
                res.json(user);
            }, error => {
                console.log(error);
                res.json(error);
            })
    }

    return service;
}