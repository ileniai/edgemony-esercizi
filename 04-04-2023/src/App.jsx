import { useState } from "react";
import { useReducer } from "react";
import { Context } from "./store";
import { initialState } from "./store/state";
import { mainReducer } from "./store/reducers";
import Hero from "./components/hero";
import Modal from "./components/modal";
import TasksList from "./components/tasksList";
import styles from "./App.module.scss";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);


 const [generalModalContext, setGeneralModalContext] = useState({})
  
  const onHandbtnleClick = () =>
  setGeneralModalContext((prev) => ({
    ...prev,
    isVisible: true,
  }));

 

  return (
    <div className={styles.App}>
      <Context.Provider value={{ state, dispatch }}>
        <Hero />
        {generalModalContext.isVisible ? (
        <Modal
        tasksListData={generalModalContext.payload}
          setGeneralModalContext={setGeneralModalContext}
        />
      ) :null}
        <TasksList />
        
        <button onClick={onHandbtnleClick} className={styles.addTodo}>{"+"}</button>
      </Context.Provider>
    </div>
  );
}

export default App;
