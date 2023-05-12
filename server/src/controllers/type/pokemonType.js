const { Type } = require('../../db.js');
const axios = require('axios');

const pokemonType = async () => {

        const typeApi = await axios.get('https://pokeapi.co/api/v2/type')
        const types = typeApi.data.results.map(type => type.name)

        types.forEach(el => {
            Type.findOrCreate({
                where: { name: el }
            })
        })

        const allTypes = await Type.findAll()

        return allTypes

    }
module.exports = pokemonType;
