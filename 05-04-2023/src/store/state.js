export const initialState = {
  tasksListData: [
    {
      id: 1,
      todo: "Do something nice for someone I care about",
      completed: true,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      username: "Pauline",
    },
    {
      id: 2,
      todo: "give her a birthday present..",
      completed: false,
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      username: "Jenna",
    },
    {
      id: 3,
      todo: "buy a computer",
      completed: true,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      username: "Vincent",
    },
    {
      id: 4,
      todo: "go shopping",
      completed: true,
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      username: "Brian",
    },
    {
      id: 5,
      todo: "tidy up the house",
      completed: false,
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      username: "Margaret",
    },
    {
      id: 6,
      todo: "correct your homework",
      completed: true,
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      username: "Antony",
    },
  ],
  isModalVisibile: false,
  tempTodo: {
    username: "",
    todo: "",
    image: "",
    id: null,
  },

  isPopUpVisibile: false,
  tempTodo: {
    username: "",
    password: "",
  },
 
};