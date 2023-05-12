const updatePokemon = require('../controllers/pokemon/updatePokemon')

const update = async (req, res) => {
    const { id } = req.params; // Obtener el ID del Pokémon desde los parámetros de la URL

    let {
        name,
        image,
        HP,
        attack,
        defense,
        speed,
        height,
        weight,
        types
    } = req.body;

    try {
        let pokemonUpdate = await updatePokemon(
            id, // Agregar el ID del Pokémon como primer argumento
            name,
            image,
            HP,
            attack,
            defense,
            speed,
            height,
            weight,
            types
        );

        return res
        .status(200)
        .json(pokemonUpdate);
    } catch (error) {
        return res
        .status(400)
        .json({ error: error.message });
    }
}

module.exports = update;
