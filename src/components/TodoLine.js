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

const TodoToggleDone = styled.input`
  cursor: pointer;
`

const TodoToggleFavorited = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`

const TodoLine = (props) => {
  return (
    <TodoLineStyle>
      <TodoToggleDone
        type="checkbox"
        checked={props.todo.isDone}
        onChange={props.toggleDone}
      />
      <TodoText done={props.todo.isDone}>{props.todo.text}</TodoText>
      <TodoToggleFavorited
        onClick={() => {
          props.toggleFavorited()
        }}
      >
        {props.todo.isFavorited ? "★" : "☆"}
      </TodoToggleFavorited>
    </TodoLineStyle>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleDone: () => {
      dispatch({ type: "TOGGLE_DONE", payload: { id: ownProps.todo.id } })
    },
    toggleFavorited: () => {
      dispatch({ type: "TOGGLE_FAVORITED", payload: { id: ownProps.todo.id } })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLine)
