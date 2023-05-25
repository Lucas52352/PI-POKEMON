const getAllPoke = require('../controllers/pokemon/getAllPoke')


const getAllPokemons = async (req, res) => {{

            try {

                const allPokemon = await getAllPoke()
                return res.status(200).json(allPokemon) 

            } catch (error) {
                
                return res.status(400).json({ error: error.message})
            }
        }


}

module.exports = getAllPokemons