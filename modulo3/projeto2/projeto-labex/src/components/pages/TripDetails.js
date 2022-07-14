import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/Coordinator";

export const TripDetails = () => {
  const navigate = useNavigate()
//   const params = useParams()

 

  return (
    <div>
      <h3>TripDetailsPage</h3>

      <div>
      </div>

      


      <button onClick={() => goToHomePage(navigate)}>Página home</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>

    </div>
  );
};


