const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(databaseConfig);

const Conta = sequelize.define(
    'Conta',
    {
        idConta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        
    },
    {

    },
);
