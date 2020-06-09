import React, { Component } from "react";
import { Card } from 'primereact/card';

let profile = {nome: '', username: '', email: '', endereco: '', telefone: '', empresa: ''};




const Sobre = () => (
    <div>
        <nav>
  <ul class="menu">
        <li><a href="#">Perfil</a></li>
        <li><a href="#">Atendimento</a></li>
            <li><a href="#">Registros</a>
                <ul>
                      <li><a href="#">Saldos</a></li>
                      <li><a href="#">Limites</a></li>
                      <li><a href="#">Restrições</a></li>                    
                </ul>
            </li>
        <li><a href="#">Operações</a></li>
                     
</ul>
</nav>

        <div className="Registros">
            <h4>Sobre</h4>
            <p>Aqui estão as informações:</p>
        </div>
        <Card>
            <p><strong>Nome: Tiago Miguel  </strong>{profile.nome}</p>
            <p><strong>Username: usuario</strong>{profile.username}</p>
            <p><strong>Email: contato@contato.com.br</strong>{profile.email}</p>
            <p><strong>Endereço: Quadra xxx conjunto xxx casa 9999 </strong>{profile.endereco}</p>
            <p><strong>Telefone: (61) 99999-9999</strong>{profile.telefone}</p>
            <p><strong>Empresa: Surittec </strong>{profile.empresa}</p>
        </Card>

        

    </div>
);

export default Sobre;