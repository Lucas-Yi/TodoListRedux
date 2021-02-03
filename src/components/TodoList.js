import React from "react"
import Todo from "./Todo"
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants"


const TodoList = ({ todoList }) => (
    <div>
      {todoList && todoList.length
        ? todoList.map((todo) => {
            console.log("re-rendering todoList...")
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </div>
  );

const mapStateToProps = (state) => {
    return {
        todoList: getVisibleTodos(state.todoList, state.visibilityFilter)
    }
}

const getVisibleTodos = (list, filter) => {
    switch (filter) {
        case VISIBILITY_FILTERS.ALL:
            return list;
        case VISIBILITY_FILTERS.COMPLETED:
            return list.filter(t => t.complete);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return list.filter(t => !t.complete);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

export default connect(mapStateToProps)(TodoList)