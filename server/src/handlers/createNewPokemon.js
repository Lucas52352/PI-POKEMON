const createPokemon = require('../controllers/pokemon/createPoke')

const createNewPokemon = async (req, res) => {
    const {
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
        const newPokemon = await createPokemon(
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
        .json(newPokemon)

    } catch (error) {

        return res
        .status(400)
        .json({ error: error.message })
    }
}

module.exports = createNewPokemon