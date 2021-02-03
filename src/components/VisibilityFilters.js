import React from "react"
import cx from "classnames"
import { connect } from "react-redux"
import { setFilter } from "../redux/actions"
import { VISIBILITY_FILTERS } from "../constants"


const VisibleFilters = ({activeFilter, setFilter})=>{

    return(
        Object.keys(VISIBILITY_FILTERS).map(filterKey=>{
            const currentFilter = VISIBILITY_FILTERS[filterKey];
            return  <span 
                        key={filterKey} 
                        style={{margin:10}} 
                        className={cx("filter",
                            filterKey === activeFilter && "filter--active")} 
                        onClick={()=>setFilter(currentFilter)}>
                        {currentFilter}
            </span>
        })  
    )
}

const mapStateToProps = (state) =>{
    return { activeFilter : state.visibilityFilter }
}

export default connect(mapStateToProps, {setFilter})(VisibleFilters)