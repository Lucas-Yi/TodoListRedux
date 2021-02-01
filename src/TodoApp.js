import React, {useState} from "react"
import AddTodo from "./AddTodo.js"
import VisibleFilters from "./VisibleFilters.js"


export default function TodoApp() {
  const [todoList, setTodoList] = useState([])

  const addToList = (todoItem, id) =>
    setTodoList([...todoList, {COMPLETE: false, context: todoItem, id:id++}])

  /* 3 components
    AddTodo
    TodoList
    VisibleFilters
  */
  return <>
    <h1>Todo List</h1>
    <AddTodo addToList={addToList}/>
    {/*<TodoList todoList={todoList}/>*/}
    <VisibleFilters todoList={todoList}/>
  </>
  
}

