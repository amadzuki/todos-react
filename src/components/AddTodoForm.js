import React, { useState } from "react"
import { connect } from "react-redux"
import styled from "@xstyled/styled-components"

const AddTodoFormStyle = styled.form``

const TodoInput = styled.input`
  padding: 2;
`

const TodoSubmitButton = styled.input`
  padding: 2;
  margin-left: 2;
`

const AddTodoForm = (props) => {
  const [todoText, setTodoText] = useState("")

  const onChange = (event) => {
    setTodoText(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    props.addTodo(todoText)
    setTodoText("")
  }
  return (
    <AddTodoFormStyle onSubmit={onSubmit}>
      <TodoInput type="text" onChange={onChange} value={todoText} />
      <TodoSubmitButton type="submit" value="Add Todo" />
    </AddTodoFormStyle>
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todoText) => {
      dispatch({ type: "ADD_TODO", payload: { text: todoText } })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
