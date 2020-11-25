import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height:90px;
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
`

const Navbar = (props) => {
  return (
    <Nav >
      <Burger dados={props.dados} />
    </Nav>
  )
}

export default Navbar
