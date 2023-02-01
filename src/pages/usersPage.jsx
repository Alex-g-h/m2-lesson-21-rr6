import React from "react";
import { NavLink } from "react-router-dom";
import users from "../mock/users";

const UsersPage = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <h2>Users:</h2>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              <NavLink to={u.id}>{u.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
