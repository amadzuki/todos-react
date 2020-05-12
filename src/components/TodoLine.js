import React from "react"
import { connect } from "react-redux"
import styled from "@xstyled/styled-components"

const TodoLineStyle = styled.box`
  display: flex;
  margin: 15 2;
  padding: 10;
  border: 1;
  border-radius: 9;
`

const TodoText = styled.p`
  margin: 0 auto 0 12;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`

const TodoLine = (props) => {
  return (
    <TodoLineStyle>
      <input
        type="checkbox"
        checked={props.todo.isDone}
        onClick={() => props.toggleDone()}
      />
      <TodoText done={props.todo.isDone}>{props.todo.text}</TodoText>
      <div>{props.todo.isFavorite ? "★" : "☆"}</div>
    </TodoLineStyle>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDone: () =>
      dispatch({ type: "TOGGLE_DONE", payload: { id: ownProps.todo.id } }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLine)
