import { DataTypes, Model } from "sequelize";

class Livro extends Model {
    static init(sequelize){
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                nome: {
                   type: DataTypes.STRING,
                   allowNull: false,
                },
                descricao: {
                    type: DataTypes.STRING
                },
                nomeAutor: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                ano: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                nomeEditora: {
                    type: DataTypes.STRING
                },
                status: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: 'Disponivel'
                }
            },
            {
                sequelize,
                tableName: 'Livro'
            }
        )
    }
}

export default Livro;