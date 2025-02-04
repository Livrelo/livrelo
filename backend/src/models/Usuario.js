import { DataTypes, Model } from "sequelize";

import Conta from "./Conta.js";

class Usuario extends Model {
    static init(sequelize){
        super.init(
            {
                cpf: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    primaryKey: true,
                    field: 'cpf',
                },
                idConta: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    field: 'idConta',

                    references: {
                        model: Conta,
                        key: 'idConta'
                    }
                },
            },
            {
                sequelize,
                tableName: 'Usuario'
            }
        )
    }
}

export default Usuario;
