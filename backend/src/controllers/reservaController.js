import ReservaServices from "../services/reservaServices.js";

class ReservaController{
    
    //obter reservas
    static async findAll(req, res){
        try{
            const reservas = await ReservaServices.findAll();
            return res.status(200).json(reservas);
        } catch (e){
            return res.status(400).send({
                message: "Erro ao carregar as reservas",
                error: e.message
            });
        }
    }

    static async findById(req, res){
        
        try{
            const reservaId = req.params.id;
            const reserva = await ReservaServices.findbyId(reservaId);
            return res.status(200).json(reserva);
        } catch (e){
            return res.status(400).send({
                message: 'Erro ao carregar a reserva.',
                error: e.message

            })
        }
    }

    static async create(req, res){
        try{
            const reserva = req.body;
            const response = await ReservaServices.create({...reserva});
            return res.status(200).send({
                message: 'Reserva criada com sucesso.',
                reserva: response
            });
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao criar uma reserva.',
                error: error.message
            });
        }
    }

    static async update(req, res){
        try{
            const id = req.params.id;
            const reserva = req.body;
            const reservaAtt = await ReservaServices.update(reserva,id)
            
            return res.status(200).send({
                message: 'Reserva atualizada com sucesso.',
                reserva: reservaAtt
            })

        } catch (e){
            return res.status(400).send({
                message: 'Ocorreu um erro ao atualizar a reserva.',
                error: e.message
            });
        }
    }

    static async delete(req, res){
        try{
            const id = req.params.id;

            const reserva = await ReservaServices.delete(id);
            return res.status(200).send({
                message: 'Reserva deletada com sucesso.',
                reserva: reserva
            })
        } catch (e){
            return res.status(400).send({
                message: 'Ocorreu um erro ao deletar a reserva.',
                error: error.message
            });
        }
    }
}

export default ReservaController;