
import { DataTypes, Model } from 'sequelize';

import Conta from './Conta.js';

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
                    field: 'idConta'
                }
            },
            {
                sequelize,
                tableName: 'Bibliotecario'
            }
        )
    }
}


export default Bibliotecario;

