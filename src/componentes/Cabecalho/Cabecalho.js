import React from 'react';
import './estilo.css';

export default function Cabecalho(props){


    function gerarTitulo(){
        
        if(props.id==='Estadual'){
            return 'ao Conselho ' + props.id.replaceAll('-', ' ');
        }else{
            if(props.id==='Fortaleza'){
                return 'à Arquidiocese de ' + props.id.replaceAll('-', ' ');
            }else{
                return 'à Diocese de ' + props.id.replaceAll('-', ' ');
            }
        }
    }

    return(
        <header className="header  white center ">
            <img id="logo_central" src={require('../../Imagens/'+props.id+'/logo_central.png')} className="responsive-img center "/>
            <h3 className="center">Bem vindo(a) {gerarTitulo()}</h3>
        </header>
    );
}