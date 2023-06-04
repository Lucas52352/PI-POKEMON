const createPokemon = require('../controllers/pokemon/createPoke')

const createNewPokemon = async (req, res) => {
    
    const {
        name,
        image,
        HP,
        attack,
        armor,
        speed,
        height,
        weight,
        types
    } = req.body

    try {

        const newPokemon = await createPokemon(
            name,
            image,
            HP,
            attack,
            armor,
            speed,
            height,
            weight,
            types
        );

        return res.status(200).json(newPokemon);
    } catch (error) {

        res.status(400).json(error)
    }
}

module.exports = createNewPokemon
