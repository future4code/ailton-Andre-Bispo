import React, { Component } from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';

const Principal = styled.div`
background-color: darkgrey;
width: 80vw;
margin: 0 auto;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`



export default class App extends Component {
  state={
dadoNome: "",
dadoIdade:"",
dadoEmail:"",
dadoEscolaridade:"",
  }
  render(){
  return (
    <Principal>
    
      <Etapa1 nome={this.state.dadoNome}
      ></Etapa1>
      
      <Etapa2></Etapa2>

      <Etapa3></Etapa3>

      <EtapaFinal></EtapaFinal>

    </Principal>
  );
}
}

// export default App;
