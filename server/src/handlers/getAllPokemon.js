const getAllPoke = require('../controllers/pokemon/getAllPoke')
const getPokeByName = require('../controllers/pokemon/getPokeByName')

const getAllPokemons = async (req, res) => {
    let { name } = req.query

    if(name) {
        let pokemonName = await getPokeByName()

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
                
                return res.status(400).json({ error: error.messager})
            }
        }


}

module.exports = getAllPokemons