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
class ReservaIndisponivel extends ReservaError{
    constructor(){
        super({
            httpCode: HttpCode.CONFLICT,
            message: 'Indisponivel para reserva' ,
            type: 'ERR_SERVICE_RESERVA-EMPRESTIMO_EXISTENTE'
        })
    }
}

class ReservaFinalizada extends ReservaError{
    constructor(){
        super({
            httpCode: HttpCode.FORBIDDEN,
            message: 'Reserva já foi finalizada',
            type: 'ERR_SERVICE_RESERVA_FINALIZADA'
        })
    }
}

class LimiteReservaError extends ReservaError{
    constructor(){
        super({
            httpCode: HttpCode.FORBIDDEN,
            message: 'Limite de Reservas excedido.',
            type: 'ERR_SERVICE_LIMITE_RESERVA_EXCEDIDO'
        })
    }
}

export { ReservaJaAssociada, ReservaNaoEncontrada, ReservaIndisponivel, ReservaFinalizada, LimiteReservaError };

