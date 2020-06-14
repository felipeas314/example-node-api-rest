let mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {

    adiciona: (req, res) => {

        model.create(req.body)
            .then(user => {
                res.json(user);
            }, error => {
                res.json(error);
            });
    },

    buscaPorId: (req, res) => {

        model.findById(req.params.id)
            .then(user => {
                res.json(user);
            }, error => {
                res.json(error);
            });
    },

    lista: async (req, res) => {

        const users = await User.find();

        res.status(200).json({
            content: users,
            status: 'OK'
        })
    },

    deleta: (req, res) => {

        model.remove({ '_id': req.params.id })
            .then(() => {
                res.sendStatus(200);
            }, error => {
                res.json(error);
            });
    },

    atualiza: (req, res) => {

        model.finndByIdAndUpdate(req.params.id, req.body)
            .then(user => {
                res.json(user);
            }, error => {
                console.log(error);
                res.json(error);
            })
    }

}