import { DataTypes, Model } from "sequelize";

class Livro extends Model {
    static init(sequelize){
        super.init(
            {
                idLivro: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'idLivro'
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
                    allowNull: false,
                    field: 'nomeAutor'
                },
                ano: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                nomeEditora: {
                    type: DataTypes.STRING,
                    field: 'nomeEditora'
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