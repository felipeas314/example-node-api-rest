module.exports = (err, req, res, next) => {
  console.log(err);
  if (err.errors) {
    res.status(400).json({
      message: err.errors,
      status: "BAD_REQUEST"
    });
    return;
  } else {
    next();
  }
}
