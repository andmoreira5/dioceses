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
             <NavBar class="hide-on-large-only" dados={dados} />
                <h4>Bem vindo(a)!</h4>
                <h5>Navegue pelo menu ou mapa:</h5>
                <div class="row">
                    <svg class=" col l6 m12 center"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 2000 3000">
                        {dados.map(a => lerDados(a))}     
                    </svg>
                    <div class="hide-on-med-and-down col l6" id="container-botoes">
                        {dados.map(a => gerarBotoes(a))}     
                    </div>
                    
                </div>
        </div>
    );
}