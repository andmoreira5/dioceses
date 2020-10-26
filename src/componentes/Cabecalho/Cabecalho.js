import React from 'react';

export default function Cabecalho(props){

    return(
        <header>
            <h1 className="center">Bem vindo(a) à Diocese de {props.id.replaceAll('-', ' ')}</h1>
        </header>
    );
}