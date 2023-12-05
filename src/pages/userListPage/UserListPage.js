import React from "react";
import { useSelector } from "react-redux";

function UserListPage() {
  const { usersList } = useSelector(state => state.usersListReducer);

  return (
    <div>
      <h1>Users List:</h1>
      {usersList.map((item) => (
        <ul key={item}>
          <li>Name: {item.name}</li>
          <li>Username: {item.username}</li>
          <li>Email: {item.email}</li>
        </ul>
      ))}
    </div>
  );
}

export default UserListPage;
