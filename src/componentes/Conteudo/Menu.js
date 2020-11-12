import React from 'react';
import M, {options} from 'materialize-css';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
const retira_acentos = require('../Helper/Helper');
const dadosMenu = require('../Dados/DadosMenu');


export default function Menu(props){

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });

    const identificador= retira_acentos(props.id.replaceAll('-',''));
   

    function criarMenu(el){
        let path='';
        if(el!=='Conselho'){
            path=retira_acentos(el).toLowerCase();
        }
        return <li>
            <Link to={'/'+identificador+'/'+path}>{el}</Link>
        </li>
    }

    function verificarDioceseCrato(){
        if(identificador==='Crato'){
            return dadosMenu.crato.map(el => criarMenu(el));
        }
    }


    return(
        <div>
        <nav className="green">
            <div className="nav-wrapper center">
            <a  class="brand-logo right">RCC CEARÁ</a>
                <a href="#" className="sidenav-trigger" data-target="slide-out"><MenuIcon fontSize="large" /></a>
                <ul className="center hide-on-med-and-down">
                    {dadosMenu.map(el => criarMenu(el))}
                    {verificarDioceseCrato()}
                </ul>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav">
            {dadosMenu.map(el => criarMenu(el))}
            {verificarDioceseCrato()}
        </ul>
      
    </div>
    )
}