class NegocioController {

    constructor() {
        let $ = document.querySelector.bind(document);
        
        // Propriedades
        this._inputdata =  $('#data');
        this._inputquantidade =  $('#quantidade');
        this._inputvalor =  $('#valor');
        this._ListNegocio = new ListMLNegocio();
        
        // View
        this._VWNegocio = new VWNegocio($('#VWNegocio'));
        this._VWNegocio.update(this._ListNegocio);
    }

    //#region Salvar Negocio

    salvar(event) {
        event.preventDefault();

        this._ListNegocio.add(this._criar());
        this._VWNegocio.update(this._ListNegocio)

        console.log(this.ListMLNegocio);
        this._limpar();
    }

    //#endregion

    //#region Criar Negocio

    _criar() {
        return new MLNegocio (
            DataHelper.toData(this._inputdata.value),
            this._inputquantidade.value,
            this._inputvalor.value
        );
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