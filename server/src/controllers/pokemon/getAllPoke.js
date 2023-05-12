const getPokeByApi = require('./getPokeByApi')
const getPokeByDb = require('./getPokeByDb')

const allPokemons = async () => {

    const pokemonApi = await getPokeByApi()
    const pokemonsDb = await getPokeByDb()

    const getAllPokemons = [...pokemonApi, ...pokemonsDb]

    return getAllPokemons
}

module.exports = allPokemons