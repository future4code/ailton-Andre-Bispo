import React from "react";
import RegisterPage from "./components/RegisterPage";
import UsersPage from "./components/UsersPage";


export default class App extends React.Component{
  state = {
    showPage: "register"
  }
  changePage = () =>{
    switch (this.state.showPage){
      case "register":
        return <RegisterPage goToUsers ={this.changeToUsers}/>
      case "users":
        return <UsersPage goToRegister={this.changeToRegister}/>
      default:
        return <div> Erro 404! A págima foi de base :(</div>
 
  }
}
changeToRegister =()=>{
  this.setState({showPage:"register"})
}
changeToUsers  =()=>{
  this.setState({showPage:"users"})
}
  render () {
    return(
      <div>
      {this.changePage()}
      </div>
    )
    }

}
