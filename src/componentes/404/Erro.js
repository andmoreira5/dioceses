import React, {useState} from 'react';
import Lottie from 'react-lottie';
import BotaoVoltar from '../Botoes/BotaoVoltar';
import VoltarRccCe from '../Botoes/VoltarRccCe';

export default function Erro (props){
    const dadosAnimacao = require('./'+props.animacao+'.json'); 

    const [animateState, setAnimateState] = useState({
      isStopped:false, isPaused:false
  });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: dadosAnimacao,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <div>
        <Lottie options={defaultOptions}
            width={'20em'}
            isStopped={animateState.isStopped}
            isPaused={animateState.isPaused}/>
        <h3 className="center">{props.titulo}</h3>
        <div className="center containerBotoes">
        <VoltarRccCe />
        <BotaoVoltar />
        
        </div>
       
        </div>
    );
}