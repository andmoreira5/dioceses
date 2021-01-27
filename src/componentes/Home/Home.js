import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';
import $ from 'jquery';
import NavBar from './Navbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ArrowBack } from '@material-ui/icons';
const dados = require('../Dados/Mapa');


export default function Home(){

    const [value, setValue] = useState('Bem vindo!');
    
    $(window).on("load", function(){
       var $tooltip = $('.tooltip');
        $('.A').hover(
            function(event){ // Mouse entrou no elemento
                let elementoHover = $(event.target);
                setar($(elementoHover).attr("id"));
                
                var position = elementoHover.position();
                $tooltip.css({"top": position.top + "px", "left": position.left + "px"}).show();

                /* pegar a posiçao do mouse
                var x = event.clientX;
                var y = event.clientY;
                var coor = "X coords: " + x + ", Y coords: " + y;
                */
                

            }, 
            function(event){ // Mouse entrou no elemento
                retornar();
                $tooltip.hide();
            }
        );
    });


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
             <path className="A" id={dado.id} d={dado.path} fill="#007e3d"/>
        </Link>
    }

    function gerarBotoes(dado){
        return <Link to={dado.endereco} class="botao slide" id={dado.id}>{dado.id}
        </Link>
    }

    return(
        <div >
            <div class="tooltip">{value}</div>
            <div class="">
             <NavBar class="hide-on-large-only" dados={dados} />
                
                <div class="row">
                    <div class="col l6 center">
                        <h4>Bem vindo(a)!</h4>
                        <h5>Navegue pelo menu ou mapa:</h5>
                
                    <div class="hide-on-med-and-down " id="container-botoes">
                        {dados.map(a => gerarBotoes(a))}     
                    </div>
                    <a href="http://rccceara.org" class="botao " >
                        <ArrowBack />
                        Retornar a rccceara</a>
                </div>
                    <svg class=" col l6 m12 center"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 2000 2800">
                        {dados.map(a => lerDados(a))}     
                    </svg>
                   
                    
                </div>
                </div>
                
        </div>
    );

    

}