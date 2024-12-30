const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(databaseConfig);
const {Livro}  = require("./Livro");
const{Usuario} = require("./usuario");


class Reserva extends Model{
   static init(sequelize){
        super.init(
                {
                    idReserva:{
                        type:DataTypes.INTEGER,
                        allowNull: false,
                        primaryKey:true,
                        field: 'reservaId'
                    },
                    idLivro:{
                        type:DataTypes.INTEGER,
                        references:{
                            model:Livro,
                            key:'id'
                        },
                        allowNull: false,
                        field:'livroId'
                    },
                    cpfUsuario:{
                    type:DataTypes.STRING,
                    references:{
                        model:Usuario,
                        key:'id'
                    },
                    allowNull:false,
                    field: 'usuarioCpf'
                    },
                    dataReserva:{
                        tyep: DataTypes.DATE,
                        allowNull: false,
                        field: 'reservaData'
                    },
                    prazoReserva:{
                        tyep: DataTypes.DATE,
                        allowNull: false,
                        field: 'reservaPrazo'
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

var Reserva = sequelize.model("Reserva", Reserva);
module.exports = Reserva;