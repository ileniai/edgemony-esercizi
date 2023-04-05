export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };

      //AGGIUNGI TASK
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };

      //DEFINIZIONE DI TASK COMPLETATA
    case "SET_TASK_COMPLETED":
      return {
        ...state,
        tasksListData: state.tasksListData.map((task) => {
          if (task.id === action.payload)
            return {
              ...task,
              completed: !task.completed,
            };
          return task;
        }),
      };

      //ELIMINA TASK
    case "DELETE_TASK":
      return {
        ...state,
        tasksListData: state.tasksListData.filter(
          (task) => task.id !== action.payload
        ),
      };

      //DEFINIZIONE MODALE
    case "SET_MODAL_VISIBILITY":
      return {
        ...state,
        isModalVisibile: action.payload,
      };
    case "SET_TEMP_TODO_USERNAME":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          username: action.payload,
        },
      };
    case "SET_TEMP_TODO_TODO":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          todo: action.payload,
        },
      };
    case "SET_TEMP_TODO_IMAGE":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          image: action.payload,
        },
      };
    case "SET_TEMP_TODO_ID":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          id: state.tasksListData.length + 1,
        },
      };

      //POPUP
      case "SET_POPUP_VISIBILITY":
      return {
        ...state,
        isPopUpVisibile: action.payload,
      };

      case "SET_TEMP_USERNAME":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          username: action.payload,
        },
      };


      case "SET_TEMP_PASSWORD":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          password: action.payload,
        },
      };
  }
};