import {useContext } from "react";
import { GlobalContext } from "../../store";
import "./index.css";

const Counter = () => {

  const { state, dispatch } = useContext(GlobalContext);

  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">
      <h1>INCREMENT AND DECREMENT</h1>
      <div className="card">
      <button className="increment" onClick={onHandleClick}>
        +
      </button>
      <h1>{state.value}</h1>
      <button className="decrement" onClick={onHandleClick}>
        -
      </button>
      </div>
      <button className="reset" onClick={onHandleClick}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

/* tramite l'hook USECONTEXT, crea un contesto globale dove a partire da un oggetto 
initGlobalState pùò comunicare con tutti gli altri componenti, 
assegnando al suo interno il contesto creato in precedenza useContext(GlobalContext) */