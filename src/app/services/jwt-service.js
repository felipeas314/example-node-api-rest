const jwt = require('jsonwebtoken');

exports.createToken = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ user_id: data._id }, 'secret', function (err, token) {
      if (err) return reject(err);

      return resolve(token);
    });
  });
}

exports.verifyToken = (token) => {
  return new Promise((resolve, rejetc) => {
    jwt.verify(token, 'secret', function (err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
}