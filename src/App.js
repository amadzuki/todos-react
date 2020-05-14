import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import Main from "./pages/main"

import todoReducer from "./reducers/todos"
import { loadState, saveState } from "./utils/localStorage"

const previousTodoData = loadState()

const reduxStore = createStore(
  todoReducer,
  previousTodoData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

reduxStore.subscribe(() => {
  saveState(reduxStore.getState())
})

const App = () => {
  return (
    <Provider store={reduxStore}>
      <div>
        <Main></Main>
      </div>
    </Provider>
  )
}

export default App
