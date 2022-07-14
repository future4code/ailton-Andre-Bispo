// import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage,goBack } from "../../routes/Coordinator";

export const LoginPage = () => {
 const [email, setEmail] = useState("")
 const [senha, setSenha] = useState("")

const inputEmail = (event) => {
    setEmail (event.target.value);
};

const inputSenha = (event) => {
    setSenha(event.target.value);
};
    const navigate = useNavigate();
    const fazerLogin = (event) => {
        event.preventDefault()
        const body = {
            email: email,
            Password: senha
        }
        console.log(body)
        // axios.post("link", body, headers)
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={fazerLogin}> 
            <input 
             value = {email} 
             onChange ={inputEmail}
             placeholder = {"E-mail"}
             type = "email"
             required
             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
             title="Exemplo: email@exemplo.algo"
            />
            <input
             type= "password"
             value = {senha}
             onChange ={inputSenha}
             placeholder = {"Senha"}
             required
             pattern={"^.{3,}$"}
             title={"Mínimo de 3 caracteres"}
            />
           
            <button>Fazer Login</button>
            </form>
          
          <div>
          <button onClick={() => goToHomePage(navigate)}>Página home</button>
          <button onClick={()=>goBack(navigate)}>Voltar</button>
            </div> 
        </div>
       
    )
};
