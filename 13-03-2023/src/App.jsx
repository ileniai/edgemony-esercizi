//import {useState} from "react"
import './App.css'
import TodosList from './components/todosList/TodosList'
import Day from "./components/day"

function App() {

  //const [activeElement, setActiveElement] = useState(0)
  return (
    <div className="App">
      {/*[...new Array(30)].map((item, i)=>(
      <Day 
      content = {i+1}
      activeElement = {activeElement}
      setActiveElement = {setActiveElement}
      key={i}
      />
      ))*/}
      <h2 className='App_title'>Todo List</h2>
      <p className='App_text'>Clicca sul titolo "Todos" per aggiungere una cosa da fare 😉</p>
      
      <TodosList />
      </div>
  )
}
export default App
