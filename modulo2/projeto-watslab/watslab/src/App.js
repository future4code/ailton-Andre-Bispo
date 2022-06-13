import React from 'react';
import styled from 'styled-components';
import Botoes from './components/Botoes';

const Principal = styled.div`
background-color: darkgrey;
width: 600px;
height: 100vh;
margin: 0 auto;
`
const Header = styled.header `
height: 10vh;
background-color: rgb(19, 34, 53);
color: white;
display: flex;
justify-content:center;
align-items: center;
`
const Main = styled.main`
height: 80vh;

`
const Footer = styled.footer `
height: 10vh;
background-color: rgb(19, 34, 53);
justify-content: center;
display: flex;
justify-content:center;
align-items: center;

`
class App extends React.Component {
  state={
    inputUser:'',
    inputMsg:'',
    historicoMensagem:[],

  }
  onChangeUser = (event)=>{
    this.setState({
      inputUser:event.target.value
    })
  }
  onChangeMsg = (event)=>{
    this.setState({
      inputMsg:event.target.value
    })
  }
  aoEnviar = () =>{ 
    let mensagens = [...this.state.historicoMensagem]
    mensagens.push({usuario:this.state.inputUser,
    mensagem:this.state.inputMsg })
 this.setState({historicoMensagem: mensagens,inputMsg:'',inputUser:''})
  }
  render () {
const cardMensagem =this.state.historicoMensagem.map((item,index)=>{
return (
  <div key={index}>
    <p>{item.usuario}:{item.mensagem}</p>
  </div>
)
}
)
    return (
      
    <Principal>
      
      <Header><h1>ZAP LAB</h1></Header>
      <Main>
 {cardMensagem}
      </Main>

      <Footer>
        <Botoes
        valorUser= {this.state.inputUser}
        userChange ={this.onChangeUser}
        valorMsg ={this.state.inputMsg}
        msgChange ={this.onChangeMsg}
        aoClicar={this.aoEnviar}>

        </Botoes>
        </Footer>

      </Principal>
  );
}
}
export default App;
