const getAllPokemons = require('./getAllPoke')

const pokemonsByName = async (name) => {
    
    const allPokemons = await getAllPokemons() // Obtener la lista de todos los Pokémon

    const pokemonName = allPokemons

        .find(pokemon => pokemon.name === name)

    return pokemonName

}

module.exports = pokemonsByName