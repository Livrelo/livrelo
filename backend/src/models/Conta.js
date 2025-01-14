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
                    field: 'nome',
                },
                email: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    field: 'email',
                },
                senha: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    field: 'senha',
                },
            },
            {
                sequelize,
                tableName: 'Conta'
            }
        )
    }
}

export default Conta;
