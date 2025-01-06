// import sequelize from "../database/DatabaseSingleton";
import Bibliotecario from "../models/Bibliotecario";

class BibliotecarioServices{

    //obter todos os bibliotecários
    static async findAll(){
        const bibliotecarios = await Bibliotecario.findAll();
        return bibliotecarios;
    }

    //obter bibliotecario por id
    static async findById(id){
        const bibliotecario = await Bibliotecario.findByPk(id);
        return bibliotecario;
    }
    
    //criar bibliotecario
    static async create(){
        return await Bibliotecario.create()
    }

}

export default BibliotecarioServices;