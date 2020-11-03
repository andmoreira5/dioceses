import React from 'react';
import './estilo.css';

export default function Card(props){

    function retira_acentos(str) {

    var com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";

    var sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
    var novastr="";
    for(let i=0; i<str.length; i++) {
        let troca=false;
        for (let a=0; a<com_acento.length; a++) {
            if (str.substr(i,1)==com_acento.substr(a,1)) {
                novastr+=sem_acento.substr(a,1);
                 troca=true;
                break;
            }
        }
        if (troca==false) {
            novastr+=str.substr(i,1);
        }
    }
    return novastr;
}   

    return(
            <div className="col s6 m4 l2">
                <div className="card">
                    <div className="card-image">
                        <img src={require('../../Imagens/'+props.id+'/'+retira_acentos(props.nome)+'.jpg')} />
                    </div>
                    <div className="card-content center" id="detalhes-card">
                        <p id="nome">{props.nome}</p>
                        <p>{props.funcao}</p>
                    </div>
                </div>
            </div>
    );
}