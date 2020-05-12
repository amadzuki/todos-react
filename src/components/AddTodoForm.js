import React from "react"
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
const AddTodoForm = () => {
  return (
    <AddTodoFormStyle>
      <TodoInput type="text" />
      <TodoSubmitButton type="submit" value="Add Todo" />
    </AddTodoFormStyle>
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
