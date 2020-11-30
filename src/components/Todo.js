import React from "react";

const Todo = ({ text, todos, todo, setTodos }) => {
    const deleteHandler = () => {
        // izdzēš elementu uz kuru uzliko delete
        setTodos(todos.filter((el) => el.id !== todo.id)); //meklē elementu uz kuru uzliko un atrod mach elementu un izdzēš
    };
    const completehandler = () => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    // pārbauda vai uzklikotais item.id = todo.id
                    return {
                        ...item,
                        completed: !item.completed, // pārveido property uz pretējo
                    };
                }
                return item;
            })
        );
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {text}
            </li>
            <button onClick={completehandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;
