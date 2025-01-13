import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";
import Error from "../errors/reservaError.js"

const { ReservaJaAssociada, ReservaNaoEncontrada } = Error;

class ReservaServices{
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
        let reservaExist = await Reserva.findAll({
            where:{
                idLivro: reserva.idLivro ,
                status : 'Ativa'
            }
        }) 

        if(reservaExist.length>0){
            throw new ReservaJaAssociada;
        }

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