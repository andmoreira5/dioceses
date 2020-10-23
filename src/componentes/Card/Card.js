import React from 'react';

export default function Card(props){
    return(
            <div className="col s12 m4 l2">
                <div className="card">
                    <div className="card-image">
                        <img src={require('../../Imagens/'+props.id+'/'+props.nome+'.jpg')} />
                    </div>
                    <div class="card-content center">
                        <h5>{props.nome}</h5>
                        <p>{props.funcao}</p>
                    </div>
                </div>
            </div>
    );
}