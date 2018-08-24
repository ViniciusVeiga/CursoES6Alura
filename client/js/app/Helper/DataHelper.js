class DataHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }

    //#region Metodos

    static converterTextoData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error('Receber no formato AAAA-MM-DD');
        }

        return new Date(...texto.split('-').map((item, index) => {
            if(index == 2) return item - 1;
            return item;
        }));
    }

    static converterDataTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    //#endregion
}