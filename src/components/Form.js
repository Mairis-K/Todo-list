import React from "react";

const Form = ({ setInputText, inputText, todos, setTodos, setStatus }) => {
    const inputTexthandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);   // Imput events , kas tiek rakstīts input fieldā.
    };
    const sumbmitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,     // izveido objektu ar text = inputText un savu ID
            { text: inputText, completed: false, id: Math.random() * 1000 },   // vajadzētu paku, lai ir uniq ID
        ]);
        setInputText('');   // nodzēs inoput textu , jo ir pievienots Inputam Value {inputText}
    };
    const statusHandler = (e) => {
        console.log(e.target.value)
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
            <button
                onClick={sumbmitTodoHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
