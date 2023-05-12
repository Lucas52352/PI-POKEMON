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
    
    return (pokemonDb.map(pokemons => {
        return {
            id: pokemons.id,
            name: pokemons.name,
            height: pokemons.height,
            weight: pokemons.weight,
            HP: pokemons.HP,
            attack: pokemons.attack,
            armor: pokemons.armor,
            speed: pokemons.speed,
            types: pokemons.types,
            image: pokemons.image,
            inDB: pokemons.created
        }
    }))
}

module.exports = getPokemonsDb