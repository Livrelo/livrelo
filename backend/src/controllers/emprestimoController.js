import EmprestimoService from "../services/emprestimoService.js";
import HttpUtils from "../utils/httpCodes.js";

const { HttpCode, HttpError } = HttpUtils;
class EmprestimoController{

    //CONSULTAS DE EMPRESTIMOS ABAIXO -> GET 

    //obter todos os emprestimos existentes
    static async findAll(req, res){
        try {
            const emprestimos = await EmprestimoService.findAll();
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
        const cpf  = req.params.cpf;
        try {
            const emprestimosCPF = await EmprestimoService.findByCPF(cpf);
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
        const { idEmprestimo } = req.params;
        try {
            const emprestimo = await EmprestimoService.findByID(idEmprestimo);
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
            const emprestimosEmAtraso  = await EmprestimoService.findEmprestimoEmAtraso();
            return res.status(200).json(emprestimosEmAtraso);
        } catch (error) {
            return res.status(400).send({
                message: 'Erro ao carregar os empréstimos em atraso',
                error: error.message
            });
        }
    }
    static async findEmprestimosEmAtrasoByCPF(req, res){
        try{

            const cpf = req.params.cpf;
            const emprestimosEmAtraso = await EmprestimoService.findEmprestimosEmAtrasoByCPF(cpf);

            return res.status(200).send(emprestimosEmAtraso)
        }catch(error){
            return res.status(400).send({
                message: error.message
            })
        }
    }

    //CRIAÇÃO/REGISTRO DE EMPRESTIMO -> POST

    static async create(req, res){
        const idLivro = req.params.idLivro;
        let idReserva = req.query.idReserva;
        
        const { cpf } = req.body;

        if (idReserva === 'null') {
            idReserva = null; 
        }
        
        try {
            const emprestimoCriado = await EmprestimoService.create(cpf, idReserva, idLivro);
            return res.status(200).json(emprestimoCriado);
        } catch (e) {
            if(e instanceof HttpError)
                return res.status(e.httpCode).send({
                    message: "Ocorreu um erro ao criar um empréstimo.",
                    error: e.message
                });
    
                return res.status(HttpCode.INTERNAL_SERVER_ERROR).json({ message: e.message });
        }
    }
    
    //ATUALIZAR EMPRESTIMO SERIA RENOVAR, INSERINDO UMA NOVA DATAFIM - PUT

    static async update(req, res){
        const { idEmprestimo } = req.params;
        const { newDataFim } = req.body;
        try {
            const emprestimoAtualizado = await EmprestimoService.update(idEmprestimo, newDataFim);
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

export default EmprestimoController;