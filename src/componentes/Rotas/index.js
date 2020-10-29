import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Conteudo from '../Conteudo/Conteudo';


const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/crato' render={props => <Conteudo {...props} id="Crato" />} />
            <Route path='/limoeirodonorte' render={props => <Conteudo {...props} id="Limoeiro-do-Norte" />} />
            <Route path='/tiangua' render={props => <Conteudo {...props} id="Tianguá" />} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;