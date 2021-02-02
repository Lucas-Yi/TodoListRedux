import React from "react"
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux"

export const Todo = ({todoItem, toggleTodo})=>{
    return <h2 onClick={()=>toggleTodo(todoItem.id)}>{todoItem.content}</h2>
}

export default connect(null, { toggleTodo })(Todo)

