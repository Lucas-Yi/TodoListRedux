import React from "react"
import TodoItem from "./TodoItem"

export default function todoList({todoList, visibleFilter}){
    //visibleFilter default set to all 

    const filterTodoList = todoList.filter(todoItem=> {
        if(visibleFilter === "all"){
            return todoItem
        }else if(visibleFilter === "completed"){
            return todoItem.COMPLETE === true 
        }else{
            return todoItem.COMPLETE === false
        }
    })

    return(
        <ul>
            {filterTodoList.map(todoItem=><li key={todoItem.id}><TodoItem todoItem={todoItem}/></li>)}
        </ul>
    )
}