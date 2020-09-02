import React from 'react'
import styled from '@emotion/styled';
import Vector from './vector.png'
import Logo from './logo.png'

const ContenedorHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;  
  min-width: 100%;
  padding-top: .5rem;
  @media (min-width:768px) {  
    flex-direction: row;
  }
`;

const IMG = styled.img`
  max-width: 50%;
  margin-bottom: 12%;
  height: auto;
  padding: 0 18px;
  @media (min-width:768px) {  
    max-width: 12%;
    margin-bottom: 0;
  }
`;

const H1 = styled.h1`  
  color: #ffcf33;
  font-weight: bolder;
  font-size: 3.5rem;
  text-align: center;  
  text-shadow: 5px 5px 10px rgba(0,0,0,0.3);
  @media (min-width:768px) {  
    font-size: 5.5rem;
  }
`;

const Header = () => {
  return (
    <ContenedorHeader>
      <IMG
        src={Logo} 
        alt="Logo Breaking Bad"
      />      
      <H1>Phrases</H1>
      <IMG
        src={Vector} 
        alt="Ilustración Breaking Bad"
        className="vector"
      />
    </ContenedorHeader>
  )
}

export default Header;