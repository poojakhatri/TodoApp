import React from "react";
// Import components
import Todo from "./Todo";
const TodoList = ({todos, setTodos, filteredTodos}) => {
    console.log(todos)
    return (

        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                        setTodos= {setTodos}
                        todos= {todos} 
                        key = {todos.id} 
                        todo = {todo}
                        text = {todo.text}
                    />
                ))}
            </ul> 
            <Todo />
        </div>
    );
};

export default TodoList;