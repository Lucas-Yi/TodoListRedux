import React from "react"
import { connect } from "react-redux"
import { setFilter } from "../redux/actions"
import { VISIBILITY_FILTERS } from "../constants"


export function VisibleFilters({setFilter}){

    return(
        Object.keys(VISIBILITY_FILTERS).map(filterKey=>{
            return <span key={filterKey} style={{margin:10}} onClick={()=>setFilter(filterKey)}>
                    {VISIBILITY_FILTERS[filterKey]}
            </span>
        })  
    )
}

export default connect(null, {setFilter})(VisibleFilters)