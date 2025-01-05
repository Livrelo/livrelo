import emprestimoService from "../services/emprestimoService.js";

class emprestimoController{

    //CONSULTAS DE EMPRESTIMOS ABAIXO -> GET 

    //obter todos os emprestimos existentes
    static async findAll(req, res){
        try {
            const emprestimos = await emprestimoService.findAll();
            return res.status(200).json(emprestimos);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar todos os empréstimos',
                error: error.message
            });
        }
    }

    //obter emprestimos pelo CPF do usuario
    static async findByCPF(req, res){
        const CPF = req.params.CPF;
        try {
            const emprestimosCPF = await emprestimoService.findByCPF(CPF);
            return res.status(200).json(emprestimosCPF);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar os empréstimos',
                error: error.message
            });
        }
    }

    //obter emprestimo pelo seu proprio id
    static async findByID(req, res){
        const { idEmprestimo } = req.params.idEmprestimo;
        try {
            const emprestimo = await emprestimoService.findByID(idEmprestimo);
            return res.status(200).json(emprestimo);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar o empréstimo',
                error: error.message
            });
        }
    }

    //obter emprestimos em atraso-> seria pela dataFim
    static async findEmprestimosEmAtraso(req, res){
        
        try {
            const emprestimosEmAtraso = await emprestimoService.findEmprestimosEmAtraso();
            return res.status(200).json(emprestimosEmAtraso);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar os empréstimos em atraso',
                error: error.message
            });
        }
    }

    //CRIAÇÃO/REGISTRO DE EMPRESTIMO -> POST

    static async create(req, res){
        const { dataInicio, dataFim } = req.body;
        const CPF = req.params.CPF;
        const idReserva = req.params.idReserva;
        try {
            const emprestimoCriado = await emprestimoService.create(dataInicio, dataFim, CPF, idReserva);
            return res.status(200).json(emprestimoCriado);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao criar o empréstimo',
                error: error.message
            });
        }
    }
    
    //ATUALIZAR EMPRESTIMO SERIA RENOVAR, INSERINDO UMA NOVA DATAFIM - PUT

    static async update(req, res){
        const { newDataFim } = req.body;
        try {
            const emprestimoAtualizado = await emprestimoService.update(newDataFim);
            return res.status(200).json(emprestimoAtualizado);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao atualizar o empréstimo',
                error: error.message
            });
        }
    }
    //DELETAR EMPRESTIMO NÃO É NECESSÁRIO


}