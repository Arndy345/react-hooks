import React from "react";
const UserTables = ({
	users,
	deleteUser,
	editUser,
}) => {
	return (
		<div className="table">
			<h2>View Users</h2>
			<table>
				<thead>
					<tr>
						<th>Names</th>
						<th>Username</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 ? (
						users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.username}</td>

								<td>
									<button
										className="btn"
										onClick={() => editUser(user)}
										variant="primary"
										size="sm"
									>
										Edit
									</button>
									<button
										className="btn"
										onClick={() =>
											deleteUser(user.id)
										}
										variant="secondary"
										size="sm"
									>
										Delete
									</button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td>No users</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default UserTables;
