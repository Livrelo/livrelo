import { DataTypes, Model } from 'sequelize';

import Livro from './Livro.js';
import Usuario from './Usuario.js';

class Reserva extends Model{
   static init(sequelize){
        super.init(
                {
                    idReserva:{
                        type:DataTypes.INTEGER,
                        autoIncrement: true,
                        primaryKey:true,
                        field: 'idReserva'
                    },
                    idLivro:{
                        type:DataTypes.INTEGER,
                        references:{
                            model:Livro,
                            key:'idLivro'
                        },
                        allowNull: false,
                        field:'idLivro'
                    },
                    cpfUsuario:{
                        type:DataTypes.STRING,
                        references:{
                            model:Usuario,
                            key:'cpf'
                        },
                        allowNull:false,
                        field: 'cpfUsuario'
                    },
                    dataReserva:{
                        type: DataTypes.DATE,
                        allowNull: false,
                        field: 'dataReserva'
                    },
                    prazoReserva:{
                        type: DataTypes.DATE,
                        allowNull: false,
                        field: 'prazoReserva'
                    },
                    status:{
                        type: DataTypes.STRING,
                        allowNull:true,
                    }
                },
                {
                    sequelize,
                    tableName: 'Reserva'
                }
        )
    } 
}

export default Reserva;