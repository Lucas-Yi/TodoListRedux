import React, {useState} from "react"

export default function AddTodo({addToList}){
    const [todoItem, setTodoItem] = useState("")
    const todoID = 1

    const handleInputChange = (e)=>{
        setTodoItem(e.target.value)
    }

    const handleAddTodoClick = ()=>{
        //add todoItem to TodoList
        addToList(todoItem, todoID)
        setTodoItem("")
    }

    return <>
        <input type="text" onChange={handleInputChange} value={todoItem}></input>
        <button onClick={handleAddTodoClick}> Add Todo</button>
    </>
}