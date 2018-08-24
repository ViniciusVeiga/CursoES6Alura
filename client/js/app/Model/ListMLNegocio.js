class ListMLNegocio {
    constructor() {
        this._negocios = []
    } 

    //#region Metodos

    add(negocio) {
        this._negocios.push(negocio);
    }

    get negocio() {
        return this._negocios;
    }

    //#endregion
}