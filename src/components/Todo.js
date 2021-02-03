import React from "react"
import { toggleTodo } from "../redux/actions";
import { connect } from "react-redux"

const Todo = ({todo, toggleTodo})=>{
    console.log("re-rendering TodoItem...")
    return (<li onClick={()=>toggleTodo(todo.id)}>
                {  
                     /*todo && (todo.complete ? "👌" : "👋") + " " + todo.content*/
                     todo.content
                }
            </li>)
}

export default connect(null, { toggleTodo })(Todo)

