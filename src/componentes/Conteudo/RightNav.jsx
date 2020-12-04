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

  @media (max-width: 768px) {
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

const RightNav = ({ open, id, arquivoDados }) => {

  console.log(arquivoDados);
  const dadosMenu = require('../Dados/'+arquivoDados);
  

  const identificador= retira_acentos(id.replaceAll('-',''));
   

    function criarMenu(el){
        let path='';
        if(el!=='Conselho'){
            path=retira_acentos(el).toLowerCase();
        }
        return <li>
            <Link to={'/'+identificador+'/'+path}>{el}</Link>
        </li>
    }

    function verificarDioceseCrato(){
        if(identificador==='Crato'){
            return dadosMenu.crato.map(el => criarMenu(el));
        }
    }


  return (
    <Ul open={open}>
      {dadosMenu.map(el => criarMenu(el))}
        {verificarDioceseCrato()}
    </Ul>
  )
}

export default RightNav
