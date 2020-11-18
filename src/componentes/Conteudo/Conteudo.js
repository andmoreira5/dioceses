import React from 'react';
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';
import Cabecalho from '../Cabecalho/Cabecalho';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Historico from './Historico';
import Conselho from './Conselho';
import Colabore from '../Colabore/Colabore';
import NavBar from './Navbar';


export default function Conteudo(props){

    const identificador = props.id;

    return(
        <section className="teal lighten-5">
            <NavBar id={props.id} />
            <Cabecalho id={props.id} />
           
            <Switch>
                <Route exact path={props.match.path} component={props => <Conselho {...props} id={identificador} subtitulo="Conselho Diocesano"/>}  />
                <Route path={props.match.path+'/historico'} render={props => <Historico {...props} id={identificador} />} />
                <Route path={'/crato/livraria'} render={props => <Conselho {...props} id="DadosLivraria" subtitulo="Livraria Diocesana"/>} />
                <Route path={'/crato/colabore'} render={props => <Colabore {...props} id={identificador} />} />
            </Switch>
            <BotaoVoltar />
        </section>
    );
}