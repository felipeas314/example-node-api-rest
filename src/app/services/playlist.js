const bcrypt = require('bcrypt');
const yup = require('yup');

const Playlist = require('../models/playlist');

module.exports = {

  create: async (req, res) => {

    const { name } = req.body;

    let schema = yup.object().shape({
      name: yup.string().required(),
      user: yup.string().required(),
    })

    await schema.validate(req.body);

    const verifyName = await Playlist.findOne({ name });

    if (verifyName) {
      return res.status(400).json({
        status: "BAD_REQUEST",
        message: "Playlist whith name already exists",
        data: new Date(),
      })
    }


    const playlist = await Playlist.create({ ...req.body, created_at: new Date() });

    res.status(201).json({
      status: 'CREATED',
      message: 'User Created',
      content: playlist,
      data: new Date(),
    });
  },

  findById: async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    console.log(user);

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

    const quantity = await Playlist.countDocuments();

    const playlists = await Playlist.find().populate('user');

    res.status(200).json({
      content: playlists,
      status: 'OK',
      message: 'List of playlist',
      data: new Date(),
      quantity
    })
  },

  delete: async (req, res) => {

    const { id } = req.params;

    const user = await User.findById(id);

    console.log(user);

    if (!user) {
      return res.status(404).json({
        status: "NOT_FOUND",
        message: 'User not exists',
        data: new Date(),
      });
    }

    await User.deleteOne({ _id: id });

    res.status(200).json({
      data: new Date(),
      status: 'OK'
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