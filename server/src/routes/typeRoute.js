const { Router } = require('express')
const typeRoute = Router()

//controller

const pokemonType = require('../controllers/type/pokemonType')

// Rutas

typeRoute.get('/', async (req, res) => {
    try {

        let allTypes = pokemonType()
        if(allTypes.error) throw new Error(allTypes.error)

        return res.status(200).json(allTypes)
    } catch (error) {
        return res.status(400).json({ error: error.message})
    }
})

module.exports = typeRoute