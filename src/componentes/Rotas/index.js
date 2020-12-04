import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Conteudo from '../Conteudo/Conteudo';


const Rotas = () => (

    

    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/crato' render={props => <Conteudo {...props} id="Crato" arquivoDados="DadosMenu" />} />
            <Route path='/limoeirodonorte' render={props => <Conteudo {...props} id="Limoeiro-do-Norte" arquivoDados="DadosMenu"/>} />
            <Route path='/tiangua' render={props => <Conteudo {...props} id="Tianguá" arquivoDados="DadosMenu"/>} />
            <Route path='/estadual' render={props => <Conteudo {...props} id="Estadual" arquivoDados="DadosMenu" />} />
            <Route path='/itapipoca' render={props => <Conteudo {...props} id="Itapipoca" arquivoDados="DadosMenu" />} />
        </Switch>
    </BrowserRouter>
);

export default Rotas;