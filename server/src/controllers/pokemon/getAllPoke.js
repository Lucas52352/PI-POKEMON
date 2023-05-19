const getPokeByApi = require('./getPokeByApi')
const getPokeByDb = require('./getPokeByDb')

const allPokemons = async () => {

    const pokemonApi = await getPokeByApi()
    const pokemonsDb = await getPokeByDb()

    console.log(pokemonsDb);

    const getAllPokemons = [...pokemonApi, ...pokemonsDb]

    return getAllPokemons
}

module.exports = allPokemons