import {useState} from "react";
import TodosCard from "../todosCard/TodosCard"
import {todosList} from "../../mocks/todosList"
import Input from "../input"
import "./index.css"

const TodosList = () =>{

    const [visibleModal, setVisibleModal] = useState(false);


    return(<div className="TodosList">
            {todosList 
            
            .map((todo)=>(               
                <TodosCard 
                todosData={todo} 
                key ={todo.id} setVisibleModal={setVisibleModal}/>
                
            ))}
            {visibleModal && <Input setVisibleModal = {setVisibleModal} />}
        </div>
    )
}

export default TodosList