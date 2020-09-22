import React, { useState, useEffect } from "react";

const TodoList = () => {
	const [singleTodo, setSingleTodo] = useState({});
	const [todos, setTodos] = useState([
		{ label: "do laundry" },
		{ label: "clean house" },
		{ label: "take out the dog" }
	]);

	useEffect(() => {
		fetch("http://assets.breatheco.de/apis/fake/todos/user/f1996")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				console.log("responseAsJson", responseAsJson);
				setTodos(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			}); // whatever you code here will execute only after the first time the component renders
	}, []); // <------ PLEASE NOTICE THE EMPTY ARRAY

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
