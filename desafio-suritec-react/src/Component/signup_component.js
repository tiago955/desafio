import React, { Component } from "react"; 

export default class Signup extends Component {
    render () {
        return ( 
            <form>
            <div>
                <h3>Cadastre-se</h3>

                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control" placeholder="Primeiro nome" />
                </div>

                <div className="form-group">
                    <label>Sobrenome</label>
                    <input type="text" className="form-control" placeholder="Sobrenome" />
                </div>

                <div className="form-group"> 
                <label>E-mail</label>
                <input type="email" className="form-control" placeholder="E-mail" />
                </div>

                <div className="form-group"> 
                <label>Data de Nascimento</label>
                <input type="date" className="form-control" placeholder="Data de Nascimento" />
                </div>

                <div className="form-group">
                    <label>Renda Mensal R$</label>
                    <input type="number" className="form-control" placeholder="Renda Mensal" />
                </div>

                </div>
                <div className="form-group">
                    <label> Senha</label>
                    <input type="password" className="form-control" placeholder="Senha" />
                </div>
            
            <button type="submit" className="btn btn-primary btn-block"> Registrar</button>
                <p className="forgot-password text-right">
                    Já registrado? <a href="#">clique aqui.</a>
                </p>
        </form>
        
        );
} 
}