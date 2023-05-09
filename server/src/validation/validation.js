const validate = (req, res, next) => {
    const { name, health, attack, defense, speed, height, weight, types } = req.body

    if(
        !name ||
        !health ||
        !attack ||
        !defense ||
        !speed ||
        !height ||
        !weight ||
        !types
    ) {
        return res.status(400).json({ error: 'Incomplete data'})
    };
    next();
};

module.exports = validate