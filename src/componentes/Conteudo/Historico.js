import React from 'react';
import './estilo.css'


export default function Historico(props){

    const dados = require('../Dados/' + props.id);

    return (
        <section id="home">
            <h3>Apresentação</h3>
            <p>{dados.apresentacao}</p>
        </section>
        
    )
}