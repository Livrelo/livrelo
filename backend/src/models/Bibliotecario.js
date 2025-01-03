const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(databaseConfig);

const{Conta} = require("./conta");

class Bibliotecario extends Model{
    static init(sequelize){
        super.init(
            {
                idConta:{
                    type:DataTypes.INTEGER,
                    references:{
                        model: Conta,
                        key: 'idConta',
                    },
                    primaryKey:true,
                    allowNull:false,
                    field: 'contaId'
                }
            },
            {
                sequelize,
                tableName: 'Bibliotecario'
            }
        )
    }
}

var Bibliotecario = sequelize.model("Binliotecario", Bibliotecario);
module.exports = Bibliotecario;