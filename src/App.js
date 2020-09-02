import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header'
import Frase from './components/Frase'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;  
`;

const Boton = styled.button`
  background-color: #ffcf33;
  background-size: 300px;
  border: none;
  border-radius: 50px;  
  box-shadow: 5px 5px 20px -5px rgba(0,0,0,0.3);
  color: #357a38;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 3rem;
  padding: 1rem 3rem;  
  z-index: 999;
  transition: .4s ease;
  &:hover{
    background-color: #ffc107;   
    box-shadow: 10px 10px 20px -4px rgba(0,0,0,0.5);
    color: #fff;
    cursor: pointer;
  }
  @media (min-width:768px) {
    font-size: 2rem;
  }
`;

function App() {

  const [ frase, setFrase ] = useState(useState({}));

  const consulta = async () => {

    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    setFrase( frase[0] );
  }

  useEffect( () => {
    consulta();
  }, [] );

  return (
    <Contenedor>
      <Header />
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consulta}
      >
        Generate
      </Boton>      
    </Contenedor>
  );
}

export default App;