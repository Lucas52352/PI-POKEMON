const getPokeByApi = require('./getPokeByApi')
const getPokeByDb = require('./getPokeByDb')

const allPokemons = async () => {

    const pokemonApi = await getPokeByApi()
    const pokemonsDb = await getPokeByDb()
    const allPokemons = pokemonsDb ? [...pokemonApi, ...pokemonsDb] : pokemonApi

    return allPokemons
}

module.exports = allPokemons