import { Model, DataTypes } from 'sequelize';

import Livro from "./Livro.js";
import Usuario from "./usuario.js";
//import Reserva from "./Reserva.js";

class Emprestimo extends Model{
    static init(sequelize){
        super.init(
            {
                idEmprestimo: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'idEmprestimo'
                },
                idReserva:{
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    field: 'idReserva',
                    references: {
                        model: Reserva,
                        key: idReserva
                    }
                },
                idLivro: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    field: 'idLivro',
                    references: {
                        model: Livro,
                        key: idLivro
                    }
                },
                cpf: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    field: 'cpf',
                    references: {
                        model: Usuario,
                        key: cpf
                    }
                },
                dataInicio: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    field: 'dataInicio',
                },
                dataFim: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    field: 'dataFim',
                },
                
            },
            {
                sequelize,
                tableName: 'Emprestimo'
            }
        )
    }
}

export default Emprestimo;
