import React, { Component } from "react"; 

export default class Simulador extends Component {
    render () {
        return ( 
            <form>
            <div>
                <h3>Simule aqui</h3>

                


                <div className="form-group">
                    <label>Nº de meses</label>
                    <input type="number" className="form-control" placeholder="Quantidade de meses" />
                </div>

                <div className="form-group">
                    <label>Taxa de juros mensal %</label>
                    <input type="number" className="form-control" placeholder="%" />
                </div>

                <div className="form-group"> 
                <label>Valor da prestação R$</label>
                <input type="number" className="form-control" placeholder="Valor R$:" />
                </div>

                <div className="form-group"> 
                <label>Valor financiado R$</label>
                <input type="number" className="form-control" placeholder="Valor R$:" />
                </div>

                <div className="form-group">
                    <label>Renda Mensal R$</label>
                    <input type="number" className="form-control" placeholder="Valor R$:" />
                </div>

                </div>
                <div className="form-group">
                    <label> Data da proxima parcela</label>
                    <input type="date" className="form-control" placeholder="Data da parcela" />
                </div>
            
            <button type="submit" className="btn btn-primary btn-block"> Simular</button>
                <p className="forgot-password text-right">
                    Já registrado? <a href="#">clique aqui.</a>
                </p>
        </form>
        
        );
} 
}
