const deletePokemon = require('../controllers/pokemon/deletePoke')

const deleteMyPokemon = async (req, res) => {

    const { id } = req.params

    try {
        
        const toDelete = await deletePokemon(id)
        return res.status(200).json(toDelete)
        
    } catch (error) {
        
        return res.status(400).json({ error: error.message })
    }
}

module.exports = deleteMyPokemon