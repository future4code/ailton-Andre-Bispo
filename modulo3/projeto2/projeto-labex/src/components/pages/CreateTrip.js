import React from "react";
import { useNavigate} from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/Coordinator";
import useForm from "../hooks/useForm";

export const CreateTrip = () => {
   //   {
// 	id: "tripId"
// 	name: "Festança Marciana",
// 	planet: "Marte", // Ideal que o admin possa escolher de um dropdown
// 	date: "21/12/21", // O backend aceitará qualquer tipo de dado nesse campo, escolha bem.
// 	description: "Uma viagem bem legal, na melhor época de marte",
// 	durationInDays: 228 // Duração da viagem em dias
// }
  const { form, onChange, cleanFields } = useForm({
      name:"",
      date:"",
      description:"",
      duration:""
    })
    const criar = (event) => {
      event.preventDefault();
   cleanFields()
  
    };
    const navigate = useNavigate()
    return (
      <div>
        <h3>FormPage</h3>
        <form onSubmit={criar}>
        <input
         name="name"   
         onChange ={onChange} 
         value={form.name}  
         placeholder = {"Nome"} 
         required
        />
        <input
         name="date"
         onChange ={onChange}
         value={form.date}
         placeholder = {"Data"}
         type = "date"
         required
         />
        <input
         name="description"
         onChange ={onChange}
         value={form.description}
         placeholder = {"Descrissão"}
         required
        />
        <input
         name="duration"
         onChange ={onChange}
         value={form.duration} 
         placeholder = {"Duração (em dias)"}
         type="number"
         required
         />
        
  
        <select>
          <option selected disabled value="">Escolha um Destino</option>
        </select>
        <button>enviar</button>
        </form>
        
          <div> 
           <button onClick={() => goToHomePage(navigate)}>Página home</button>
           <button onClick={() => goBack(navigate)}>Voltar</button>
          </div>
        
    
        </div>
      );
    };
