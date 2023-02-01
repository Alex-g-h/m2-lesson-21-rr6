import User from "./user";

const generateUsers = (usersNumber) => {
  const users = [];
  for (let i = 0; i < usersNumber; i++) {
    users.push(new User(Math.random().toString(36).substring(6)));
  }

  return users;
};

export const usersCount = 5;
export const users = generateUsers(usersCount);

export default users;
