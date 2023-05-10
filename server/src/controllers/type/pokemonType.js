const { Type } = require('../../db.js')
const axios = require('axios')

const pokemonType = async () => {
    try {
        let types = await Type.findAll({ atrributes: ['id', 'name'] })
        console.log(types);

        if(!types.length) {

            const getTypes = await axios.get('https://pokeapi.co/api/v2/type')

            types = getTypes.data.result

            for (const type of types) {

                const url = await axios.get(type.url)
                delete type.url

                type.id = url.data.id

            }

            await Type.bulkCreate(types)

        }
    } catch (error) {

        return { error: error.message }
    }
}

module.exports = pokemonType