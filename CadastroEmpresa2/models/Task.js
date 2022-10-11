const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Task = db.define('Task', {

    ramo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    description: {
        type: DataTypes.STRING,
    },

    funcionarios: {
        type: DataTypes.INTEGER,
    },

    matriz: {
        type: DataTypes.STRING,
    },

    cnpj: {
        type: DataTypes.DOUBLE,
    },

    filiais: {
        type: DataTypes.INTEGER,
    },

    fundacao: {
        type: DataTypes.INTEGER,
    },

    done: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = Task