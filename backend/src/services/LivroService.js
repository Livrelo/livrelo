import LivroResponseBuilder from "../builders/LivroResponseBuilder.js";
import Livro from "../models/Livro.js";

class LivroService{
    static async findAll(){
        const livros = await Livro.findAll();

        const LivroBuilder = new LivroResponseBuilder()
        const respostaLivros = LivroBuilder.addData(livros).dataValues().withoutTimestamps().build();
        return respostaLivros;
    }
    static async findById(id){
        const livro = await Livro.findByPk(id);

        if(!livro){
            throw new Error("Livro não encontrado");
        }

        const LivroBuilder = new LivroResponseBuilder()
        const respostaLivro = LivroBuilder.addData(livro).dataValues().withoutTimestamps().build();
        return respostaLivro;
    }
    static async create(livro){

        //todo: tratar os campos que não podem ser nulos
        const livroCriado = await Livro.create({...livro, status: 'Disponivel'});

        const LivroBuilder = new LivroResponseBuilder();
        
        const respostaLivro = LivroBuilder.addData(livroCriado).dataValues().withoutTimestamps().build();

        return respostaLivro;
    }
    static async update(livro, id){

        //todo: tratar caso de não existir o livro
        const livroDB = await Livro.findByPk(id);

        if(!livroDB){
            throw new Error("Livro não encontrado");
        }

        const livroAtualizado = await livroDB.update({...livro});

        await livroDB.save();

        const LivroBuilder = new LivroResponseBuilder()
        const respostaLivro = LivroBuilder.addData(livroAtualizado).dataValues().withoutTimestamps().build();
        return respostaLivro;
    }
    static async delete(id){
        const livroDeletado = await Livro.destroy({
            where: {
                idLivro: id
            }
        })
        //.destroy retorna 0 ou 1 para simbolizar que foi deletado, e não o livro em si que foi deletado, por isso não há o uso do builder.
        
        return livroDeletado
    }

}

export default LivroService;