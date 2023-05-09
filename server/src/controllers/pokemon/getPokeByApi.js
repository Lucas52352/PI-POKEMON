const axios = require('axios')

const getPokeByApi = async (url = `https://pokeapi.com/api/v2/pokemon`) => {
    const resultApi = await axios.get(url)

    const nextApi = await axios.get(resultApi.data.next)

    const allPokemons = [...resultApi.data.results, ...nextApi.data.results]

    for(let pokemon of allPokemons) {
        const url = await axios.get(pokemon.url)
        delete pokemon.url

        pokemon.id = url.data.id;
        pokemon.height = url.data.height
        pokemon.weight = url.data.weight
        pokemon.HP = url.data.stats[0].base_stat
        pokemon.attack = url.data.stats[1].base_stat
        pokemon.defense = url.data.stats[2].base_stat
        pokemon.speed = url.data.stats[5].base_stat
        pokemon.types = url.data.types.type.name
        pokemon.image = url.data.sprites['official-artwork'].front_shiny
        pokemon.inDB = false
    }

    return allPokemons
}

module.exports = getPokeByApi