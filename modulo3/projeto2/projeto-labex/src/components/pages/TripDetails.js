import React from "react";
import { useNavigate} from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/Coordinator";

export const TripDetails = () => {
  const navigate = useNavigate()

 

  return (
    <div>
      <h3>TripDetailsPage</h3>

      <div> 
       <button onClick={() => goToHomePage(navigate)}>Página home</button>
       <button onClick={() => goBack(navigate)}>Voltar</button>
      </div>
    

    </div>
  );
};


