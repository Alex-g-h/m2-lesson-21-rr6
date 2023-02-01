import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { usersCount } from "../mock/users";

const UserEdit = () => {
  const { userId } = useParams();
  const userPath = `/users/${userId}`;

  const anotherUserId = ((Number(userId) + 1) % usersCount).toString();
  const anotherUserPath = `/users/${anotherUserId}`;

  return (
    <div>
      <NavLink to="/users">Users list</NavLink>
      <br />
      <NavLink to={userPath}>User page</NavLink>
      <br />
      <NavLink to={anotherUserPath}>Another user page</NavLink>
      <h3>User edit</h3>
    </div>
  );
};

export default UserEdit;
