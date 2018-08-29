class NegocioController {

    constructor() {
        let $ = document.querySelector.bind(document);
        
        // Propriedades
        this._inputdata =  $('#data');
        this._inputquantidade =  $('#quantidade');
        this._inputvalor =  $('#valor');
        
        // Controller
        this._ListNegocio = new ListMLNegocio();
        this._MLMensagem = new MLMensagem();

        // View
        this._VWMensagem = new VWMensagem($('#mensagem'));
        this._VWNegocio = new VWNegocio($('#tabela'));
        this._VWNegocio.update(this._ListNegocio);
    }

    //#region Salvar Negocio

    salvar(event) {
        event.preventDefault();

        // Negocio
        this._ListNegocio.add(this._criar());
        this._VWNegocio.update(this._ListNegocio)

        // Mensagem
        this._MLMensagem.texto = 'Salvo com sucesso !';
        this._VWMensagem.update(this._MLMensagem);
        
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