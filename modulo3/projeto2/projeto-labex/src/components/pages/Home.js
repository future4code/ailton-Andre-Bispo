
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage,goToLoginPage,goBack } from "../../routes/Coordinator";


export const HomePage = () => {
  const navigate = useNavigate()

  
  return (
    <div>

      <h3>HomePage</h3>

      <div>
     
      <button onClick={()=>goBack(navigate)}>Voltar</button>
      <button onClick={()=>goToLoginPage(navigate)}>Login</button>
      <button onClick={()=>goToListTripPage(navigate)}>Lista de Viagens</button>
      </div>
 </div>
  );
};


