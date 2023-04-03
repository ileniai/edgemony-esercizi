import { useReducer } from "react";
import { GlobalContext, initGlobalState } from "./store";
import { globalReducer } from "./store/reducers";
import Counter from "./components/counter";
import "./App.css";


function App() {
  const [state, dispatch] = useReducer(globalReducer, initGlobalState);

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Counter />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

/* <GlobalContext.Provider >
questo componente ha la necessità di opitare la sua prop sottointesa value={}
All'interno di value va inserito tutto ciò che definiamo in initGlobalState
*/

/* per far si che questi elementi mutino si usa Reducer 
è un hook che prendere un motore in questo caso globalReducer e uno stato iniziale initGlobalState.

Questo hook fornisce uno stato iniziale 
STATE (quello che si può invocare, quello che trasforma uno stato da statico a dinamico, quindi fa il rerendering) 
e il DISPATCH (metodo che mi serve per modificare lo stato)*/
