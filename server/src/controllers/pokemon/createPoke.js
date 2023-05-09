const { Pokemons, Types } = require('../../db')
const newPkImg = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodepen.io%2Fausten-wade%2Fpen%2FmGEYeE%3Fcss-preprocessor%3Dless&psig=AOvVaw14H9w6XB7ADxxIJ-T9yMhV&ust=1683675419989000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDboe_x5v4CFQAAAAAdAAAAABAD'

let newPokemon = async (
    id,
    name,
    image,
    HP,
    attack,
    defense,
    speed,
    height,
    weight,
    types
) => {
    const foundPoke = await Pokemons.findOne({ where: { name: name } })

    if(foundPoke) throw new Error('That pokemon has already been created')

    const createPokemon = await Pokemons.create({
        id,
        name,
        HP,
        attack,
        defense,
        height,
        weight,
        speed,
        types,
        image: image ? image : newPkImg
    })

    const typeDb = await Types.findAll({
        where: {
            name: types,
        }
    })

    createPokemon.addType(typeDb)
    tipo = typeDb.map((elem) => elem.name)

    return `Successfully created pokemon, with id: ${createPokemon.id} and type: ${tipo}`
}

module.exports = newPokemon