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
  
  .logo {
    padding: 15px 0;
  }

  @media (max-width: 768px) {
    height:60px;
  }
`

const Navbar = (props) => {
  return (
    <Nav className="green">
        <h5 >RCC CEARÁ</h5>
      <Burger id={props.id} />
    </Nav>
  )
}

export default Navbar
