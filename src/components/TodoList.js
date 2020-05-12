import React from "react"
import { connect } from "react-redux"

import TodoLine from "./TodoLine"

const TodoList = ({ todos }) => {
  return todos.map((todo) => {
    return <TodoLine key={todo.id} todo={todo}></TodoLine>
  })
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList)
