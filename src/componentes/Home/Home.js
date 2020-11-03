import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

export default function Home(){
    return(
        <div id="home" class="center">
                <h1>Bem vindo!</h1>
                <Link id="link" class=" waves-effect waves-light btn" to='/conselho-estadual'>IR PARA CONSELHO ESTADUAL </Link>
                <Link id="link"  class="waves-effect waves-light btn" to='/crato'>IR PARA DIOCESE DE CRATO </Link>
                <Link id="link" class="waves-effect waves-light btn" to='/limoeirodonorte'>IR PARA A DIOCESE DE LIMOEIRO DO NORTE </Link>
                <Link id="link" class="waves-effect waves-light btn" to='/tiangua'>IR PARA A DIOCESE DE TIANGUÁ </Link>
        </div>
    );
}