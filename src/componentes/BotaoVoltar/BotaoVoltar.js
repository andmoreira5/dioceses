import React from 'react';
import { Link } from 'react-router-dom';

const BotaoVoltar = () => (
  <div className="area-botao">
    <Link className="botao-voltar btn center" to='/'>Voltar</Link>
  </div>
);
export default BotaoVoltar;