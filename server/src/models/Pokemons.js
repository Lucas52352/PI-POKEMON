const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Pokemons', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },

        attack: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
    
        HP: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    
        armor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    
        speed: {
            type: DataTypes.INTEGER
        },

        height: {
            type: DataTypes.INTEGER
        },

        weight: {
            type: DataTypes.INTEGER
        },
    })
}