import "./index.css"

import TodoItem from "../todoItem";
//sulla base di un array di oggetti reindirizzo n elementi
const TodoList = ({ list, setList }) => {
  return (
    <ul className="TodoList">
      
      {//ordino per lettera la lista con il sort
        list
        .sort((itemA, itemB) => (itemA.content > itemB.content ? 1 : -1))
        .map((item) => (
          //il setList lo passo tramite il todoList a todoItem
          <TodoItem item={item} setList={setList} key={item.id} />
        ))}
    </ul>
  );
};

export default TodoList;

