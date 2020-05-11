import React from "react"
import styled from "@xstyled/styled-components"
import { connect } from "react-redux"

const TodoLineStyle = styled.box`
  display: flex;
  margin: 15 4;
  p {
    margin: 0 auto 0 12;
  }
  border-bottom: 1;
`

const TodoLine = (props) => {
  return (
    <TodoLineStyle>
      <input type="checkbox" checked={props.todo.isDone} />
      <p>{props.todo.text}</p>
      <div>{props.todo.isFavorite ? "★" : "☆"}</div>
    </TodoLineStyle>
  )
}

const TodoList = (state) => {
  return state.todos.map((todo) => {
    return <TodoLine todo={todo}></TodoLine>
  })
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(TodoList)
