import { FETCH_ALL, CREATE, UPDATE, DELETE } from "./constants.js";

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...users, action.payload];

    case UPDATE:
      return users.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );

    case DELETE:
      return users.filter((user) => user._id !== action.payload._id);

    default:
      return users;
  }
};
