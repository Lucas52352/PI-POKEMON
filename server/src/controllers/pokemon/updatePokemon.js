const { Pokemons, Types } = require('../../db');

let updatePokemon = async (id, name, image, HP, attack, armor, speed, height, weight, types) => {

  let pokemonToUpdate = await Pokemons.findOne({ where: { id: id } });

  console.log(pokemonToUpdate);

  let updates = {};

  if (name !== undefined) updates.name = name;
  if (image !== undefined) updates.image = image;
  if (HP !== undefined) updates.HP = HP;
  if (attack !== undefined) updates.attack = attack;
  if (armor !== undefined) updates.armor = armor;
  if (speed !== undefined) updates.speed = speed;
  if (height !== undefined) updates.height = height;
  if (weight !== undefined) updates.weight = weight;

  console.log('upd:',updates);

  await pokemonToUpdate.update(updates);

  if (types) {

    console.log(types);
    await pokemonToUpdate.setTypes([]);

    let postTypes = await Types.findAll({ where: { name: types } });

    console.log('post', postTypes);

    await pokemonToUpdate.addTypes(postTypes);

  }

  return 'Pokemon updated successfully';
  
};

module.exports = updatePokemon;
