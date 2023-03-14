import { useState } from "react";
import FullInput from "./components/fullInput";
import TodoList from "./components/todoList";
import todoList from "./mock/todoList";
import "./App.css";

function App() {
  /*facendo una funzione con la lista direttamente su App
  posso farla comunicare con FullInput e TodoList*/
  const [list, setList] = useState(todoList);

  return (
    <div className="App">
      <h1 className="App_title">Coding Bootcamp</h1>
      <p className="App_text">Lista delle cose che ho studiato e che ancora devo approfondire...</p>
      <div className="wrapper">
        <FullInput setList={setList} />
        <TodoList list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
