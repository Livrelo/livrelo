import UsuarioService from "../services/UsuarioService.js";

class UsuarioController{

    static async findByIdConta(req, res){
        try{
            const idConta = req.params.idConta;
            const usuario = await UsuarioService.findByIdConta(idConta);

            return res.status(200).send({
                usuario: usuario,
            });
        }catch(error){
            return res.status(200).send({
                message: 'Ocorreu um erro encontrando esse livro em específico!',
                error: error.message
            });
        }
    }

    static async create(req, res){
        try{
            /*
                req.body => conta
                {
                cpf: xxxxxxxxxxx
                conta_id_conta: xxxx
                created_at:
                updated_at:
                }
            */

            const usuario = req.body;

            const usuarioCriado = await UsuarioService.create({...usuario});
            return res.status(201).send({
                message: 'Usuario criado com sucesso!',
                conta: usuarioCriado
            });


        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao criar o usuario!',
                error: error.message
            });
        }
    }

    static async update(req, res){

        try{
            const cpf = req.params.cpf;
            console.log(cpf);
            const usuario = req.body;
            const usuarioAtualizado = await UsuarioService.update(usuario, cpf);

            return res.status(200).send({
                message: 'Usuario atualizado com sucesso!',
                usuario: usuarioAtualizado
            });
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao atualizar o usuario!',
                usuario: usuarioAtualizado
            });
        }
    }

    static async delete(req, res){
        try{
            const cpf = req.params.cpf;

            const usuarioDeletado = await UsuarioService.delete(cpf);
            return res.status(200).send({
                message: 'Usuario deletado com sucesso!',
                usuario: usuarioDeletado
            })
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao deletar o usuario!',
                error: error.message
            });
        }
    }

}

export default UsuarioController;