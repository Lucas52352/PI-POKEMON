const { Pokemons, Types } = require('../../db')

const getPokemonsDb = async () => {
    const pokemonDb = await Pokemons.findAll({
        include: {
            model: Types,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    
    return (pokemonDb.map(pokemons => {

        const types = pokemons.Types.map(type => type.name)

        console.log(types);

        return {
            id: pokemons.id,
            name: pokemons.name,
            height: pokemons.height,
            weight: pokemons.weight,
            HP: pokemons.HP,
            attack: pokemons.attack,
            armor: pokemons.armor,
            speed: pokemons.speed,
            types: types,
            image: pokemons.image,
            createdInDB: true
        }
    }))
}

module.exports = getPokemonsDb