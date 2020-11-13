import React from 'react';
import './estilo.css';
const retira_acentos = require('../Helper/Helper');

export default function CardLivraria(props){

    return(
            <div className="col s6 m4 l2 text-white green darken-4">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={require('../../Imagens/Livraria/'+retira_acentos(props.nome)+'.jpg')} />
                    </div>
                    <div className="card-content center" id="detalhes-card">
                        <p id="nome">{props.nome}</p>
                        <p>{props.detalhes}</p>
                    </div>
                </div>
            </div>
    );
}