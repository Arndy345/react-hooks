import React, { useState } from "react";

function EditUser({ currentUser, updateUser }) {
	const [user, setUser] = useState(currentUser);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		updateUser(user.id, user);
	};
	return (
		<div className="form">
			<h3>Edit User</h3>
			<div className="editForm">
				<form action="" onSubmit={handleSubmit}>
					<div>
						<label htmlFor="name">Name</label>
						<br />
						<input
							type="
          text"
							name="name"
							value={user.name}
							onChange={handleChange}
							id="name"
						/>
					</div>
					<div>
						<label htmlFor="username">
							Username
						</label>
						<br />
						<input
							type="text"
							name="username"
							value={user.username}
							onChange={handleChange}
							id="username"
						/>
					</div>
					<div className="btn__box">
						<button
							type="submit"
							onClick={handleSubmit}
						>
							Update User
						</button>
						<br />
						<button>Cancel</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default EditUser;
