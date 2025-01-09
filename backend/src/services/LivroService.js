import Livro from "../models/Livro.js";

class LivroService{
    static async findAll(){
        const livros = await Livro.findAll();
        return livros;
    }
    static async findById(id){
        const livro = await Livro.findByPk(id);

        if(!livro){
            throw new Error("Livro não encontrado");
        }

        return livro;
    }
    static async create(livro){

        //todo: tratar os campos que não podem ser nulos

        const livroCriado = await Livro.create(livro);
        return livroCriado;
    }
    static async update(livro, id){

        //todo: tratar caso de não existir o livro
        const livroDB = await Livro.findByPk(id);

        if(!livroDB){
            throw new Error("Livro não encontrado");
        }

        const livroAtualizado = await livroDB.update({...livro});

        await livroDB.save();

        return livroAtualizado;
    }
    static async delete(id){
        const livroDeletado = await Livro.destroy({
            where: {
                idLivro: id
            }
        })
        return livroDeletado;
    }

}

export default LivroService;