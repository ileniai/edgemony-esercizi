import "./index.css";


const TodosCard = ({ todosData, setVisibleModal }) => {

  const OnhandleClick = () =>{ setVisibleModal(true); };

  return (
    <div className="TodosCard">
      <div className="TodosCard__text-content"  >
        <div className="TodosCard_border"  >
        <h2 onClick={OnhandleClick} className="title">Todos</h2 >
        </div>
        <h4 className="todo">{todosData.todo}</h4>
        <hr />
        <p className="todo_userId">{todosData.userId}</p>
        
      </div>
    </div>
  );
};

export default TodosCard;

