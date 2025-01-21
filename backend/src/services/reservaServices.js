import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";
import Livro from "../models/Livro.js";
import Emprestimo from "../models/Emprestimo.js";
import { ReservaJaAssociada, ReservaNaoEncontrada, ReservaIndisponivel, ReservaFinalizada, LimiteReservaError } from "../errors/reservaError.js"

class ReservaServices{
    static diasReserva = 2;

    static async findAll(){
        return await Reserva.findAll();
    }

    static async findbyId(id){
        const reserva =  await Reserva.findByPk(id);
        if(!reserva){
            throw new ReservaNaoEncontrada();
        }

        return reserva
    }

    static async create(reserva, cpf){
       
        
        const {status} = await Livro.findByPk(reserva.idLivro);
        if(status !== 'Disponivel'){
            throw new Error('Livro não disponível para reserva');
        }

        const reservasUser = await Reserva.findAll({
            where:{
                cpfUsuario: cpf,
                status: 'Ativa'
            }
        })

        if(reservasUser.length >= 3){
            throw new LimiteReservaError();
        }

        let reservaExist = await Reserva.findAll({
            where:{
                idLivro: reserva.idLivro ,
                status : 'Ativa'
            }
        })
        if(reservaExist.length > 0){
            throw new ReservaJaAssociada();
        }

        let livroEmprestado = await Emprestimo.findAll({
            where:{
                idLivro: reserva.idLivro ,
                dataFim:{[Op.gte]: reserva.dataReserva}, // Empréstimo termina depois ou no início da reserva      
                status:"Ativo"
            }
        }) 
        if(livroEmprestado.length>0){
            throw new ReservaIndisponivel();
        }


        const timestamp = Date.parse(reserva.dataReserva);
        const dataReserva = new Date(timestamp);
        const prazoReserva = new Date(timestamp + (86400000 * this.diasReserva));

        reserva.status = "Ativa";
        reserva.dataReserva = dataReserva;
        reserva.prazoReserva = prazoReserva;

        return await Reserva.create(reserva);
       
    }

    static async update(reserva, idReserva){
        const reservaDb = await Reserva.findByPk(idReserva);
        if (!reservaDb) {
            throw new ReservaNaoEncontrada();
        }
        const reservaAtt = await reservaDb.update({ ...reserva });
        await reservaDb.save();
        return reservaAtt
    }

    static async delete(id){
        const reservaDb = await Reserva.findByPk(id);
        if (!reservaDb) {
            throw new ReservaNaoEncontrada();
        }
        await reservaDb.destroy();
        return reservaDb;
    }

    static async cancel(idReserva){
        const reservaDB = await Reserva.findByPk(idReserva);
        console.log(reservaDB.status);
        if (!reservaDB) {
            throw new ReservaNaoEncontrada();
        }
        
        console.log(reservaDB.status === "Finalizada");
        if(reservaDB.status === "Finalizada"){
            throw new ReservaFinalizada();
        }
        
        reservaDB.status = "Cancelada";
        await reservaDB.save();
    }
}

export default ReservaServices