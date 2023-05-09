const { Pokemons } = require('../../db')

let deletePokemon = async (id) => {
    let toBeDeleted = await Pokemons.findOne({
        where: { id: id }
    })

    if(!toBeDeleted) throw new Error('Pokemon not found')

    await toBeDeleted.destroy()
    return `Pokemon ${toBeDeleted.name} successfully removed`;
}

module.exports = deletePokemon