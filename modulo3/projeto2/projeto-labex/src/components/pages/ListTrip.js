import React from "react";
import { useNavigate} from "react-router-dom";
import { goToHomePage,goToFormPage,goBack } from "../../routes/Coordinator";

export const ListTrip = () => {
  const navigate = useNavigate()

//   {
// 	id: "tripId"
// 	name: "Festança Marciana",
// 	planet: "Marte", // Ideal que o admin possa escolher de um dropdown
// 	date: "21/12/21", // O backend aceitará qualquer tipo de dado nesse campo, escolha bem.
// 	description: "Uma viagem bem legal, na melhor época de marte",
// 	durationInDays: 228 // Duração da viagem em dias
// }

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
