const Router = require('express')
const pokemonRouter = Router()

//HANDLERS

const getPokemonsById = require('../handlers/getPokemonsById')
const getPokemonByName = require ('../handlers/getPokemonByName')

const getAllPokemons = require('../handlers/getAllPokemon')
const createNewPokemon = require('../handlers/createNewPokemon')

const deleteMyPokemon = require('../handlers/deleteMyPokemon')
const updatePokemon = require('../handlers/updatePokemon')

//VALIDATION

const validation = require('../validation/validation')

//ROUTES

pokemonRouter.get('/', getAllPokemons);

pokemonRouter.get('/:id', getPokemonsById)

pokemonRouter.get('/search/:name', getPokemonByName)

pokemonRouter.post('/create', validation, createNewPokemon)

pokemonRouter.delete('/delete/:id', deleteMyPokemon)

pokemonRouter.put('/update/:id', updatePokemon)

module.exports = pokemonRouter

