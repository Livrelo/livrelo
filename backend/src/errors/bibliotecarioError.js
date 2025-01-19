import HttpUtils from "../utils/httpCodes.js";

const { HttpCode, HttpError } = HttpUtils;

class ReservaError extends HttpError{
    constructor({ httpCode, type, message = 'Ocorreu um erro ao processar a requisição' }) {
        super({
            message : message,
            httpCode : httpCode,
            type : type
        });
    }
}

class BibliotecarioNaoEncontrado extends ReservaError{
    constructor(){
        super({
            httpCode: HttpCode.NOT_FOUND,
            message: 'Nenhum bibliotecario encontrado',
            type: 'ERR_SERVICE_BIBLIOTECARIO-NAO_ENCONTRADO'
        })
    }
}

export default {BibliotecarioNaoEncontrado};