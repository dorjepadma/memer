const { getMeme, getMemes } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('it tests meme routes', () => {
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
  it('gets a meme by its id', async() => {
    const meme = await getMeme();
    return request(app)
      .get(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...meme,
        });
      });
  });
  it('gets all memes', async() => {
    const meme = await getMemes();
    return request(app)
      .get('/api/v1/memes')
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
  it('updates a meme by id', async() => {
    const meme = await getMeme();
    return request(app)
      .put(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...meme
        });
      });
  });
  it('deletes a meme', async() => {
    const meme = await getMeme();
  
    return request(app)
      .delete(`/api/v1/memes/${meme._id}`)
      .then(res => {
        expect(res.body).toEqual(meme);
      });
  });
});
