import React from 'react';
import M, {options} from 'materialize-css';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
const retira_acentos = require('../Helper/Helper');


export default function Menu(props){

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });

    const identificador= retira_acentos(props.id.replaceAll('-',''));


    return(
        <div>
        <nav className="green">
            <div className="nav-wrapper center">
            <a  class="brand-logo right">RCC CEARÁ</a>
                <a href="#" className="sidenav-trigger" data-target="slide-out"><MenuIcon fontSize="large" /></a>
                <ul className="center hide-on-med-and-down">
                <li><Link to={'/'+identificador}>Conselho</Link></li>
                <li><Link  to={'/'+identificador +'/historico'}>Histórico</Link></li>
                </ul>
            </div>
        </nav>

        <ul id="slide-out" class="sidenav">
            <li><Link  to={'/'+identificador}>Conselho</Link></li>
            <li><Link  to={'/'+identificador +'/historico'}>Histórico</Link></li>
        </ul>
      
    </div>
    )
}