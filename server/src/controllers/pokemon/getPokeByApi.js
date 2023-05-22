const axios = require('axios')

const getPokeByApi = async (currentURL = `https://pokeapi.co/api/v2/pokemon/?limit=60`) => {
    

    const resultApi = await axios.get(currentURL)

    const nextApi = await axios.get(resultApi.data.next) 

    const allPokemons = [...resultApi.data.results, ...nextApi.data.results]

    const pokemonData = [];

    for (let pokemon of allPokemons) {
             
        const currentURL = await axios.get(pokemon.url)

        const data = currentURL.data

        const types = data.types.map(type => type.type.name)

        const pokemonObj = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            HP: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            armor: data.stats[2].base_stat,
            speed: data.stats[5].base_stat,
            types: types,
            image: data.sprites.front_default,
            inDB: false
            
        };
        
        pokemonData.push(pokemonObj);
    }

    return pokemonData;      
}

module.exports = getPokeByApi;