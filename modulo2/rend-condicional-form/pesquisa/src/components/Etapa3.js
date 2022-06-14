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
export default class Etapa3 extends Component {
  render() {
    return (
      <Principal>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
        
        <h3>5. Por que você não terminou um curso de graduação?</h3>
        <input  onChange={this.props.onChangePQN} 
        value={this.props.pqn}></input>

        <h3>6. Você fez algum curso complementar?</h3>
        <select>
        <option>Nenhum</option>
        <option>Curso Técnico</option>
        <option>Curso de Inglês</option>
        </select>
      </Principal>
    )
  }
}
