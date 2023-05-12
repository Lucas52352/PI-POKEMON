const getPokemonsById = require('../controllers/pokemon/getPokeById')

const getById = async (req, res) => {
    const { id } = req.params
    const source = isNaN(id) ? 'db' : 'pokeapi'
    
    try {

        const pokemonId = await getPokemonsById(id, source)

        if(pokemonId.error) throw new Error(pokemonId.error)

        return res
        .status(200)
        .json(pokemonId)

    } catch (error) {
        return res
        .status(400)
        .json({ error: error.message})
    }
}

module.exports = getById