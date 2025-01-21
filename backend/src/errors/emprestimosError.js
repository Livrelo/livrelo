import HttpUtils from "../utils/httpCodes.js";

const { HttpCode, HttpError } = HttpUtils;

class EmprestimoError extends HttpError{
    constructor({ httpCode, type, message = 'Ocorreu um erro ao processar a requisição' }) {
        super({
            message : message,
            httpCode : httpCode,
            type : type
        });
    }
}

class LimiteEmprestimoError extends EmprestimoError{
    constructor(){
        super({
            httpCode: HttpCode.FORBIDDEN,
            message: 'Limite de Empréstimo excedido.',
            type: 'ERR_SERVICE_LIMITE_EMPRESTIMO_EXCEDIDO'
        })
    }
}

class EmprestimoAtrasadoError extends EmprestimoError{
    constructor(){
        super({
            httpCode: HttpCode.FORBIDDEN,
            message: 'Não é possível realizar a operação tendo um emprestimo atrasado.',
            type: 'ERR_SERVICE_EMPRESTIMO_ATRASADO'
        })
    }
}

export { LimiteEmprestimoError, EmprestimoAtrasadoError };