import Usuario from "../models/Usuario.js";

class UsuarioService{

    static async findByIdConta(idConta){
        
        const usuario = await Usuario.findAll({
            where: {
                idConta: idConta,
            },
        });

        return usuario;
    }

    static async create(usuario){

        const usuarioCriado = await Usuario.create(usuario);
        return usuarioCriado;
    }

    static async update(usuario, cpf){
        
        const usuarioBD = await Usuario.findByPk(cpf);

        if(!usuarioBD){
            throw new Error("Usuario não encontrado");
        }

        const usuarioAtualizado = await Usuario.update({...usuario});
        
        await usuarioBD.save();

        return usuarioAtualizado;
    }

    static async delete(cpf){
        
        const usuarioDeletado = await Usuario.destroy({
            where:{
                cpf: cpf
            }
        })
        return usuarioDeletado;
    }



}

export default UsuarioService;