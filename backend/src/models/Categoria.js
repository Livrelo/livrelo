import { DataTypes, Model } from "sequelize";

class Categoria extends Model {
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
                    allowNull: false
                },
            },
            {
                sequelize,
                tableName: 'Categoria'
            }
        )
    }
}

export default Categoria;