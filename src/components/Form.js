import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function Form({ addUsers }) {
	const initialState = {
		id: null,
		name: "",
		username: "",
	};
	const [user, setUser] = useState(initialState);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!user.name || !user.username) return;
		addUsers(user);
		setUser(initialState);
	};
	return (
		<div className="form">
			<h2>Add User</h2>
			<form
				onSubmit={handleSubmit}
				className="form"
			>
				<div>
					<label htmlFor="name">Name</label>

					<input
						type="text"
						name="name"
						value={user.name}
						id="name"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="username">
						Username
					</label>

					<input
						type="text"
						name="username"
						value={user.username}
						onChange={handleChange}
						id="username"
					/>
				</div>

				<button
					type="submit"
					onClick={handleSubmit}
				>
					Add New User
				</button>
			</form>
		</div>
	);
}

export default Form;
