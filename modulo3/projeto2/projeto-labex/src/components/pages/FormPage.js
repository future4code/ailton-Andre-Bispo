import React from "react";
import { useNavigate} from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/Coordinator";
    
    export const FormPage = () => {
      const navigate = useNavigate()
    
    //   {
    //     name: "Soter Padua",
    //     age: 23, // Tem que ser maior de 18 anos
    //     applicationText: "Sou um bom candidato por X, Y e Z", // Resposta de "porque sou um bom candidato(a)?"
    //     profession: "Capturador de Bug", // Campo aberto
    //     country: "Brasil", // Idealmente vem de um dropdown
    //     trip: "tripId", // Dropdown das viagens cadastradas
    // }
    
      return (
        <div>
          <h3>FormPage</h3>
          <input placeholder = {"nome"}/>
          <input placeholder = {"idade"}/>
          <input placeholder = {"Texto de candidatura"}/>
          <input placeholder = {"profissao"}/>
          <select>
            <option>Selecione seu pais de origem</option>
          </select>
          <select>
            <option>Escolha um Destino</option>
          </select>
          <button>enviar</button>
          <div> 
           <button onClick={() => goToHomePage(navigate)}>Página home</button>
           <button onClick={() => goBack(navigate)}>Voltar</button>
          </div>
        
    
        </div>
      );
    };