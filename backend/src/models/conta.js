import { DataTypes, Model } from "sequelize";

class Conta extends Model {
    static init(sequelize){
        super.init(
            {
                idConta: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'idConta'
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
                sequelize,
                tableName: 'Conta'
            }
        )
    }
}

export default Conta;
