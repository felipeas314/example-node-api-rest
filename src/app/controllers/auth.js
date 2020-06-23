const bcrypt = require('bcrypt');

const User = require('../models/user');
const { createToken } = require('../services/jwt-service');

module.exports = {

    login: async (req, res) => {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                status: "NOT_FOUND",
                message: "User not found"
            });
        }

        const result = await bcrypt.compare(password, user.password);

        if (!result) {
            return res.status(201).json({
                message: "Invalid password"
            })
        }

        const token = await createToken(user);

        res.status(200).json({
            token
        });
    },

}