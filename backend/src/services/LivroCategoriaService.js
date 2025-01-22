import LivroCategoriaResponseBuilder from "../builders/LivroCategoriaBuilder.js";
import Categoria from "../models/Categoria.js";
import LivroCategoria from "../models/LivroCategoria.js";

class LivroCategoriaService {
    static async findCategoriasByLivroId(idLivro){
        const categorias = await LivroCategoria.findAll({
            where:{
                idLivro
            }
        });

        const builder = new LivroCategoriaResponseBuilder();
        const livrocategorias = builder
            .addData(categorias)
            .dataValues()
            .withoutTimestamps()
            .build()
        return livrocategorias;
    }
    static async findLivrosByCategoriaId(idCategoria){
        const livros = await LivroCategoria.findAll({
            where:{
                idCategoria
            }
        });
        const builder = new LivroCategoriaResponseBuilder();

        const livrocategorias = builder
            .addData(livros)
            .dataValues()
            .withoutTimestamps()
            .build()
        return livrocategorias;
    }
    static async create(idLivro, idCategoria){
        const livroCategoriaCriado = await LivroCategoria.create({
            idLivro,
            idCategoria
        });

        const builder = new LivroCategoriaResponseBuilder();
        const livrocategorias = builder
            .addData(livroCategoriaCriado)
            .dataValues()
            .withoutTimestamps()
            .build()
        return livrocategorias;
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