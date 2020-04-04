const { Router } = require('express');
const Meme = require('../models/Meme');
// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Meme
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  });


