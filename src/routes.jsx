import { Navigate, NavLink, Outlet } from "react-router-dom";
import UserEdit from "./pages/userEdit";
import UserProfile from "./pages/userProfile";
import UsersPage from "./pages/usersPage";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <h3>Home</h3>
        <NavLink to="users">Users</NavLink>
      </div>
    ),
  },
  {
    path: "users",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "",
        element: <UsersPage />,
      },
      {
        path: ":userId",
        children: [
          {
            path: "",
            element: <Navigate to="profile" />,
          },
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "edit",
            element: <UserEdit />,
          },
          {
            path: "*",
            element: <Navigate to="profile" />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default routes;
