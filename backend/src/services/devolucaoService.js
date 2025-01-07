import Devolucao from "../models/Devolucao.js";

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
        if(!devolucao){
                throw new Error(`Não há devolução para esse empréstimo`); 
        }
        return devolucao;
    }

    //REGISTRO DE UMA DEVOLUÇÃO -> POST
    static async create (idEmprestimo, dataDevolucao){
        const novaDevolucao = await Devolucao.create({
            idEmprestimo: idEmprestimo,
            dataDevolucao: dataDevolucao,
        });
        return novaDevolucao;
    }

    //NÃO É NECESSÁRIO DELETAR NEM ATUALIZAR DEVOLUÇÃO

}
export default DevolucaoService;

