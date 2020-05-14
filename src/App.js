import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"
import throttle from "lodash.throttle"

import Main from "./pages/main"

import todoReducer from "./reducers/todos"
import { loadState, saveState } from "./utils/localStorage"

const previousTodoData = loadState()

const reduxStore = createStore(
  todoReducer,
  previousTodoData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

reduxStore.subscribe(
  throttle(() => {
    saveState(reduxStore.getState())
  }, 1000)
)

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
