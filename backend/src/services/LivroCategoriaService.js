import Categoria from "../models/Categoria.js";
import LivroCategoria from "../models/LivroCategoria.js";

class LivroCategoriaService {
    static async findCategoriasByLivroId(idLivro){
        const categorias = await LivroCategoria.findAll({
            where:{
                idLivro
            }
        });
        return categorias;
    }
    static async findLivrosByCategoriaId(idCategoria){
        const livros = await LivroCategoria.findAll({
            where:{
                idCategoria
            }
        });
        return livros;
    }
    static async create(idLivro, idCategoria){
        const livroCategoriaCriado = await LivroCategoria.create({
            idLivro,
            idCategoria
        });
        return livroCategoriaCriado;
    }
    static async deleteByIdLivro(idLivro){
        const livroCategoriaDeletados = await LivroCategoria.destroy({
            where:{
                idLivro
            }
        })
        return livroCategoriaDeletados;
    }
    static async deleteByIdCategoria(idCategoria){
        const livroCategoriaDeletados = await LivroCategoria.destroy({
            where:{
                idCategoria
            }
        })
        return livroCategoriaDeletados;
    }
}

export default LivroCategoriaService;