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
export default class Etapa2 extends Component {
  render() {
    return (
      <Principal>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

         <h3>5. Qual curso?</h3>
      <input onChange={this.props.onChangeCurso}
      value={this.props.curso}
      ></input>

      <h3>6. Qual a unidade de ensino?</h3>
        <input></input>
      </Principal>
    )
  }
}
