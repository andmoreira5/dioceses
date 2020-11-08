import React from 'react';
import Card from '../Card/Card';



export default function Conteudo(props){

    const dados = require('../Dados/' + props.id);

    function ler(el){
        return <div>
            <Card nome={el.nome} funcao={el.funcao} id={props.id} />
        </div>
    }

    function lerDados(el){
        return <div className="row">
            <h4>{el.titulo}</h4>
            {el.content.map(el => ler(el))}
        </div>
    }


    return(
        <section className="teal lighten-5 ">
            {dados.data.map(el => lerDados(el))}
        </section>
    );
}