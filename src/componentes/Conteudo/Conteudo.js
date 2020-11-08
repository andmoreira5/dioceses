import React from 'react';
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';
import Cabecalho from '../Cabecalho/Cabecalho';
import Card from '../Card/Card';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Conselho from './Conselho';


export default function Conteudo(props){

    const identificador = props.id;

    return(
        <section className="teal lighten-5 ">
            <Cabecalho id={props.id} />
            <Switch>
                <Route exact path={props.match.path} component={props => <Home {...props} id={identificador} />}  />
                <Route path={props.match.path+'/conselho'} render={props => <Conselho {...props} id={identificador} />} />
            </Switch>
            <BotaoVoltar />
        </section>
    );
}