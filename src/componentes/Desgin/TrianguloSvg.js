import React from 'react';
import './estiloDesign.css';

export default function TrianguloSvg(){
    return(
        <svg class="linha" id="linhaInvertida"  viewBox="0 0 8 1">
               <path fill="#007e3d"  d="M0 0.6L0 1 10 1 10 0z"></path>
           </svg>
    );
}

export function TrianguloInvertido(){
    return(
        <svg class="linha" id="linhaInvertida"  viewBox="0 0 8 1">
               <path fill="#FFF"  d="M0 0.6L0 1 10 1 10 0z"></path>
           </svg>
    );
}