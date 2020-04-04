const Meme = require('../lib/models/Meme');
const chance = require('chance').Chance();


module.exports = async({ memesToCreate = 10 } = {}) => {

  const name = ['Julia Spinner', 'Johnny Tripper', 'Fred Meditator'];

  await Meme.create([...Array(memesToCreate)].map(() => ({
    top: chance.pickone(name),
    bottom: chance.pickone(name),
    image: chance.pickone(name),
  })));
};
