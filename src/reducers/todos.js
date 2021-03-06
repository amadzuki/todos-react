const initialState = {
  currentId: 0,
  todos: [],
}

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        currentId: state.currentId + 1,
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
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default todoReducers
