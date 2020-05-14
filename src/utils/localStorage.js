const loadState = () => {
  try {
    const todoData = JSON.parse(localStorage.getItem("todoData"))
    return todoData ?? undefined
  } catch (error) {
    console.error(`Here's what going wrong: ${error}`)
    return undefined
  }
}

const saveState = (state) => {
  try {
    const todoData = JSON.stringify(state)
    localStorage.setItem("todoData", todoData)
  } catch (error) {
    console.error(`Here's what going wrong: ${error}`)
  }
}

export { saveState, loadState }
