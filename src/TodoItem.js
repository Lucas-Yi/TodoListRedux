import React from "react"

export default function TodoItem({todoItem}){

    const handleItemClick = ()=> {
        todoItem.COMPLETE = !todoItem.COMPLETE
    }
    
    return <h2 onClick={handleItemClick}>{todoItem.context}</h2>
}