const { Pokemons, Types } = require('../../db')
const axios = require('axios')

const pokemonsById = async (id, source) => {
    
    if(source === 'db') {

        const pokemonDatabase = await Pokemons.findByPk(id, {
            include: [{
                model: Types,
                attributes: ['id', 'name'], // Incluye los atributos 'id' y 'name' del tipo
                through: { attributes: [] }, // Excluye los atributos de la tabla intermedia
            }]
        });

        console.log('getById:', pokemonDatabase);

        const types = pokemonDatabase.Types.map(type => type.name)
        

        const pokemonDb = {
            id: pokemonDatabase.id,
            name: pokemonDatabase.name,
            height:pokemonDatabase.height,
            weight: pokemonDatabase.weight,
            HP: pokemonDatabase.HP,
            attack: pokemonDatabase.attack,
            armor: pokemonDatabase.armor,
            speed: pokemonDatabase.speed,
            image: pokemonDatabase.image,
            types: types,
            inDb: pokemonDatabase.created,
        }
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
            armor: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            types: pokemon.types.map((el) => el.type.name),
            image: pokemon.sprites.other['official-artwork'].front_default,
            createdInDb: false,
        }
        return pkmnApi
    }

}

module.exports = pokemonsById