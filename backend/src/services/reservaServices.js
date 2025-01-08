import { Op } from "sequelize";
import Reserva from "../models/Reserva.js";

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

    static async create(reserva){
      return  await Reserva.create(
                reserva
            // { fields:['cpfUsuario', 'dataReserva', 'prazoReserva'] },
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
        const reservaDb = await Reserva.findByPk(id);
        await reservaDb.destroy();
        return reservaDb;
    }
}

export default ReservaServices