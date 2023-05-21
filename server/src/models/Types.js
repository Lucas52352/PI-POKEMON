const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

    sequelize.define('Types', {

        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            autoIncrement: false,
          },          

        name: {
            type: DataTypes.STRING,
        }
    })
}