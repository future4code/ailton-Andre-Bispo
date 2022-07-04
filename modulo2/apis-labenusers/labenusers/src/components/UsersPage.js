import React from "react";

export default class UsersPage extends React.Component{
    render(){
        return (
        <div> 
            <h2>Usuarios</h2>
        <button onClick={this.props.goToRegister}>proxima</button> 
        </div>
        )
        
    }
}