import React from 'react';
import './estilo.css';

export default function Card(props){
    return(
            <div className="col s6 m4 l2">
                <div className="card">
                    <div className="card-image">
                        <img src={require('../../Imagens/'+props.id+'/'+props.nome+'.jpg')} />
                    </div>
                    <div className="card-content center" id="detalhes-card">
                        <p id="nome">{props.nome}</p>
                        <p>{props.funcao}</p>
                    </div>
                </div>
            </div>
    );
}