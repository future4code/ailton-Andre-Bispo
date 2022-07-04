import React, { Component } from 'react'
import styled from 'styled-components'

export default class Botoes extends Component {
  render() {
    return (
      <div>

          <input value={this.props.valorUser} 
          onChange ={this.props.userChange}
          />

          <input value={this.props.valorMsg} 
          onChange ={this.props.msgChange}
          />

          <button onClick={this.props.aoClicar}>Enviar</button>

          </div>
    )
  }
}
