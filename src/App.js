import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import Main from "./pages/main"

import todoReducer from "./reducers/todos"

const reduxStore = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
