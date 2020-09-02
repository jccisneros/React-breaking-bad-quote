import React from 'react';
import PropTypes from 'prop-types';
import styled from'@emotion/styled';

const ContenedorFrase = styled.div`
  padding: 2rem;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 10px 10px 20px -5px rgba(0,0,0,0.5);  
  margin-top: 2rem;
  max-width: 80%;
  

  h2{
    text-align: center;
    position: relative;
  }

  h4{
    color: #666;
    font-weight: bolder;
    font-size: 1rem;
    margin-top: 2rem;
    text-align: right;    
    @media (min-width:768px) {      
      font-size: 1.3rem;
    }
  }
`;


const Frase = ({frase}) => {

  const { quote, author } = frase;  

  return (
    ( !quote || !author ) 
      ? null 
      :<ContenedorFrase>
        <h2>{quote}</h2>
        <h4>{author}</h4>
      </ContenedorFrase>
  )
}

Frase.propType = {
  frase: PropTypes.object.isRequired
}

export default Frase;