import{todos} from './mocks.js';
import{todoList} from './mocks.js';

//____Metodo forEach____

  todos.forEach((todoEl) => console.log(todoEl.id));

//____Metodo map_____

const userIdEl = todos.map((user) => user.userId);
console.log(userIdEl);

//____Metodo filter____

const filteredIdEl = todos.filter((todo) => todo.id >= 4);
console.log(filteredIdEl);



const bodyEl = document.querySelector('body');
const titleEl = document.createElement('th1');
titleEl.textContent = 'La mia lista della spesa'
titleEl.classList = 'tilesp'
const divEl = document.createElement('div');


divEl.classList = 'todo_list'

bodyEl.append(titleEl, divEl);

const todoListFn = (id, todo, completed) => {
    const divTodo = document.createElement('div');
    divTodo.classList = 'divTodo_list'
    const divBall = document.createElement('div');
    divBall.classList = 'ball'
    const paraEl = document.createElement('p');
    paraEl.textContent = id;
    const paragrEl = document.createElement('p');
    paragrEl.textContent = todo
    if (completed) {
      divBall.classList.add('clickBall');
    }
    divBall.addEventListener('click', () => {
      divBall.classList.toggle('clickBall');
    })
    divTodo.append(divBall, paraEl, paragrEl);
    divEl.appendChild(divTodo);

}

todoList.forEach((todo) => todoListFn(todo.id, todo.todo, todo.completed));


