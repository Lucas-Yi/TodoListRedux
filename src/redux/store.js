import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from "./actionTypes"
import {createStore} from "redux"
import { VISIBILITY_FILTERS } from "../constants";

const initialState = {
    todoList: [],
    visibilityFilter: VISIBILITY_FILTERS.ALL
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:{
            const { id, content } = action.payload;
            return {
                ...state,
                todoList: [...state.todoList, {content:content, complete:false, id:id}]
            }
        }
        case TOGGLE_TODO:{
            const { id } = action.payload
            return {
                ...state,
                todoList: [...state.todoList].map(todo=>{
                    if(todo.id === id){
                        todo.complete = !todo.complete
                        return todo
                    }
                    return todo
                })
            }
        }
        case SET_FILTER:{
            const { filter } = action.payload
            return {
                ...state,
                visibilityFilter: filter
            }
        }
        default: return state;
    }
};

export default createStore(reducer)