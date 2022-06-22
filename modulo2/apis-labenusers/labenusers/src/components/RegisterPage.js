import React from "react";

export default class RegisterPage extends React.Component{
    render(){
        return(
        <div>
             <h2>cadastro</h2>
             <button onClick={this.props.changeToRegister}>proxima</button>
        </div>
             )
        
    }
}