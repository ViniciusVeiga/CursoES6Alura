class ListMLNegocio {
    constructor() {
        this._negocios = []
    } 

    //#region Metodos

    add(negocio) {
        this._negocios.push(negocio);
    }

    get negocios() {
        return [].concat(this._negocios);
    }

    //#endregion
}