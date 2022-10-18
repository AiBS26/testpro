import { GET_USERS } from '../type';

const usersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
