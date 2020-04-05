const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();


module.exports = async({ memesToCreate = 3 } = {}) => {

  const name = ['Julia Spinner', 'Johnny Tripper', 'Fred Meditator'];

  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.pickone(name),
    image: 'https://source.unsplash.com/random',
    bottom: chance.pickone(name),
  })));
};
