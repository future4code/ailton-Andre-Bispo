import React from "react";
import { useNavigate} from "react-router-dom";
import { goToHomePage,goToFormPage,goBack } from "../../routes/Coordinator";

export const ListTrip = () => {
  const navigate = useNavigate()



  return (
    <div>
      <h3>List Trip Page</h3>

      <div> 
       {/* <button onClick={() => goToHomePage(navigate)}>Página Inicial</button> */}
       <button onClick={() => goToFormPage(navigate)}>Inscrever-se</button>
       <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
    

    </div>
  );
};
