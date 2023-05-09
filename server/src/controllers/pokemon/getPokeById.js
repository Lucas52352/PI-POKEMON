const { Pokemons, Types } = require('../../db')
const axios = require('axios')

const pokemonsById = async (id, source) => {
    if(source === 'db') {

        const pokemonDatabase = await Pokemons.findOne({

            where: { id: id },
            include: {

                model: Types,
                attributes: ['name'],

                through: {
                    types: []
                }
            }
        })

        const pokemonDb = {
            id: pokemonDatabase.dataValues.id,
            name: pokemonDatabase.dataValues.name,
            height:pokemonDatabase.dataValues.height,
            weight: pokemonDatabase.dataValues.weight,
            health: pokemonDatabase.dataValues.health,
            attack: pokemonDatabase.dataValues.attack,
            defense: pokemonDatabase.dataValues.defense,
            speed: pokemonDatabase.dataValues.speed,
            image: pokemonDatabase.dataValues.image,
            createdInDb: pokemonDatabase.created,
        }
        console.log(pokemonDb)
        return pokemonDb
    }

    const pokemonApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

    if(pokemonApi.data) {
        const pokemon = pokemonApi.data
        
        const pkmnApi = {
            id: id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            HP: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            types: pokemon.types.map((el) => el.type.name),
            image: pokemon.sprites['official-artwork'].front_shiny,
            createdInDb: false,
        }
        console.log(pkmnApi)
        return pkmnApi
    }

}

module.exports = pokemonsById