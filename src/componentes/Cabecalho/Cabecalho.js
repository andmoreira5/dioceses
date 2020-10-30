import React from 'react';

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
        <header>
            <h1 className="center">Bem vindo(a) {gerarTitulo()}</h1>
        </header>
    );
}