import React from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
import Card from '../Card/Card';

const dados = require('../Dados/dados');

export default function Conteudo(props){

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
        <section>
            <Cabecalho id={props.id} />
            {dados.crato.map(el => lerDados(el))}
        </section>
    );
}