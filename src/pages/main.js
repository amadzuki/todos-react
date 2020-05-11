import React from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout"
import TodoLine from "../components/TodoLine"

const main = ({ todos }) => {
  return (
    <div>
      <Layout></Layout>
      <TodoLine></TodoLine>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(main)
