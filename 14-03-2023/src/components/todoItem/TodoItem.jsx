import "./index.css"

const TodoItem = ({ item, setList }) => {
    const onHandleClick = () => {
      console.log(item);
      
      //rimuovo un elemento al click dell'elemento stesso
      setList((prev) => [ 
        ...prev.filter((todo) => todo.id !== item.id),
      ]);
    };
  
    return (
      <li
        onClick={onHandleClick}
        //creo condizione per aggiungere la classe completed
        className={`TodoItem ${item.isCompleted && "completed"}`}>
        <p className="TodoItem_content"> - {item.content}</p>
      </li>
    );
  };

export default TodoItem;