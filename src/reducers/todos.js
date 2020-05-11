const initialState = {
  todos: [
    {
      text: "start creating todo react app",
      isDone: false,
      dateCreated: "",
      dueDate: "",
      isFavorite: false,
      note:
        "here can be used for description of the todo or detailed actions for it.",
    },
  ],
}

const todoState = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: state.currentId,
            text: action.payload.text,
            isDone: false,
            isFavorite: false,
            dateCreated: action.payload.dateCreated,
          },
        ],
      }
    default:
      return state
  }
}

export default todoState
