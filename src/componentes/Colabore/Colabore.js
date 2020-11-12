//Aqui ficarão os dados para que a pessoa possa fazer doação para a diocese de Crato
import React from 'react';
import CardContaBancaria from '../Card/CardContaBancaria';

export default function Colabore(){
    const dados = require('../Dados/DadosContaBancaria');

    function lerDados(el){
        return <CardContaBancaria   titulo={el.titulo} 
            data={el.data} />
    }

    return (
        <div className="center">
            <h3 >Ajude-nos a Evangelizar!</h3>
            <div className="row">
            {dados.map(el => lerDados(el))}
            </div>
            
        </div>
    );
}