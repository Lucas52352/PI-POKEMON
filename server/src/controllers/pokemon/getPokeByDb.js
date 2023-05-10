const { Pokemons, Types } = require('../../db')

const getPokemonsDb = async () => {
    const pokemonDb = await Pokemons.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            throught: {
                types: [],
            }
        }
    })

    return pokemonDb.map(pokemon => {
        return {
            id: pokemon.id,
            height: pokemon.height,
            weight: pokemon.weight,
            HP: pokemon.HP,
            attack: pokemon.attack,
            defense: pokemon.defense,
            speed: pokemon.speed,
            types: pokemon.types,
            image: pokemon.image,
            inDB: pokemon.created
        }
    })
}

module.exports = getPokemonsDb