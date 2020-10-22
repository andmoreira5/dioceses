import React from 'react';
import Cabecalho from '../Cabecalho/Cabecalho';
const dados = require('../Dados/dados');

export default function Conteudo(props){

    function ler(el){
        return <div>
            <p>{el.nome}, {el.funcao}</p>
        </div>
    }

    function lerDados(el){
        return <div>
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