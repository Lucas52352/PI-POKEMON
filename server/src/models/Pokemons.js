const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Pokemons', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            },
            unique: true
        },
    
        HP: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    
        armor: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    
        speed: {
            type: DataTypes.INTEGER
        },

        height: {
            type: DataTypes.STRING
        },

        weight: {
            type: DataTypes.STRING
        },
    })
}