import { Op } from "sequelize";
import Reserva from "../models/Reserva";

class ReservaServices{
    static async findAll(){
        return await Reserva.findAll();
    }

    static async findbyId(id){
        const reserva =  await Reserva.findByPk(id);

        if(!reserva){
            throw new Error("Reserva não encontrada");
        }

        return reserva
    }

    static async create(idLivro, cpf, data, prazo, status){
      return  await Reserva.create(
            {   
                idLivro: idLivro,
                cpfUsuario: cpf,
                dataReserva: data,
                prazoReserva: prazo,
                status: status,
            },
            { fields:['cpfUsuario', 'dataReserva', 'prazoReserva'] },
        );
    }

    static async update(reserva, idReserva){
        const reservaDb = await Reserva.findByPk(idReserva);
        if (!reservaDb) {
            throw new Error("Reserva não encontrada");
        }
        const reservaAtt = await reservaDb.update({ ...reserva });
        await reservaDb.save();
        return reservaAtt
    }

    static async delete(id){
        return await Reserva.destroy({
            where:{
                idReserva: id,
            }
        })
    }
}

export default ReservaServices