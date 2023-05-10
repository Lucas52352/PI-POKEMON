const updatePokemon = require('../controllers/pokemon/updatePokemon')

const update = async (req, res) => {
    let {
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
    } = req.body

    try {
        
        let pokemonUpdate = await updatePokemon(
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
        )

        return res
        .status(200)
        .json(pokemonUpdate)

    } catch (error) {
        
        return res
        .status(400)
        .json({ error: error.message})

    }
}

module.exports = update