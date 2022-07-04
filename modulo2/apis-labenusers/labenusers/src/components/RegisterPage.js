import React from "react";

export default class RegisterPage extends React.Component{
    state={
        nome:"",
        email:"",
    }
    handleNome = (event) =>{
        this.setState({
            nome:event.target.value
        }
        )
    }
    handleEmail = (event) =>{
        this.setState({
            email:event.target.value
        }
        )
    }
    registerUser =() => {

        // console.log(this.state) https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users

    }
    render(){
        return(
        <div>
             <h2>Cadastro</h2>
             <div> <input placeholder={"Nome"}
             value={this.state.nome}
             onChange={this.handleNome}
             />
             <input placeholder={"E-mail"}
             value={this.state.email}
             onChange={this.handleEmail}
             />
             <button onClick={this.registerUser}>Cadastro</button></div>
            
             <button onClick={this.props.goToUsers}>proxima</button>
        </div>
             )
        
    }
}