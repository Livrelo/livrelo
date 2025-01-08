import Categoria from "../models/Categoria.js";

class CategoriaService{
    static async findAll(){
        const categorias = await Categoria.findAll();
        return categorias;
    }
    static async findById(){

    }
    static async create(){

    }
    static async update(){

    }
    static async delete(){

    }
}

export default CategoriaService;