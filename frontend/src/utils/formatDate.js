export default function formatarData(data) {
    // Verifica se a entrada é um objeto Date válido
    if (!(data instanceof Date) || isNaN(data)) {
        throw new TypeError("A entrada deve ser um objeto Date válido.");
    }

    // Extrai o dia, mês e ano
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do 0
    const ano = String(data.getFullYear()).slice(-2); // Pega os últimos dois dígitos do ano

    // Retorna a data formatada
    return `${dia}/${mes}/${ano}`;
}