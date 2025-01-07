import devolucaoService from "../services/EmprestimoService.js";

class devolucaoController{
    //CONSULTAS DE DEVOLUÇÕES ABAIXO -> GET

    //obter todas as devoluções
    static async findAll(req, res){
        try {
            const devolucoes = await devolucaoService.findAll();
            return res.status(200).json(devolucoes);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar todas as devoluções de todos os empréstimos',
                error: error.message
            });
        }
    }

    //obter devolução de um empréstimo -> deve ser usada por emprestimoService para ver se o emprestimo está atrasado, ou seja, se tem data de devolução
    static async findByID(req, res){
        const idEmprestimo = req.params.idEmprestimo;
        try {
            const devolucao = await devolucaoService.findByID(idEmprestimo);
            return res.status(200).json(devolucao);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar a devolução',
                error: error.message
            });
        }
    }

    //REGISTRO DE UMA DEVOLUÇÃO -> POST
    static async create (req, res){
        const { dataDevolucao } = req.body;
        const idEmprestimo = req.params.idEmprestimo;
        try {
            const novaDevolucao = await devolucaoService.create(idEmprestimo, dataDevolucao);
            return res.status(200).json(novaDevolucao);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao criar uma devolução',
                error: error.message
            });
        }
    }

    //NÃO É NECESSÁRIO DELETAR NEM ATUALIZAR DEVOLUÇÃO

   
}
export default devolucaoController;