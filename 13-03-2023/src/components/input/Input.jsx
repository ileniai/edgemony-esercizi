import {useState} from "react"
import "./index.css"

const Input = ({setVisibleModal}) =>{


    
    const [completedInput, setCompletedInput] = useState ("");
    const [messageInput, setMesageInput] = useState ("");

    
    const onHandleSubmit = (e) =>{
        e.preventDefault();
        fetch("https://dummyjson.com/todos/1",{
            method: "PUT", 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: completedInput,
                
              }),
        });
        setVisibleModal(false)
    };

    const onHandleClick = () =>{setVisibleModal(false);};



    return(
        <div className="Input">
            <div className="Modal_overlay" onClick={onHandleClick}></div>
            <div className="Modal_content">
                <h3 className="Modal_title">Cosa vuoi aggiungere?</h3>
                <button onClick={onHandleClick} className="Close_model">x</button>
                <form onSubmit={onHandleSubmit} className="Modal_form">
                  
                     <input
                    className="Modal_input-text"
                    value={completedInput}
                    onChange={(e) => setCompletedInput(e.target.value)}
                    type="text"
                    placeholder="Digita qui..."
                    required
                    />
                    <input
                    className="Modal_input-submit"
                    type="submit"
                    value="Aggiungi"
                    />
                </form>
            </div>
        </div>
    )
}

export default Input;