import React from "react";
import { NavLink, useParams } from "react-router-dom";

const UserProfile = (name) => {
  const { userId } = useParams();
  const editPath = `/users/${userId}/edit`;

  return (
    <div>
      <NavLink to="/users">Users list</NavLink>
      <p>
        User ID: {userId} <NavLink to={editPath}>edit</NavLink>
      </p>
    </div>
  );
};

export default UserProfile;
