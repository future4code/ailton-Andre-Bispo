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
export default class Etapa1 extends Component {
  render() {
    return (
      <Principal>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        
        <h3>1. Qual o seu nome?</h3>
        <input value={this.props.nome}></input>

        <h3>2. Qual sua idade?</h3>
        <input></input>

        <h3>3. Qual seu email?</h3>
        <input></input>

        <h3>4. Qual a sua escolaridade?</h3>
        <select>
          <option></option>
          <option>Ensino Médio Incompleto</option>
          <option>Ensino Médio Completo</option>
          <option>Ensino Superior Completo</option>
          <option>Ensino Superior Inompleto</option>
            
        </select>
        <button></button>
      </Principal>
    )
  }
}
