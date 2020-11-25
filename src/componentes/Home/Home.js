import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';
import $ from 'jquery';
import NavBar from './Navbar';
const dados = require('../Dados/Mapa');


export default function Home(){

    const [value, setValue] = useState('Bem vindo!');

    $('*').hover(
        function(event){ // Mouse entrou no elemento
            let elementoHover = $(event.target);
            setar($(elementoHover).attr("id"));
        },
        function(event){ // Mouse saiu do elemento
           retornar();
        }
    );


    function setar(as){
        const nvalue = as;
        setValue(nvalue);
    }

    function retornar(){
        const nvalue = 'Bem vindo';
        setValue(nvalue);
    }
    
    function lerDados(dado){
        return <Link class="link" to={dado.endereco}>
             <path class="holder" id={dado.id} d={dado.path} fill="#007e3d"/>
        </Link>
    }

    function gerarBotoes(dado){
        return <Link to={dado.endereco} class="botao flow-text">{dado.id}
        </Link>
    }

    return(
        <div class="center ">
                <h4>Bem vindo(a)!</h4>
                <h5>Navegue pelo menu ou mapa:</h5>
                <NavBar dados={dados} />
                    <svg  preserveAspectRatio="xMidYMid meet" viewBox="0 0 2000 3000">
                        {dados.map(a => lerDados(a))}     
                    </svg>
        </div>
    );
}