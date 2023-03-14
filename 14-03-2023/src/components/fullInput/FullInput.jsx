import { useState } from "react";
import TodoItem from "../todoItem";
import "./index.css";

const FullInput = ({ setList }) => {

  /*Creo funzione con stringa vuota per input testuale
  che salva nello stato il suo valore*/ 
  const [inputValue, setInputValue] = useState("");

/* Creo funzione per il pulsante aggiungi */
  const onHandleSubmit = (e) => {
    e.preventDefault();

    

    /*Al set, prendo il valore iniziale
     passo un array che sarà formato dall'array precedente 
     con un nuovo oggetto*/
    setList(prev => [...prev, {

      id: prev.length +1,
      content: inputValue,
      isCompleted: false,
    },
    
    
  ]);
  /*impostando il setInputValue con stringa vuota per eliminare
  la ricerca del search dopo averla aggiunta */
    setInputValue ("");
     
  };

  const onInputChange = (e) => setInputValue(() => e.target.value);

//richiamo le callback
  return (
    <form className="FullInput" onSubmit={onHandleSubmit}>
      <input className="FullInput_One"
        type="text"
        placeholder="Digita qui..."
        required
        value={inputValue}
        onChange={onInputChange}
      />
      <input className="FullInput_Two" type="submit" value="Aggiungi" />
    </form>
  );
};

export default FullInput;