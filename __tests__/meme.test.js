const { getMeme, getMemes } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('memes routes', () => {
  it('creates a meme', () => {
    return request(app)

      .post('/api/v1/memes')
      .send({
        top: 'beautiful',
        image: 'https://source.unsplash.com/random',
        bottom: 'from dust to stars',
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          top: 'beautiful',
          image: 'https://source.unsplash.com/random',
          bottom: 'from dust to stars',
          __v: 0
        });
      });
  });
});
