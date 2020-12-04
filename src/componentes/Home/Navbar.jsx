import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color:#000;
  
  .logo {
    padding: 15px 0;
  }

  @media (max-width: 900px) {
    height:0;
    background-color:#fff;
    width:100vw;
  }
  @media (min-width: 901px) {
    display:none;
  }
`

const Navbar = (props) => {
  return (
    <Nav >
      <Burger dados={props.dados} />
    </Nav>
  )
}

export default Navbar
