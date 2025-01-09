import Categoria from "../models/Categoria.js";

class CategoriaService{
    static async findAll(){
        const categorias = await Categoria.findAll();
        return categorias;
    }
    static async findById(id){
        const categoria = await Categoria.findByPk(id);

        if(!categoria){
            throw new Error("Categoria não encontrada.")
        }

        return categoria;
    }
    static async create(categoria){
        const categoriaCriada = await Categoria.create(categoria);
        return categoriaCriada;
    }
    static async update(id, categoria){
        const categoriaDB = await Categoria.findByPk(id);

        if(!categoriaDB){
            throw new Error('Categoria não encontrada.');
        }

        const categoriaAtualizada = await categoriaDB.update({...categoria});
        return categoriaAtualizada;
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