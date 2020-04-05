const { Router } = require('express');
const Meme = require('../models/Meme');
// eslint-disable-next-line new-cap
module.exports = Router()
  .post('/', (req, res, next) => {
    Meme
      .create(req.body)
      .then(meme => res.send(meme))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Meme
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(meme => res.send(meme))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Meme
      .findById(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Meme
      .find()
      .then(meme => res.send(meme))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Meme
      .findByIdAndDelete(req.params.id)
      .then(meme => res.send(meme))
      .catch(next);
  });

