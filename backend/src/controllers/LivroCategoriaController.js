import LivroService from "../services/LivroService.js";
import LivroCategoriaService from "../services/LivroCategoriaService.js";

class LivroCategoriaController {
    static async findAll(req, res){
        try{
            const livros = await LivroService.findAll();

            const livrosCategorias = [];
            for(const livro of livros){
                const categorias = await LivroCategoriaService.findCategoriasByLivroId(livro.idLivro);
                livrosCategorias.push({
                    livro: livro.dataValues,
                    categorias
                });
            }
            return res.status(200).send({
                livrosCategorias
            })

        }catch(error){
            return res.status(400).send({
                message: error.message,
            })
        }
    }
    static async findCategoriasByLivroId(req, res){
        try{
            const idLivro = req.params.id;
            const categorias = await LivroCategoriaService.findCategoriasByLivroId(idLivro);
            return res.status(200).send({
                categorias: categorias
            });
        }catch(error){
            return res.status(400).send({
                message: error.message
            });
        }
    }
    static async findLivrosByCategoriaId(req, res){
        try{
            const idCategoria = req.params.id;
            const livros = await LivroCategoriaService.findLivrosByCategoriaId(idCategoria);
            return res.status(200).send({
                livros
            });
        }catch(error){
            return res.status(400).send({
                message: error.message
            });
        }
    }
    static async create(req, res){
        try{
            const { idLivro, idCategoria } = req.body;

            const livroCategoriaCriado = await LivroCategoriaService.create(
                idLivro,
                idCategoria
            );
            return res.status(200).send({
                message: 'Categoria adicionada com sucesso ao Livro',
                livroCategoria: livroCategoriaCriado
            })
        }catch(error){
            return res.status(400).send({
                message: error.message
            })
        }
    }
    static async deleteByLivroId(req, res){
        try{
            const idLivro = req.params.id;
            const livroCategoriasDeletados = await LivroCategoriaService.deleteByIdLivro(idLivro);

            return res.status(200).send({
                message: 'LivrosCategorias deletados com sucesso.',
                LivrosCategorias: livroCategoriasDeletados
            });
        }catch(error){
            return res.status(400).send({
                message: error.message
            });
        }
    }
    static async deleteByIdCategoria(req, res){
        try{
            const idCategoria = req.params.id;
            const livroCategoriasDeletados = await LivroCategoriaService.deleteByIdCategoria(idCategoria);

            return res.status(200).send({
                message: 'LivrosCategorias deletados com sucesso.',
                LivrosCategorias: livroCategoriasDeletados
            });
        }catch(error){
            return res.status(400).send({
                message: error.message
            });
        }
    }
}

export default LivroCategoriaController;