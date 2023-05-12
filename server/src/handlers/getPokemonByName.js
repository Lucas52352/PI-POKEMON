const getPokeByName = require('../controllers/pokemon/getPokeByName.js')

const getByName = async (req, res) => {
    const { name } = req.params
    
    try {

        const pokemonName = await getPokeByName(name)

        if(pokemonName.error) throw new Error(pokemonName.error)

        return res
        .status(200)
        .json(pokemonName)
        
    } catch (error) {
        
        return res
        .status(400)
        .json({ error: error.message})

    }
}

module.exports = getByName