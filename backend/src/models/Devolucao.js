import { DataTypes, Model } from "sequelize";

import Emprestimo from "./Emprestimo.js";
class Devolucao extends Model {
    static init(sequelize){
        super.init(
            {
                idEmprestimo: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    field: 'idEmprestimo',
                    references:{
                        model: Emprestimo,
                        key: 'idEmprestimo'
                    }
                },
                dataDevolucao: {
                    type: DataTypes.DATE,
                    allowNull: true,
                    field: 'dataDevolucao'
                },
            },
            {
                sequelize,
                tableName: 'Devolucao'
            }
        )
    }
}

export default Devolucao;