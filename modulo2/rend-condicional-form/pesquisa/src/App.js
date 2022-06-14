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
dadoNome:"",
dadoIdade:"",
dadoEmail:"",
dadoEscolaridade:"",
tela: 1
}
renderScreen = () => {
  switch (this.state.tela) {
    case 1:
      return <Etapa1 nome={this.state.dadoNome}
      idade={this.state.dadoIdade}
      email={this.state.dadoEmail}
      escolaridade={this.state.dadoEscolaridade}
      onChangeNome={this.changeInputNome} 
      onChangeIdade={this.changeInputIdade} 
      onChangeEmail={this.changeInputEmail} 
      onChangeEscolaridade={this.changeInputEscolaridade}/>
      break;
    case 2:
      return <Etapa2 />
      
      break;
    case 3:
      return <Etapa3 />
      break;
    case 4:
      return <EtapaFinal />
      break;
  }
}
pulaEtapa = () => {
  this.setState({tela:this.state.tela + 1})

  }
  changeInputNome=(event)=>{
    this.setState({dadoNome:event.target.value})
  }
  changeInputIdade=(event)=>{
    this.setState({dadoIdade:event.target.value})
  }
  changeInputEmail=(event)=>{
    this.setState({dadoEmail:event.target.value})
  }
  render(){
  return (
    <Principal>
    {this.renderScreen()}
    
    {this.state.tela === 4 ||
     <button onClick={this.pulaEtapa}>Proxima Etapa</button> }
    </Principal>
  );
}
}


// export default App;
