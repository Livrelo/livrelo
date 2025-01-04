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
                conta_id_conta: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    field: 'conta_id_conta',

                    references: {
                        model: Conta,
                        key: 'idConta'
                    }
                },
                created_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    field: 'created_at',
                },
                updated_at: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    field: 'updated_at',
                }
            },
            {
                sequelize,
                tableName: 'Usuario'
            }
        )
    }
}

export default Usuario;