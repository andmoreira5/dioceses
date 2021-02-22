import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Conteudo from '../Conteudo/Conteudo';
import Erro from '../404/Erro';


export default function Rotas  (){

    const arquivoDados = "DadosMenu";
    const tituloPaginaNaoEncontrada = "Página não encontrada!";
    const tituloNaoHaDados="Não existem dados!";
    const animacaoNaoHaDados = "gato";
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/crato' render={props => <Conteudo {...props} id="Crato" arquivoDados="DadosMenu" />} />
                <Route path='/limoeirodonorte' render={props => <Conteudo {...props} id="Limoeiro-do-Norte" arquivoDados="DadosMenu"/>} />
                <Route path='/tiangua' render={props => <Conteudo {...props} id="Tianguá" arquivoDados="DadosMenu"/>} />
                <Route path='/estadual' render={props => <Conteudo {...props} id="Estadual" arquivoDados="DadosMenu" />} />
                <Route path='/itapipoca' render={props => <Conteudo {...props} id="Itapipoca" arquivoDados="DadosMenu" />} />
                <Route path='/iguatu' render={props => <Erro {...props} animacao={animacaoNaoHaDados} titulo={tituloNaoHaDados} />} />
                <Route path='/fortaleza' render={props => <Conteudo {...props} id="Fortaleza" arquivoDados="DadosMenu" />} />
                <Route path='/sobral' render={props => <Erro {...props} animacao={animacaoNaoHaDados} titulo={tituloNaoHaDados} />} />
                <Route path='/quixada' render={props => <Erro {...props} animacao={animacaoNaoHaDados} titulo={tituloNaoHaDados} />} />
                <Route path='/crateus' render={props => <Erro {...props} animacao={animacaoNaoHaDados} titulo={tituloNaoHaDados} />} />
                <Route path='*' render={props => <Erro {...props} animacao="404" titulo={tituloPaginaNaoEncontrada} />} />
            </Switch>
        </BrowserRouter>
    );
}
