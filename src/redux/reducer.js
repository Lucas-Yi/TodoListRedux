import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from "./actionTypes"

const initialState = {
    todoList: [],
    visibilityFilter: "ALL"
}

const reducers = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:{
            const { id, content } = action.payload;
            return {
                ...state,
                todoList: [...state.todoList,{ content:content, complete:false, id:id}]
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

export default reducers