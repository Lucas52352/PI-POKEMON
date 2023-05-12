const { Pokemons, Types } = require('../../db');

const createPokemon = async (name, image, HP, attack, armor, speed, height, weight, types) => {

  const foundPoke = await Pokemons.findOne({ where: { name: name } });

  if (foundPoke) {
    throw new Error('That pokemon has already been created');
  }

  const createdPokemon = await Pokemons.create({

    name: name,
    HP: HP,
    attack: attack,
    armor: armor,
    height: height,
    weight: weight,
    speed: speed,
    image: image 
    },
  );

  const typeInstances = await Types.findAll({
    where: { name: types },
  });

  await createdPokemon.addTypes(typeInstances);

  const tipo = typeInstances.map((elem) => elem.name);

  return `Successfully created pokemon, with id: ${createdPokemon.id} and type: ${tipo}`;
};

module.exports = createPokemon;
