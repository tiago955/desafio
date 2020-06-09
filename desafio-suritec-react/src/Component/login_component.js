import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (

            <form>
                <h3> Login cliente Surittec</h3>

                <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" className="form-control" placeholder="Entre com e-mail" />
                </div>

                <div class="form-group">
                    <label>Senha</label>
                    <input type="password" className="form-control" placeholder="Digite sua senha" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Registre-se</button>
                <button type="submit" className="btn btn-primary btn-block">Enviar</button>
                <p className="forgot-password text-right">
                    Esqueceu <a href="#"> sua senha?</a>
                </p>
            </form>
        );
    }
}