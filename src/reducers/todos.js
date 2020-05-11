const initialState = {
  currentId: 0,
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
        ...state,
        currentId: state.currentId + 1,
        todos: [
          ...state.todos,
          {
            id: state.currentId,
            text: action.payload.text,
            isDone: false,
            dateCreated: action.payload.dateCreated,
            dueDate: action.payload.dueDate,
            isFavorite: action.payload.isFavorite,
            note: action.payload.note,
          },
        ],
      }
    default:
      return state
  }
}

export default todoState
