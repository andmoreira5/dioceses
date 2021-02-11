import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

const BotaoVoltar = () => (
    <Link className="botao center" to='/'><ArrowBack />Voltar</Link>
);
export default BotaoVoltar;