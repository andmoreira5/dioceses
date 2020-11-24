import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';
const dados = require('../Dados/Mapa');
export default function Home(){
    

    function lerDados(dado){
        return <Link class="link" to={dado.endereco}>
             <path d={dado.path} />
        </Link>
    }

    return(
        <div id="home" class="center">
                <h3>Bem vindo(a)!</h3>
                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 3000 3000">
                    {dados.map(a => lerDados(a))}                    
                </svg>
        </div>
    );
}