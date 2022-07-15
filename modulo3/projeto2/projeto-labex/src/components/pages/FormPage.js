import React from "react";
import { useNavigate} from "react-router-dom";
import { goBack, goToHomePage } from "../../routes/Coordinator";
import useForm from "../hooks/useForm";
import { listCountries } from "../listCountries";

 export const FormPage = () => {
   
    const { form, onChange, cleanFields } = useForm({
        name:"",
        age:"",
        profession:"",
        applicationText:""
      })
      const cadastrar = (event) => {
        event.preventDefault();
     cleanFields()
    
      };
      const navigate = useNavigate()
      return (
        <div>
          <h3>FormPage</h3>
          <form onSubmit={cadastrar}>
          <input
          name="name"
          value={form.name}
          onChange ={onChange}
          placeholder = {"Nome"}
          required
           />
          <input 
            name="age"
            value={form.age}
            onChange ={onChange}
          placeholder = {"Idade"}
          />
          <input 
            name="profession"
            value={form.profession}
            onChange ={onChange}
          placeholder = {"Profissão"}
          />
          <input 
            name="applicationText"
            value={form.applicationText}
            onChange ={onChange}
          placeholder = {"Texto de candidatura"}
          />
          
          <select>
            <option selected disabled value="">Defina seu pais de origem</option>
            {listCountries.map((item,index)=>{
                return <option key={index}>{item}</option>
            })}
          </select>
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
