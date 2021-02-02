import React from "react"
import AddTodo from "./components/AddTodo.js"
import TodoList from "./components/TodoList.js"
import VisibleFilters from "./components/VisibilityFilters.js"

export default function TodoApp() {
  /* 3 components
    AddTodo
    TodoList
    VisibleFilters
  */
  return <>
    <h1>Todo List</h1>
    <AddTodo />
    <TodoList />
    <VisibleFilters />
  </>
  
}

