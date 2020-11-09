import React from 'react';
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';
import Cabecalho from '../Cabecalho/Cabecalho';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Historico from './Historico';
import Conselho from './Conselho';


export default function Conteudo(props){

    const identificador = props.id;

    return(
        <section className="teal lighten-5 ">
            <Cabecalho id={props.id} />
            <Switch>
                <Route exact path={props.match.path} component={props => <Conselho {...props} id={identificador} />}  />
                <Route path={props.match.path+'/historico'} render={props => <Historico {...props} id={identificador} />} />
            </Switch>
            <BotaoVoltar />
        </section>
    );
}