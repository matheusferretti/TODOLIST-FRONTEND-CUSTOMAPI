import React, { useState } from "react";

const TodoList = () => {
	const [singleTodo, setSingleTodo] = useState({});
	const [todos, setTodos] = useState([
		{ label: "do laundry" },
		{ label: "clean house" },
		{ label: "take out the dog" }
	]);
	const handleChange = e => {
		setSingleTodo({ label: e.target.value, done: false });
	};
	const handleClick = e => {
		setTodos([...todos, singleTodo]);
		setSingleTodo({});
		//to set singleTodo {}
	};
	const deleteTodo = task => {
		const newTodos = todos.filter(item => item.label !== task);
		console.log(newTodos);
		setTodos(newTodos);
	};
	return (
		<>
			<form onSubmit={e => e.preventDefault()}>
				<input
					type="text"
					name="todo"
					onChange={handleChange}
					value={singleTodo.label}
				/>
				<button onClick={handleClick}>Save</button>
			</form>
			<div>
				{todos.map((todoItem, i) => {
					return (
						<div key={i}>
							{todoItem.label}
							<span
								type="button"
								onClick={() => deleteTodo(todoItem.label)}>
								{" "}
								X{" "}
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TodoList;
