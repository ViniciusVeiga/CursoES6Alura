class NegocioController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputdata =  $('#data');
        this._inputquantidade =  $('#quantidade');
        this._inputvalor =  $('#valor');
        this._negocios = new ListMLNegocio();
    }

    //#region Salvar Formulario

    salvar(e) {
        e.preventDefault();

        let negocio = new MLNegocio (
            DataHelper.converterTextoData(this._inputdata.value),
            this._inputquantidade.value,
            this._inputvalor.value
        );

        this._negocios.add(negocio);
        this._limpar();

        console.log(this._negocios.negocio)
    }

    //#endregion

    //#region Limpar Formulario

    _limpar() {
        this._inputdata.value =  '';
        this._inputquantidade.value =  1;
        this._inputvalor.value =  0;
    }

    //#endregion
}