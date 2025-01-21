import Devolucao from "../models/Devolucao.js";
import Emprestimo from "../models/Emprestimo.js";
import Livro from "../models/Livro.js";

class DevolucaoService{
    //CONSULTAS DE DEVOLUÇÕES ABAIXO -> GET

    //obter todas as devoluções
    static async findAll(){
        const devolucoes = await Devolucao.findAll();
        return devolucoes;
    }

    //obter devolução de um empréstimo -> deve ser usada por emprestimoService para ver se o emprestimo está atrasado, ou seja, se tem data de devolução
    static async findByID(idEmprestimo){
        const devolucao = await Devolucao.findByPk(idEmprestimo);
        // if(!devolucao){
        //         throw new Error(`Não há devolução para esse empréstimo`); 
        // }
        return devolucao || null;
    }

    //REGISTRO DE UMA DEVOLUÇÃO -> POST
    static async create (idEmprestimo, dataDevolucao){

        const emprestimo = await Emprestimo.findByPk(idEmprestimo);
        emprestimo.status = "Finalizado";
        
        //mudar status do livro
        const livro = await Livro.findByPk(emprestimo.idLivro);
        livro.status = "Disponivel";
        await livro.save();

        const novaDevolucao = await Devolucao.create({
            idEmprestimo: idEmprestimo,
            dataDevolucao: dataDevolucao,
        });

        //salvar depois de ser criado a Devolucao com sucesso.
        await emprestimo.save();

        return novaDevolucao;
    }

    //NÃO É NECESSÁRIO DELETAR NEM ATUALIZAR DEVOLUÇÃO

}
export default DevolucaoService;

