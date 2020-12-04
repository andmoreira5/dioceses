import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const retira_acentos = require('../Helper/Helper');


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index:5;
    margin-left:0;

    li {
      color: #fff;
      margin-top:0;
      padding-top:0;
      margin-bottom:0;
      padding-bottom:0;
    }
  }
`;

const RightNav = ({open, dados}) => {

  const dadosMenu = require('../Dados/DadosMenu');
   

    function criarMenu(el){
        return <li>
            <Link to={el.endereco}>{el.id}</Link>
        </li>
    }

  return (
    <Ul open={open}>
      {dados.map(el => criarMenu(el))}
    </Ul>
  )
}

export default RightNav
