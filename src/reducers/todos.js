const initialState = {
  currentId: 1,
  todos: [
    {
      id: 1,
      text: "start creating todo react app",
      isDone: false,
      isFavorited: false,
    },
  ],
}

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        currentId: state.currentId++,
        todos: [
          ...state.todos,
          {
            id: state.currentId,
            text: action.payload.text,
            isDone: false,
            isFavorited: false,
          },
        ],
      }
    case "TOGGLE_DONE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            }
          }
          return todo
        }),
      }
    case "TOGGLE_FAVORITED":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isFavorited: !todo.isFavorited,
            }
          }
          return todo
        }),
      }
    default:
      return state
  }
}

export default todoReducers
