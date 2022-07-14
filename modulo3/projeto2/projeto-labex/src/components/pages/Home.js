
import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAboutPage,goBack } from "../../routes/Coordinator";


export const HomePage = () => {
  const navigate = useNavigate()

  
  return (
    <div>

      <h3>HomePage</h3>

      <div>
      <button onCllick = {goToAboutPage(navigate)}>Página trip</button>
      <button onClick={goBack(navigate)}>Voltar</button>
      </div>
 </div>
  );
};


