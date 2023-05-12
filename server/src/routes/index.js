const { Router } = require('express')
const pokemonRouter = require('./pokemonRoute')
const typeRouter = require ('./typeRoute')
const router = Router()

router.use('/pokemon', pokemonRouter)
router.use('/types', typeRouter)

module.exports = router