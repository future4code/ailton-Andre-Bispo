import React, { Component } from 'react'
import styled from 'styled-components';

const Principal = styled.div`
background-color: darkgrey;

margin: 20px auto;
padding: 15px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
export default class EtapaFinal extends Component {
  render() {
    return (
      <Principal>
        <h1>O FORMULÁRIO ACABOU</h1>
        <h4>Muito obrigado por participar! Entraremos em contato!</h4>
        {/* <button></button> */}
      </Principal>
    )
  }
}
