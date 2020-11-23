import React from 'react';

export default function CardContaBancaria(props){

    function lerDados(el){
        return <li class="collection-item blue-grey darken-1">
            <p>{el.subtitulo}</p><p>{el.conteudo}</p>
        </li>
    }

    return(
        <div id="card-conta-bancaria">
        <div class="col s12 m6 l6">
          <div class="card blue-grey darken-3 ">
            <div class="card-content white-text">
              <span class="card-title">{props.titulo}</span>
              <ul class="collection">
                  {props.data.map(el => lerDados(el))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
