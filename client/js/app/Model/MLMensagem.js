class MLMensagem {

    constructor(texto) {
        this._texto = texto;
    }

    //#region GET e SET

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        return this._texto = texto;
    }

    //#endregion
}