import React from "react";
import { useNavigate} from "react-router-dom";
import { goBack, goToHomePage,goToTripDetailsPage,goToCreateTripPage } from "../../routes/Coordinator";
    
    export const AdminHome = () => {
      const navigate = useNavigate()
    
     
    
      return (
        <div>
          <h3>ADM</h3>
    
          <div> 
          <button onClick = {() =>goToCreateTripPage(navigate)}>Criar Viagem</button>
          <button onClick = {() =>goToTripDetailsPage(navigate)}>Página de Detalhes de Viagem</button>
           <button onClick={() => goToHomePage(navigate)}>Página home</button>
           <button onClick={() => goBack(navigate)}>Voltar</button>
          </div>
        
    
        </div>
      );
    };
    