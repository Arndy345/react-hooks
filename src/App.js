import { useState } from "react";
import "./App.css";
import EditUser from "./components/EditUser";
import Form from "./components/Form";
import UserTables from "./components/UserTables";

function App() {
	const initialState = [
		{
			id: 1,
			name: "Tania",
			username: "floppydiskette",
		},
		{
			id: 2,
			name: "Craig",
			username: "siliconeidolon",
		},
		{
			id: 3,
			name: "Ben",
			username: "benisphere",
		},
	];
	const [users, setUsers] =
		useState(initialState);
	const [editing, setEditing] = useState(false);
	const [currentUser, setCurrentUser] =
		useState(initialState);

	const addUsers = (user) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};
	const deleteUser = (id) => {
		const newUser = users.filter(
			(item) => item.id !== id
		);
		setUsers(newUser);
	};

	const editUser = (user) => {
		setEditing(true);
		setCurrentUser({
			id: user.id,
			name: user.name,
			username: user.username,
		});
	};
	const updateUser = (id, updatedUser) => {
		setEditing(false);

		setUsers(
			users.map((user) =>
				user.id === id ? updatedUser : user
			)
		);
	};

	return (
		<div className="App container">
			<h2>CRUD App with React Hooks</h2>
			<div className="section">
				{editing ? (
					<EditUser
						currentUser={currentUser}
						setEditing={setEditing}
						updateUser={updateUser}
					/>
				) : (
					<Form addUsers={addUsers} />
				)}

				<UserTables
					users={users}
					deleteUser={deleteUser}
					editUser={editUser}
				/>
			</div>
		</div>
	);
}

export default App;
