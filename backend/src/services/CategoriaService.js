import Categoria from "../models/Categoria.js";

class CategoriaService{
    static async findAll(){
        const categorias = await Categoria.findAll();
        return categorias;
    }
    static async findById(id){
        const categoria = await Categoria.findByPk(id);
        return categoria;
    }
    static async create(){

    }
    static async update(){

    }
    static async delete(){

    }
}

export default CategoriaService;