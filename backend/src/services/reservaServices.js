import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";
import Livro from "../models/Livro.js";
import Emprestimo from "../models/Emprestimo.js";
import { ReservaJaAssociada, ReservaNaoEncontrada, ReservaIndisponivel } from "../errors/reservaError.js"

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

    static async create(reserva){
       
        
        const {status} = await Livro.findByPk(reserva.idLivro);
        if(status !== 'Disponivel'){
            throw new Error('Livro não disponível para reserva');
        }

        let reservaExist = await Reserva.findAll({
            where:{
                idLivro: reserva.idLivro ,
                status : 'Ativa'
            }
        }) 

        let livroEmprestado = await Emprestimo.findAll({
            where:{
                idLivro: reserva.idLivro ,
                dataFim:{[Op.gte]: reserva.dataReserva}, // Empréstimo termina depois ou no início da reserva      
            }
        }) 

        if(reservaExist.length>0){
            throw new ReservaJaAssociada();
        }else if(livroEmprestado.length>0){
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
}

export default ReservaServices