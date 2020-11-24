import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

export default function Home(){
    const [ imagem, setImagem] = useState('ceara');

    function trocar(){
        setImagem("crato");
    }


    return(
        <div id="home" class="center">
                <h1>{imagem}</h1>
                <div id="mapa">
                    <img   className="responsive-img"  src={require('../../Imagens/Home/ceara.png')} />
                    <img id="quixada" className="responsive-img"  src={require('../../Imagens/Home/quixada.png')} />
                    <img id="crateus" className="responsive-img"  src={require('../../Imagens/Home/crateus.png')} />
                </div>
                 <Link id="link" class=" waves-effect waves-light btn" to='/estadual'>IR PARA CONSELHO ESTADUAL </Link>
                <Link id="link"  class="waves-effect waves-light btn" to='/crato'>IR PARA DIOCESE DE CRATO </Link>
                <Link id="link"  class="waves-effect waves-light btn" to='/itapipoca'>IR PARA DIOCESE DE ITAPIPOCA </Link>
                <Link id="link" class="waves-effect waves-light btn" to='/limoeirodonorte'>IR PARA A DIOCESE DE LIMOEIRO DO NORTE </Link>
                <Link id="link" class="waves-effect waves-light btn" to='/tiangua'>IR PARA A DIOCESE DE TIANGUÁ </Link>
               
                    <map name="image-map" >
                        <area target=""  alt="" title="" href="" coords="546,1975,545,1998,546,2023,552,2034,535,2066,516,2091,505,2136,509,2174,535,2199,577,2180,615,2165,651,2189,713,2205,815,2176,887,2188,956,2239,1232,2396,1408,2049,1393,1839" shape="poly" />
                    </map>

        </div>
    );
}