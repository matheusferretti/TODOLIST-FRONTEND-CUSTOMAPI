import React from "react";

export const TodoList = () => {
    const [singleTodo, setSingleTodo] = useState({});
    const [todos, setTodos] = useState ([
        {label: "make bed"},
        {label: "brush teeth"},
        {label: "walk doggo"}
    ]);
    const handleChange = e => {
        setSingleTodo({label: e.target.value});
    };
    const handleClick = e => {
        setTodos([...todos, singleTodo]);
    };
    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
    }
    return (

    )
}