import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, todo, setTodos, filteredTodos }) => {
    console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
