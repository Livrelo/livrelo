const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(databaseConfig);

const Usuario = sequelize.define(
    'Usuario',
    {
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        conta_idConta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
            references: {
                model: Conta,
                key: idConta
            }
        },
    },
    {
        
    },
);