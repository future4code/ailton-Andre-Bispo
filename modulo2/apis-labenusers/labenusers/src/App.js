import React from "react";
import RegisterPage from "./components/RegisterPage";
import UsersPage from "./components/UsersPage";


export default class App extends React.Component{
  state = {
    showPage: "nhe"
  }
  changePage = () =>{
    switch (this.state.showPage){
      case "register":
        return <RegisterPage goToRegister ={this.changeToRegister}/>
      case "users":
        return <UsersPage goToUsers={this.changeToUsers}/>
      default:
        return <div> Erro 404! A págima foi de base :(</div>
    }
    changeToRegister =()=>{
      this.setState({showPage:"register"})
    }
    changeToUsers  =()=>{
      this.setState({showPage:"users"})
    }
  }
  render () {
    return(
      <div>
      {this.changePage()}
      </div>
    )
    }

}
