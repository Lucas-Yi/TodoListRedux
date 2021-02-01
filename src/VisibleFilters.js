import React,{useState} from "react"
import TodoList from "./TodoList.js"


export default function VisibleFilters({todoList}){
    const [visibleFilter, setVisibleFilter] = useState("all")
    
    const VISIBILITY_FILTERS = {
        ALL: "all",
        COMPLETED: "completed",
        INCOMPLETE: "incomplete"
    }

    const setFliters = (filterKey)=>
        setVisibleFilter(VISIBILITY_FILTERS[filterKey])

    
    return(<>
        <TodoList todoList={todoList} visibleFilter={visibleFilter}/>
        {Object.keys(VISIBILITY_FILTERS).map(filterKey=>{
            return <span key={filterKey} style={{margin:10}} onClick={()=>setFliters(filterKey)}>
                    {VISIBILITY_FILTERS[filterKey]}
            </span>
        })}
    </>)

}