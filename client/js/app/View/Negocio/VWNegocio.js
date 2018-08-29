class VWNegocio {
    
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${model._negocios.map(n => 
                 `
                  <tr>
                      <td>${DataHelper.toTexto(n.data)}</td>
                      <td>${n.quantidade}</td>
                      <td>${n.valor}</td>
                      <td>${n.volume}</td>
                  </tr>
                `
            ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }

    update(model) {
        return this._elemento.innerHTML = this._template(model);
    }
}