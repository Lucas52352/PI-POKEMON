const { Pokemons, Types } = require('../../db');
const AWS = require('aws-sdk');
const { S3Client } = require('../../utils/S3Client');

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
    image: image,
  });

  const s3Client = new S3Client()
  s3Client.uploadFile()

  const typeInstances = await Types.findAll({
    where: { name: types },
  });

  console.log(typeInstances);
  await createdPokemon.addTypes(typeInstances);

  const tipo = typeInstances.map((elem) => elem.name);


  return {
    id: createdPokemon.id,
    name: createdPokemon.name,
    HP: createdPokemon.HP,
    attack: createdPokemon.attack,
    armor: createdPokemon.armor,
    speed: createdPokemon.speed,
    height: createdPokemon.height,
    weight: createdPokemon.weight,
    image: createdPokemon.image,
    types: tipo
  }
};

module.exports = createPokemon;


