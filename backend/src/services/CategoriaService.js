import CategoriaResponseBuilder from "../builders/CategoriaResponseBuilder.js";
import Categoria from "../models/Categoria.js";

class CategoriaService{
    static async findAll(){
        const categorias = await Categoria.findAll();

        const CategoriaBuilder = new CategoriaResponseBuilder();
        const response = CategoriaBuilder.addData(categorias).dataValues().withoutTimestamps().build();
        return response;
    }
    static async findById(id){
        const categoria = await Categoria.findByPk(id);

        if(!categoria){
            throw new Error("Categoria não encontrada.")
        }

        const CategoriaBuilder = new CategoriaResponseBuilder();
        const response = CategoriaBuilder.addData(categoria).dataValues().withoutTimestamps().build();
        return response;
        // return categoria;
    }
    static async create(categoria){
        const categoriaCriada = await Categoria.create(categoria);

        const CategoriaBuilder = new CategoriaResponseBuilder();
        const response = CategoriaBuilder.addData(categoriaCriada).dataValues().withoutTimestamps().build();
        return response;
        // return categoriaCriada;
    }
    static async update(id, categoria){
        const categoriaDB = await Categoria.findByPk(id);

        if(!categoriaDB){
            throw new Error('Categoria não encontrada.');
        }

        const categoriaAtualizada = await categoriaDB.update({...categoria});


        const CategoriaBuilder = new CategoriaResponseBuilder();
        const response = CategoriaBuilder.addData(categoriaAtualizada).dataValues().withoutTimestamps().build();
        return response;
        // return categoriaAtualizada;
    }
    static async delete(id){
        const categoriaDeletada = await Categoria.destroy({
            where: {
                idCategoria: id
            }
        })

        if(!categoriaDeletada){
        throw new Error('Categoria não encontrada.');
        }


        return categoriaDeletada;
    }
}

export default CategoriaService;