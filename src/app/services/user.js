const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = {

    create: async (req, res) => {

        const { email } = req.body;

        const verifyEmail = await User.find({ email });

        if (verifyEmail) {
            return res.status(400).json({
                status: "BAD_REQUEST",
                message: "Email already exists",
                data: new Date(),
            })
        }

        let passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = User.create({ ...req.body, password: passwordHash });

        res.status(201).json({
            status: 'CREATED',
            message: 'User Created',
            content: user,
            data: new Date(),
        });
    },

    findById: (req, res) => {

        const { id } = req.params;

        const user = User.findById(id);

        if (!user) {
            return res.status(404).json({
                status: "NOT_FOUND",
                message: 'User not exists',
                data: new Date(),
            });
        }

        res.status(200).json({
            content: user,
            data: new Date(),
            status: 'OK',
            message: 'User was found successfully '
        });
    },

    list: async (req, res) => {

        const quantity = await User.countDocuments();

        const users = await User.find();

        res.status(200).json({
            content: users,
            status: 'OK',
            message: 'List of users',
            data: new Date(),
            quantity
        })
    },

    deleta: (req, res) => {

        User.remove({ '_id': req.params.id })
            .then(() => {
                res.sendStatus(200);
            }, error => {
                res.json(error);
            });
    },

    atualiza: (req, res) => {

        User.finndByIdAndUpdate(req.params.id, req.body)
            .then(user => {
                res.json(user);
            }, error => {
                console.log(error);
                res.json(error);
            })
    }

}