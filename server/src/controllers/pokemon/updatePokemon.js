const { Pokemons, Types } = require('../../db')
const newPkImg = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodepen.io%2Fausten-wade%2Fpen%2FmGEYeE%3Fcss-preprocessor%3Dless&psig=AOvVaw14H9w6XB7ADxxIJ-T9yMhV&ust=1683675419989000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJDboe_x5v4CFQAAAAAdAAAAABAD'

let updatePokemon = async (
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

    let pokemonToUpdate = await Pokemons.findOne({ where: { id: id } })
    let updates = {}

    if (name !== undefined) updates.name = name

    if (image !== undefined) updates.image = image

    if (HP !== undefined) updates.HP = HP

    if (attack !== undefined) updates.attack = attack

    if (defense !== undefined) updates.defense = defense

    if (speed !== undefined) updates.speed = speed

    if (height !== undefined) updates.height = height

    if (weight !== undefined) updates.weight = weight

    await pokemonToUpdate.update({
        name: name,
        image: image ? image : newPkImg,
        HP: HP,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight
    })

    if(types){ 

        await pokemonToUpdate.setTypes([])
        let postTypes = await Types.findAll({ where: { name: name } })
        await pokemonToUpdate.addTypes(postTypes)
    }

    return 'Pokemon updated successfully'
}

module.exports = updatePokemon