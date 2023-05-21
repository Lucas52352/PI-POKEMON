const getAllPoke = require('../controllers/pokemon/getAllPoke')
const getPokeByName = require('../controllers/pokemon/getPokeByName')
const getPokeById = require('../controllers/pokemon/getPokeById')

const getAllPokemons = async (req, res) => {
    let { name } = req.query

    if(name) {
        let pokemonName = await getPokeByName() || getPokeById()

        if(pokemonName.error) {
            throw new Error(pokemonName.error)
        } else {
            returnres.status(200).json(pokemonName)
        }
    }   
    else {

            try {

                const allPokemon = await getAllPoke()
                return res.status(200).json(allPokemon) 

            } catch (error) {
                
                return res.status(400).json({ error: error.message})
            }
        }


}

module.exports = getAllPokemons