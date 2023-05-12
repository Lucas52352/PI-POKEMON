const validate = (req, res, next) => {
    const { name, HP, attack, armor, types = []} = req.body

    if(
        !name ||
        !HP ||
        !attack ||
        !armor ||
        !types
    ) {
        return res.status(400).json({ error: 'Incomplete data'})
    };
    next();
};

module.exports = validate