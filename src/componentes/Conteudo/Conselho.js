import React from 'react';
import Card from '../Card/Card';
import './estilo.css';


export default function Conteudo(props){

    const dados = require('../Dados/' + props.id);

    function ler(el){
        return <div>
            <Card nome={el.nome} detalhes={el.detalhes} id={props.id} />
        </div>
    }

    function lerDados(el){
        return <div className="row">
            <h5 id="titulo-conselho" className="green-text">{el.titulo}</h5>
            {el.content.map(el => ler(el))}
        </div>
    }


    return(
        <section className="teal lighten-5 ">
            <h4 className="center">{props.subtitulo}</h4>
            {dados.data.map(el => lerDados(el))}
        </section>
    );
}