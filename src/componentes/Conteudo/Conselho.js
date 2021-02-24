import React, {useState} from 'react';
import Card from '../Card/Card';
import TrianguloSvg, {TrianguloInvertido} from '../Desgin/TrianguloSvg';
import './estiloConteudo.css';


export default function Conteudo(props){

    const dados = require('../Dados/' + props.id);
    let cont = true; //true para branco, false para verde 
    const branco="#FFF";
    const verde="#007e3d";
    let corForeground=branco;
    let corBackground=verde;

    function alterarCor(){
        if(cont){
            corForeground=verde;
            corBackground=branco;
        }else{
            corForeground=branco;
            corBackground=verde;
        }
       cont=!cont;
    }

    function retornarComponente(){
        if(!cont){
            return (<TrianguloSvg />);
        }else{
            return(<TrianguloInvertido />);
        }
    }

    function ler(el){
        return <div>
            <Card nome={el.nome} detalhes={el.detalhes} id={props.id} />
        </div>
    }

    function lerDados(el){
        
        return <div className="row" id="gruposConselho" style={{backgroundColor:corBackground}}>
            {retornarComponente()}
            <h4 style={{color:corForeground}} className="center">{el.titulo}</h4>
            {el.content.map(el => ler(el))}
            
            {alterarCor()}
        </div>
    }


    return(
        <section id="sectionConteudo">
            {dados.data.map(el => lerDados(el))}
        </section>
    );
}

//<h4 className="center">{props.subtitulo}</h4>