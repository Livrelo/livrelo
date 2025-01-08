import CategoriaService from "../services/CategoriaService";

class CategoriaController{
    static async findAll(req, res){
        try{
            const categorias = await CategoriaService.findAll();
            return res.status(200).send(categorias);
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro buscando as categorias',
                error: error.message
            });
        }
    }
    static async findById(req, res){
        try{
            
        }catch(error){
            
        }
    }
    static async create(req, res){
        try{

        }catch(error){
            
        }
    }
    static async update(req, res){
        try{

        }catch(error){
            
        }
    }
    static async delete(req, res){
        try{

        }catch(error){
            
        }
    }
}

export default CategoriaController;