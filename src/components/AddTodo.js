import React, { useState } from "react"
import { addTodo } from "../redux/actions"
import { connect } from "react-redux"


const AddTodo = ({ addTodo })=>{
    const [todoItem, setTodoItem] = useState("")

    const handleInputChange = (e)=>{
        setTodoItem(e.target.value)
    }

    const handleAddTodo = ()=>{
        addTodo(todoItem)
        setTodoItem("")
    }

    return <>
        <input type="text" onChange={handleInputChange} value={todoItem}></input>
        <button onClick={handleAddTodo}> Add Todo</button>
    </>
}

//By passing addTodo to connect, our component receives it as a prop, and it will automatically dispatch the action when it’s called.
export default connect(null, {addTodo})(AddTodo)