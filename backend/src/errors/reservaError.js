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

class ReservaNaoEncontrada extends ReservaError{
    constructor(){
        super({
            httpCode: HttpCode.NOT_FOUND,
            message: 'Nenhuma reserva encontrada',
            type: 'ERR_SERVICE_RESERVA-NAO_ENCONTRADA'
        })
    }
}

class ReservaJaAssociada extends ReservaError{
    constructor(){
        super({
            httpCode: HttpCode.CONFLICT,
            message: 'Já há uma reserva ativa para este livro',
            type: 'ERR_SERVICE_RESERVA-JA_EXISTENTE'
        })
    }
}

export default {ReservaJaAssociada, ReservaNaoEncontrada};

