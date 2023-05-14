const axios = require('axios')

const getPokeByApi = async (currentURL = `https://pokeapi.co/api/v2/pokemon/?limit=25`) => {

    const resultApi = await axios.get(currentURL)

    const nextApi = await axios.get(resultApi.data.next) 

    const allPokemons = [...resultApi.data.results, ...nextApi.data.results]

    const pokemonData = [];

    for (let pokemon of allPokemons) {
             
        const currentURL = await axios.get(pokemon.url)

        const pokemonObj = {
            id: currentURL.data.id,
            name: currentURL.data.name,
            height: currentURL.data.height,
            weight: currentURL.data.weight,
            HP: currentURL.data.stats[0].base_stat,
            attack: currentURL.data.stats[1].base_stat,
            armor: currentURL.data.stats[2].base_stat,
            speed: currentURL.data.stats[5].base_stat,
            image: currentURL.data.sprites.front_shiny,
            inDB: false
        };
        
        pokemonData.push(pokemonObj);
    }

    return pokemonData;      
}

module.exports = getPokeByApi;