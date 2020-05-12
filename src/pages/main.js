import React from "react"

import Layout from "../components/Layout"
import TodoList from "../components/TodoList"
import AddTodoForm from "../components/AddTodoForm"

const main = () => {
  return (
    <div>
      <Layout>
        <AddTodoForm></AddTodoForm>
        <TodoList></TodoList>
      </Layout>
    </div>
  )
}

export default main
