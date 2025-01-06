import LivroService from "../services/LivroService.js";

class LivroController {
    static async findAll(req, res){
        try{
            const livros = await LivroService.findAll();
            return res.status(200).send({livros: livros});
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro solicitando todos os livros.',
                error: error.message
            });
            
        }
    }
    static async findById(req, res){
        try{
            const id = req.params.id;
            const livro = await LivroService.findById(id);

            return res.status(200).send({livro: livro});
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro encontrando esse livro em específico.',
                error: error.message
            });
        }
    }
    static async create(req, res){
        try{
            //req.body => livro
            //{
            //  nome: 'teste',
            //  descricao: '',
            //  nomeAutor: '',
            //  ano: 2025,
            //  nomeEditora: 'mais',
            //  status: 'Disponível'
            //}
            const livro = req.body;
            
            const livroCriado = await LivroService.create({...livro});
            return res.status(201).send({
                message: 'Livro Criado com sucesso',
                livro: livroCriado
            });
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro criando o livro.',
                error: error.message
            });
        }
    }
    static async update(req, res){
        try{
            const id = req.params.id;
            const livro = req.body;
            const livroAtualizado = await LivroService.update(livro, id);

            return res.status(200).send({
                message: 'Livro atualizado com sucesso',
                livro: livroAtualizado
            });
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro atualizando o livro.',
                error: error.message
            });
        }
    }
    static async delete(req, res){
        try{
            const id = req.params.id;

            const livroDeletado = await LivroService.delete(id);
            return res.status(200).send({
                message: 'Livro deletado com sucesso.',
                livro: livroDeletado
            });
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro deletando um livro',
                error: error.message
            });
        }
    }
}

export default LivroController;