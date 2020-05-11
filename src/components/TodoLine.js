import React from "react"
import styled from "@xstyled/styled-components"

const TodoLineStyle = styled.box`
  display: flex;
  margin: 15 0;
  p {
    margin-right: auto;
  }
`

const TodoLine = ({ isDone, isFavorite, text }) => {
  return (
    <TodoLineStyle>
      <input type="checkbox" checked={isDone} />
      <p>{text}</p>
      <div>{isFavorite ? "★" : "☆"}</div>
    </TodoLineStyle>
  )
}

// const TodoList = (todos) => {
//   todos.map((todo) => {
//     return <TodoLine detail={todo}></TodoLine>
//   })
// }

export default TodoLine
